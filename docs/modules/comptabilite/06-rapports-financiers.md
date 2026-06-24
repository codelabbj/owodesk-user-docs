---
sidebar_label: Rapports
sidebar_position: 7
---

# Rapports

Onglet **Rapports** (`/app/accounting/reports`). Synthese financiere et exports CSV.

## Filtre periode

Selecteurs **date de debut** et **date de fin** (par defaut : mois en cours).

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Chiffre d'Affaires** | Total des revenus sur la periode |
| **Charges Totales** | Total des depenses |
| **Resultat Net** | Benefice ou perte (vert si positif, rouge si negatif) |

## Repartition des depenses

Barres de progression par categorie : nom, montant, pourcentage du total.

## Actions & exports

Trois exports CSV (compatibles Excel / Google Sheets) :

| Export | Contenu |
|--------|---------|
| **Resume Financier** | Synthese globale sur la periode |
| **Detail des Revenus** | Liste des encaissements |
| **Detail des Depenses** | Liste des charges |

Fichiers nommes `rapport_{type}_{date_debut}_{date_fin}.csv`.
