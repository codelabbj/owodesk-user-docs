---
sidebar_label: Vue d'ensemble
sidebar_position: 2
---

# Vue d'ensemble

Onglet **Vue d'ensemble** du module Facturation (`/app/billing/dashboard`). Cette page resume l'activite de facturation et donne un acces rapide a la creation de factures.

## Acceder a la page

1. Menu lateral **Facturation**.
2. Onglet **Vue d'ensemble** (premier onglet, page par defaut du module).

## Indicateurs (KPI)

Trois cartes en haut de page :

| Indicateur | Signification |
|------------|---------------|
| **Argent en attente** | Montant total des factures non soldees |
| **Encaisse ce jour** | Montant encaisse aujourd'hui |
| **Factures recentes** | Nombre de factures dans la liste recente |

## Alerte factures en retard

Si des factures sont en retard (impayees depuis plus de 30 jours), une banniere orange s'affiche avec :

- le nombre de factures concernees ;
- le montant total ;
- les noms des clients ;
- un lien **Voir** vers la liste [Factures](/modules/facturation/factures).

## Dernieres factures

Tableau des factures les plus recentes avec :

- **Reference** (numero de facture) ;
- **Client** ;
- **Montant** ;
- **Etat** de paiement : Payee, Partiel ou Impayee.

Cliquez sur une ligne pour ouvrir le [detail de la facture](/modules/facturation/factures#detail-dune-facture).

Lien **Toutes** en haut a droite : ouvre la liste complete des factures.

## Derniers encaissements

Tableau des paiements recents :

- **Reference** (facture ou vente POS) ;
- **Mode** de paiement ;
- **Montant** ;
- **Date**.

Lien **Paiements** : redirige vers la liste des factures.

## Actions rapides

Deux boutons en haut a droite :

- **Facture unientrepot** : ouvre [Facture unientrepot](/modules/facturation/facture-unientrepot).
- **Facture multientrepot** : ouvre [Facture multientrepot](/modules/facturation/facture-multientrepot).
