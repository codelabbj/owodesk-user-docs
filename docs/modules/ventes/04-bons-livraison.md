---
sidebar_label: Bons de livraison
sidebar_position: 4
---

# Bons de livraison

## Generer un bon de livraison

1. Ouvrez **Ventes** -> **Commandes**.
2. Selectionnez une commande en statut "confirme".
3. Cliquez **Generer un bon de livraison**.
4. Verifiez les informations :
   - Client et adresse de livraison (pre-remplis depuis la commande).
   - Lignes de commande avec les quantites a livrer.
5. Ajustez les **quantites livrees** si necessaire (livraison partielle).
6. Cliquez **Creer le bon de livraison**.
7. Le bon de livraison est cree avec une reference automatique (format BL-XXXXX).

## Expedier un bon de livraison

1. Ouvrez le bon de livraison depuis **Ventes** -> **Bons de livraison**.
2. Verifiez les informations de la livraison.
3. Cliquez **Expedier**.
4. Le mouvement de stock est declenche automatiquement :
   - Les produits sortent du stock (diminution des quantites).
   - L'ecriture de stock est enregistree.
5. Le statut du bon de livraison passe a "expedie".
6. La commande liee est mise a jour :
   - Les **quantites livrees** sur chaque ligne sont incrementees.
   - Si toutes les lignes sont integralement livrees, la commande passe en "livre".

## Suivi des quantites livrees vs commandees

1. Ouvrez la commande d'origine.
2. La colonne **Qte livree / Qte commandee** indique l'etat d'avancement.
3. Exemple : "3 / 5" signifie que 3 unites sur 5 commandees ont ete livrees.
4. Vous pouvez effectuer plusieurs livraisons partielles jusqu'a atteindre la quantite totale.

<DocImage src="/img/guides/ventes/bon-livraison.png" alt="Creation d'un bon de livraison" />

Une fois la commande livree, vous pouvez generer la facture (voir [Facturer une commande](/modules/ventes/facturer-commande)).
