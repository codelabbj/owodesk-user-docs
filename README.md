# OwoDesk — Documentation client

Centre d'aide destiné aux **entreprises** qui utilisent OwoDesk (dirigeants, commerciaux, comptables, RH, employés).

## Structure

```
user-docs/
├── docs/
│   ├── accueil.md                 # Page d'accueil
│   ├── premiers-pas/              # 🚀 8 articles
│   ├── modules/                   # 📦 modules → une page par action
│   ├── administration/            # ⚙️ 4 articles
│   ├── faq/                       # ❓ FAQ
│   └── telechargements/           # 📥 PDF
├── docusaurus.config.ts
├── sidebars.ts
└── static/                        # Images, PDF, favicon
```

## Démarrage local

```bash
cd user-docs
npm install
npm start
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm run serve   # prévisualiser le build
```

Le dossier `build/` contient le site statique prêt à déployer (Netlify, Vercel, S3, etc.).

## Rédaction

- Langue : **français** (utilisateurs non techniques)
- Chaque article peut contenir des blocs `:::info À compléter` pour marquer le contenu à enrichir
- **Captures d'écran** : voir ci-dessous
- Les articles utilisent le Markdown Docusaurus (admonitions, mermaid, etc.)

## Captures d'écran

Toutes les images vont dans `static/img/` (servies à la racine du site sous `/img/...`).

Organisation recommandée par section :

```
static/img/guides/
├── premiers-pas/
│   └── email-confirmation.png    → page /premiers-pas/creer-compte
├── modules/
│   ├── facturation/
│   │   └── parcours/
│   └── ...
```

Dans un article Markdown :

```markdown
![Description de l'image](/img/guides/premiers-pas/email-confirmation.png)
```

Le chemin commence toujours par `/img/` (pas `static/`).

## Déploiement suggéré

- **docs.owodesk.com** — sous-domaine dédié
- Lien depuis l'app : bouton « Centre d'aide » → URL de la doc

## Stack

- [Docusaurus 3](https://docusaurus.io/) — site statique, recherche intégrée, thème clair/sombre
