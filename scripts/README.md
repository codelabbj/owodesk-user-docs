# Scripts — captures d'écran documentation

## Prérequis

- Node 20+
- App OwoDesk accessible (`SCREENSHOT_BASE_URL`)
- Backend API joignable (`SCREENSHOT_API_URL`) pour les pages dynamiques (facture, employé)
- Compte avec **propriétaire** et modules activés (facturation, stock, RH, POS…)

## Installation

```bash
cd user-docs
npm install
npm run screenshots:install
cp .env.screenshots.example .env.screenshots
# Éditer .env.screenshots avec email / mot de passe / URL prod
```

## Lancer les captures

```bash
npm run screenshots              # modules uniquement (voir screenshots.manifest.json)
npm run screenshots -- --force   # écrase les PNG existants
npm run screenshots -- --only stock,rh
```

Les fichiers sont écrits dans `static/img/guides/<section>/`.

## Limites

Le manifeste ne couvre que les **modules** (stock, RH, POS, facturation, etc.). Les captures `premiers-pas/` et `fiscal/` déjà en place ne sont pas regénérées (sauf avec `--force` sur un fichier existant).

- Email de confirmation
- Étapes onboarding (compte neuf)
- PDF facture normalisée avec QR
- Ticket POS certifié
- Mode hors ligne / installateur bureau

## Sécurité

- **Ne commitez jamais** `.env.screenshots`
- Utilisez un compte de démo avec données fictives
- Changez le mot de passe si exposé dans un chat
