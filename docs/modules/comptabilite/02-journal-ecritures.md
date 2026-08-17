---
sidebar_label: Journal des écritures
sidebar_position: 3
---

# Journal des écritures

Écran **Journal des écritures** (`/app/comptabilite/entries`).

## Liste

- Filtres (dont statut / période via la barre du module) ;
- **Nouvelle écriture** ;
- Statuts : **À valider**, **Brouillon**, **Comptabilisée** ;
- Actions : **Valider**, **Rejeter**, **Comptabiliser** (selon droits et état).

## Détail

Page `/app/comptabilite/entries/{id}` :

- numéro de pièce ;
- lignes débit / crédit ;
- badge **Équilibrée** / **Déséquilibrée** ;
- lien vers le **document source** (facture, paiement, vente POS, dépense…) le cas échéant.

Les écritures hors période d’exercice ou sur un exercice **clôturé** sont refusées.
