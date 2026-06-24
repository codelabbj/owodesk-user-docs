# Téléchargements PDF

Guides à imprimer, partager en interne ou consulter hors ligne.

## Guides disponibles

| Document | Description | Statut |
|----------|-------------|--------|
| Guide de démarrage | Compte, entreprise, équipe, modules | À générer |
| Guide Commercial | CRM + facturation | À générer |
| Guide Comptable | Facturation + comptabilité | À générer |
| Guide RH | Employés, paie, congés | À générer |
| Guide Stock | Produits, entrepôts, mouvements | À générer |

## Comment générer les PDF

Depuis ce site (en développement) :

```bash
cd user-docs
npm run build
# Puis imprimer depuis le navigateur (Ctrl+P) ou utiliser un outil d'export PDF
```

:::info À compléter
Mettre en place un script d'export PDF automatique (ex. `docusaurus-plugin-pdf` ou CI).
:::

Les fichiers PDF finaux seront déposés dans `static/pdf/` et listés ici.
