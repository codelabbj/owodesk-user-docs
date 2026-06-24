---
sidebar_label: Receptionner des marchandises
sidebar_position: 4
---

# Receptionner des marchandises

1. Ouvrez **Achats** -> **Commandes fournisseur**.
2. Selectionnez une commande en statut "confirme" ou "partiellement recu".
3. Cliquez **Receptionner**.
4. La fenetre de reception s'affiche avec les lignes de la commande.
5. Pour chaque ligne, saisissez la **quantite recue** :
   - Reception totale : saisissez la quantite commandee.
   - Reception partielle : saisissez une quantite inferieure a la commande.
6. Cliquez **Valider la reception**.

## Effets automatiques de la reception

- Un **bon de reception** est cree automatiquement avec le detail des quantites recues.
- Un **mouvement de stock entrant** est enregistre : les produits sont ajoutes au stock disponible.
- Une **ecriture comptable** est generee automatiquement :
  - Debit du compte **601** (achats de marchandises) du montant hors taxes.
  - Debit du compte de **TVA deductible**.
  - Credit du compte **fournisseur** (classe 40) pour le total TTC.

## Suivi des receptions

1. Ouvrez la commande pour consulter les quantites **recues / commandees** par ligne.
2. Exemple : "50 / 100" signifie que 50 unites sur 100 ont ete recues.
3. Quand toutes les lignes sont integralement recues, la commande passe automatiquement en statut "recu".

<DocImage src="/img/guides/achats/receptionner-marchandises.png" alt="Reception de marchandises" />

Pour payer le fournisseur, voir [Payer un fournisseur](/modules/achats/payer-fournisseur).
