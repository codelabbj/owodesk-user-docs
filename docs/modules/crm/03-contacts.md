---
sidebar_label: Contacts
sidebar_position: 4
---

# Contacts

Onglet **Contacts** (`/app/crm/contacts`).

## Liste

- **Ajouter le contact** ;
- **Importer CSV** (si module imports / IO → `/app/io/imports?target_module=crm`) ;
- KPI : **Contacts**, **Avec email**, **Score ≥ 60** ;
- Recherche *Rechercher par nom, email, téléphone, entreprise, tags…* ;
- Filtres : Source, **Tags**, Score min/max, Entreprise, Tri (Score, Nom), **Effacer**.

## Formulaire

| Champ | Description |
|-------|-------------|
| **Prénom** / **Nom** | |
| **Email** / **Téléphone** | |
| **Entreprise** | + **Nouvelle entreprise** |
| **IFU**, **Adresse**, **Ville**, **Pays** | |
| **Source**, **Score**, **Tags** | |
| **Titre du poste**, **URL LinkedIn** | |
| **Actif** | |

## Fiche contact (vue 360°)

Cliquez sur le contact → `/app/crm/contacts/{id}`.

- **← Retour aux contacts** ;
- Banniere **Entreprise rattachée** + **Voir la fiche entreprise** si lié ;
- Mêmes KPI et sous-onglets que la fiche entreprise (sans l’onglet Contacts) : voir [Vue 360°](/modules/crm/vue-360).
