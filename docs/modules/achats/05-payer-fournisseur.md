---
sidebar_label: Payer un fournisseur
sidebar_position: 5
---

# Payer un fournisseur

1. Ouvrez **Achats** -> **Commandes fournisseur**.
2. Selectionnez une commande en statut "recu".
3. Cliquez **Enregistrer un paiement**.
4. Saisissez les informations de paiement :
   - **Montant** paye.
   - **Date** de paiement.
   - **Methode** de paiement :
     - Especes.
     - Virement bancaire.
     - Mobile money.
     - Carte bancaire.
5. Optionnellement, ajoutez une **reference** ou un **numero de transaction**.

## Effets automatiques du paiement

- Une **depense** est creee automatiquement dans le module Depenses.
- Une **ecriture comptable** est generee :
  - Debit du compte **fournisseur** (classe 40) diminution de la dette.
  - Credit du compte de **tresorerie** correspondant (caisse 57, banque 51, mobile money 58).
- Le statut de la commande passe a **"paye"**.

## Consulter l'historique des paiements

1. Ouvrez **Achats** -> **Paiements fournisseurs**.
2. La liste affiche tous les paiements enregistres avec :
   - Fournisseur concerne.
   - Commande liee.
   - Montant, date et methode de paiement.
3. Cliquez sur un paiement pour voir le detail.

<DocImage src="/img/guides/achats/payer-fournisseur.png" alt="Paiement d'un fournisseur" />
