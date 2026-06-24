---
sidebar_label: Tresorerie
sidebar_position: 3
---

# Tresorerie

Onglet **Tresorerie** (`/app/accounting/treasury`). Soldes des comptes de classe 5 (caisses, banques, mobile money) et virements internes.

## Cartes de soldes

Chaque compte affiche :

- **Code** et **nom** du compte ;
- **Solde** actuel (rouge si negatif) ;
- **Entrees** et **Sorties** cumulees.

Cliquez sur une carte pour afficher son historique.

Icones selon le type de compte : especes (57), banque (51), mobile money (58).

## Historique des transactions

Apres selection d'un compte :

- Filtres **date de debut** et **date de fin** ;
- Tableau : Date, Libelle / Reference ecriture, Debit (+), Credit (−).

Sans compte selectionne : message **Cliquez sur un compte pour voir les details**.

## Virement interne

Panneau lateral **Virement Interne** :

| Champ | Description |
|-------|-------------|
| **Source** | Compte debiteur |
| **Destination** | Compte crediteur |
| **Montant** | Montant du virement |
| **Date** | Date de l'operation |

Bouton **Valider le virement**. Action irreversible apres validation.

Les virements mettent a jour les soldes des deux comptes.
