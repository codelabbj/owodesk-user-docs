#!/usr/bin/env node
/**
 * Capture automatique des screenshots doc OwoDesk (Playwright).
 *
 * Usage:
 *   cp .env.screenshots.example .env.screenshots
 *   npm run screenshots:install
 *   npm run screenshots
 *   npm run screenshots -- --force
 *   npm run screenshots -- --only stock,rh
 *   npm run screenshots -- --static-only
 */

import { chromium } from 'playwright';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_DIR = join(ROOT, 'static', 'img', 'guides');
const MANIFEST = join(__dirname, 'screenshots.manifest.json');

function loadEnvFile(path) {
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(join(ROOT, '.env.screenshots'));

const EMAIL = process.env.SCREENSHOT_EMAIL;
const PASSWORD = process.env.SCREENSHOT_PASSWORD;
const BASE_URL = (process.env.SCREENSHOT_BASE_URL || 'http://localhost:5173').replace(/\/$/, '');
const API_URL = (process.env.SCREENSHOT_API_URL || 'http://localhost:8000').replace(/\/$/, '');
const HEADLESS = process.env.SCREENSHOT_HEADLESS !== 'false';
const SLOW_MO = Number(process.env.SCREENSHOT_SLOW_MO || 0);

const args = process.argv.slice(2);
const force = args.includes('--force');
const staticOnly = args.includes('--static-only');
const onlyIdx = args.indexOf('--only');
const onlyFilter = onlyIdx >= 0 ? args[onlyIdx + 1]?.split(',').map((s) => s.trim()) : null;

if (!EMAIL || !PASSWORD) {
  console.error('Identifiants manquants. Créez user-docs/.env.screenshots');
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));

function shouldCapture(file) {
  if (!onlyFilter?.length) return true;
  return onlyFilter.some((prefix) => file.startsWith(prefix));
}

async function apiGet(token, path, orgId) {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
  };
  if (orgId) headers['X-Current-Org-Id'] = orgId;
  const res = await fetch(`${API_URL}${path}`, { headers });
  if (!res.ok) return null;
  return res.json();
}

async function resolveDynamicPath(token, orgId, dynamic) {
  if (dynamic === 'firstInvoiceDraft') {
    const data = await apiGet(token, '/api/billing/invoices/?page_size=20', orgId);
    const list = data?.results ?? data ?? [];
    const inv = list.find((i) => i.status === 'draft') ?? list[0];
    if (inv?.id) return `/app/billing/invoices/${inv.id}`;
  }
  if (dynamic === 'firstEmployee') {
    const data = await apiGet(token, '/api/hr/employees/?page_size=20', orgId);
    const list = data?.results ?? data ?? [];
    if (list[0]?.id) return `/app/hr/employees/${list[0].id}`;
  }
  return null;
}

async function fetchSession() {
  const tokenRes = await fetch(`${API_URL}/api/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
  });
  if (!tokenRes.ok) {
    throw new Error(`Login API échoué (${tokenRes.status}): ${await tokenRes.text()}`);
  }
  const { access, refresh } = await tokenRes.json();
  const meRes = await fetch(`${API_URL}/api/me/`, {
    headers: { Authorization: `Bearer ${access}`, Accept: 'application/json' },
  });
  if (!meRes.ok) {
    throw new Error(`/api/me/ échoué (${meRes.status})`);
  }
  const me = await meRes.json();
  return { access, refresh, me };
}

async function refreshAccessToken(session) {
  const res = await fetch(`${API_URL}/api/token/refresh/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh: session.refresh }),
  });
  if (!res.ok) {
    const fresh = await fetchSession();
    Object.assign(session, fresh);
    return fresh;
  }
  const { access } = await res.json();
  session.access = access;
  return session;
}

async function syncBrowserSession(page, session) {
  const { access, refresh, me } = session;
  await page.evaluate(
    ({ accessToken, refreshToken, user, org, orgs }) => {
      localStorage.setItem('access', accessToken);
      localStorage.setItem('refresh', refreshToken);
      localStorage.setItem(
        'auth-storage',
        JSON.stringify({
          state: { isAuthenticated: true, user },
          version: 0,
        }),
      );
      localStorage.setItem(
        'org-storage',
        JSON.stringify({
          state: { org: org ?? null, orgs: orgs ?? [] },
          version: 0,
        }),
      );
    },
    {
      accessToken: access,
      refreshToken: refresh,
      user: me.user,
      org: me.org ?? null,
      orgs: me.orgs ?? [],
    },
  );
}

function buildStorageState(session) {
  const { access, refresh, me } = session;
  return {
    origins: [
      {
        origin: BASE_URL,
        localStorage: [
          { name: 'access', value: access },
          { name: 'refresh', value: refresh },
          {
            name: 'auth-storage',
            value: JSON.stringify({
              state: { isAuthenticated: true, user: me.user },
              version: 0,
            }),
          },
          {
            name: 'org-storage',
            value: JSON.stringify({
              state: { org: me.org ?? null, orgs: me.orgs ?? [] },
              version: 0,
            }),
          },
        ],
      },
    ],
  };
}

async function loginViaUi(page) {
  await page.goto(`${BASE_URL}/login`, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  await page.locator('input[type="email"]').fill(EMAIL);
  await page.locator('#login-password').fill(PASSWORD);

  const tokenResponse = page.waitForResponse(
    (res) => res.url().includes('/api/token/') && res.request().method() === 'POST',
    { timeout: 30_000 },
  );
  await page.locator('button[type="submit"]').click();
  const response = await tokenResponse;
  if (!response.ok()) {
    throw new Error(`Login UI échoué (${response.status()})`);
  }

  await page.waitForURL((url) => url.pathname.startsWith('/app/'), { timeout: 60_000 });
  await page.waitForResponse(
    (res) => res.url().includes('/api/me/') && res.request().method() === 'GET' && res.status() === 200,
    { timeout: 45_000 },
  ).catch(() => {
    console.warn('  (avertissement: /api/me/ non confirmé après login UI)');
  });
}

async function waitForAppShell(page, shell = '.app-layout') {
  const url = page.url();
  if (url.includes('/login')) {
    throw new Error('Page login — non authentifié');
  }
  await page.waitForSelector(shell, { state: 'visible', timeout: 45_000 });
  if (shell === '.app-layout' && (await page.locator('.auth-layout').isVisible().catch(() => false))) {
    throw new Error('Layout login visible — capture refusée');
  }
}

async function waitForStableSession(page, shell = '.app-layout') {
  await waitForAppShell(page, shell);

  await page
    .waitForResponse(
      (res) =>
        res.url().includes('/api/me/') &&
        res.request().method() === 'GET' &&
        res.status() === 200,
      { timeout: 30_000 },
    )
    .catch(() => null);

  // Laisser OnboardingGuard terminer ; détecter une redirection tardive vers /login
  await page.waitForTimeout(1500);

  if (page.url().includes('/login')) {
    throw new Error('Redirigé vers login pendant le chargement');
  }
  if (shell === '.app-layout' && (await page.locator('.auth-layout').isVisible().catch(() => false))) {
    throw new Error('Layout login visible après chargement');
  }
  await page.waitForSelector(shell, { state: 'visible', timeout: 5_000 });
}

async function hideAssistant(page) {
  await page.addStyleTag({
    content: `
      [class*="assistant"], [data-testid*="assistant"], .owo-assistant-fab {
        display: none !important;
      }
    `,
  }).catch(() => {});
}

async function captureShot(page, shot, session) {
  const outPath = join(OUT_DIR, shot.file);
  if (!force && existsSync(outPath)) {
    console.log(`  skip (existe) ${shot.file}`);
    return { ok: true, skipped: true };
  }

  let path = shot.path;
  if (shot.dynamic) {
    const resolved = await resolveDynamicPath(session.access, session.me.org?.id, shot.dynamic);
    if (!resolved) {
      console.warn(`  skip (dynamic introuvable) ${shot.file}`);
      return { ok: false, skipped: true };
    }
    path = resolved;
  }

  try {
    await refreshAccessToken(session);
    await syncBrowserSession(page, session);

    await page.goto(`${BASE_URL}${path}`, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    const shell = shot.shell ?? '.app-layout';
    await waitForStableSession(page, shell);
    await hideAssistant(page);
    if (shot.waitFor) {
      await page.waitForSelector(shot.waitFor, { timeout: 20_000 }).catch(() => {});
    }
    await page.waitForTimeout(800);

    if (page.url().includes('/login')) {
      throw new Error('Session expirée — page login avant capture');
    }
    if (shell === '.app-layout' && (await page.locator('.auth-layout').isVisible().catch(() => false))) {
      throw new Error('Layout login visible avant capture');
    }

    mkdirSync(dirname(outPath), { recursive: true });
    await page.screenshot({ path: outPath, fullPage: shot.fullPage ?? false });
    console.log(`  ✓ ${shot.file}`);
    return { ok: true };
  } catch (err) {
    console.error(`  ✗ ${shot.file} — ${err.message}`);
    return { ok: false };
  }
}

async function main() {
  console.log(`Base URL : ${BASE_URL}`);
  console.log(`API URL  : ${API_URL}`);
  console.log(`Sortie   : ${OUT_DIR}\n`);

  const session = await fetchSession();
  console.log(`✓ API OK — ${session.me.user?.email} / ${session.me.org?.name ?? 'sans org'}\n`);

  const browser = await chromium.launch({ headless: HEADLESS, slowMo: SLOW_MO });
  const context = await browser.newContext({
    viewport: manifest.viewport ?? { width: 1440, height: 900 },
    locale: 'fr-FR',
    storageState: buildStorageState(session),
  });
  const page = await context.newPage();

  await loginViaUi(page);
  await waitForStableSession(page);
  console.log('✓ Session navigateur validée (.app-layout + /api/me/)\n');

  const shots = manifest.shots
    .filter((s) => shouldCapture(s.file))
    .filter((s) => !staticOnly || !s.dynamic);
  const publicShots = shots.filter((s) => s.auth === false);
  const authShots = shots.filter((s) => s.auth !== false);

  for (const shot of publicShots) {
    await captureShot(page, shot, session);
  }
  for (const shot of authShots) {
    await captureShot(page, shot, session);
  }

  await browser.close();

  console.log('\n--- Captures manuelles (inchangées) ---');
  for (const m of manifest.manualOnly ?? []) {
    console.log(`  • ${m.file} — ${m.reason}`);
  }
  console.log('\nTerminé.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
