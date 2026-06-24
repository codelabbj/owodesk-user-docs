---
sidebar_label: Enregistrer une depense
sidebar_position: 2
---

# Enregistrer une depense

## Saisie complete

1. Ouvrez **Depenses** -> **Depenses**.
2. Cliquez **Nouvelle depense**.
3. Remplissez les informations :
   - **Montant** de la depense.
   - **Description** (ex : "Achat de fournitures de bureau").
   - **Categorie** : selectionnez une categorie (Loyer, Electricite, etc.).
   - **Date** de la depense.
   - **Reference / numero de recu** (optionnel).
4. Selectionnez la **methode de paiement** :
   - Especes.
   - Banque.
   - Mobile money.
   - Carte bancaire.
5. Optionnellement, ajoutez des **pieces jointes** (URLs, maximum 20).
6. Cliquez **Enregistrer**.

## Saisie rapide

1. Dans la liste des depenses, utilisez le champ de **saisie rapide** en haut de la page.
2. Entrez le **montant**, la **description** et la **date**.
3. Cliquez **Ajouter**.
4. La depense est creee avec la categorie "Non categorise" et la methode de paiement par defaut.

## Ecriture comptable automatique

Chaque depense enregistree genere automatiquement une ecriture comptable :

- Debit du compte de **charge** correspondant a la categorie (classe 6).
- Credit du compte de **tresorerie** correspondant (caisse, banque ou mobile money).

<DocImage src="/img/guides/depenses/enregistrer-depense.png" alt="Enregistrement d'une depense" />
