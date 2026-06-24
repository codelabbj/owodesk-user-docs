---
sidebar_label: Gerer les paiements
sidebar_position: 4
---

# Gerer les paiements

Les paiements permettent d'enregistrer les encaissements et de suivre le solde de chaque facture.

## Marquer une facture comme payee (montant total)

1. Ouvrez **Facturation** > **Factures**.
2. Ouvrez la facture a encaisser.
3. Cliquez sur **Ajouter un paiement**.
4. Saisissez le **montant** (doit correspondre au total TTC).
5. Selectionnez la **methode de paiement**.
6. Cliquez sur **Enregistrer**.
7. La facture passe automatiquement en statut **Payee** et se verrouille.

<DocImage src="/img/guides/facturation/paiement-total.png" alt="Paiement total d'une facture" />

## Enregistrer un paiement partiel

1. Ouvrez la facture a encaisser partiellement.
2. Cliquez sur **Ajouter un paiement**.
3. Saisissez un **montant** inferieur au total TTC.
4. Enregistrez le paiement.
5. La facture reste en statut **Partiellement payee** avec le solde affiche.
6. Vous pouvez ajouter d'autres paiements ulterieurement jusqu'a solde nul.

## Ajouter un paiement en attente

1. Lors de l'ajout d'un paiement, selectionnez **En attente** comme statut.
2. Ce statut est utilise pour les cheques, virements bancaires non recus ou promesses de paiement.
3. Le montant est reserve mais la facture reste **Impayee** ou **Partiellement payee**.

## Confirmer un paiement en attente

1. Ouvrez **Facturation** > **Paiements en attente**.
2. Cliquez sur le paiement a confirmer.
3. Verifiez les informations (montant, methode, reference).
4. Cliquez sur **Confirmer**.
5. Le paiement est applique a la facture et le solde est mis a jour.

## Methodes de paiement

Les methodes disponibles sont :

- **Especes** : encaissement en numeraire
- **Carte bancaire** : paiement par terminal electronique
- **Mobile money** : MTN Money, Moov Money, et autres
- **Banque** : virement ou depot bancaire
- **Cheque** : paiement differe

## Cloture automatique de la facture

1. A chaque ajout ou confirmation de paiement, le systeme recalcule le solde.
2. Des que la somme des paiements atteint le total TTC, la facture passe en **Payee**.
3. Une facture payee ne peut plus etre modifiee.
4. Pour la modifier, il faut d'abord annuler les paiements.
