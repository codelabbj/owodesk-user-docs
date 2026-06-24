---
sidebar_label: Dettes & creances
sidebar_position: 6
---

# Dettes & creances

Onglet **Dettes & Creances** (`/app/accounting/debts`). Suivi des impayes clients et des engagements fournisseurs.

## Filtres

- Case **Retards seulement** : n'affiche que les creances en retard ;
- **Date de debut** et **date de fin** (optionnels).

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Creances Clients** | Montant total + nombre de clients |
| **Dettes Fournisseurs** | Montant total + nombre de fournisseurs |

## Detail des creances clients

Liste par client (nom, nombre de factures, total du).

Cliquez sur un client pour deployer le detail :

| Colonne | Contenu |
|---------|---------|
| **Facture** | Numero |
| **Date** | Date d'emission |
| **Reste** | Solde impaye (icone alerte si en retard) |

## Detail des dettes fournisseurs

Liste par fournisseur (nom, nombre de commandes, total du).

Cliquez sur un fournisseur pour deployer le detail :

| Colonne | Contenu |
|---------|---------|
| **Ref** | Reference commande d'achat |
| **Statut** | Etat de la commande |
| **Montant** | Montant restant |

Les creances proviennent des factures impayees. Les dettes proviennent des commandes fournisseurs non soldees.
