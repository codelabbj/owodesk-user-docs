---
sidebar_label: Gerer les regles de reapprovisionnement
sidebar_position: 9
---

# Gerer les regles de reapprovisionnement

Les regles de reapprovisionnement declenchent des alertes lorsque le stock atteint un seuil critique.

## Creer une regle de reapprovisionnement

1. Ouvrez **Stock** > **Regles de reapprovisionnement**.
2. Cliquez sur **Nouvelle regle**.
3. Selectionnez le **produit** concerne.
4. Selectionnez l'**entrepot** concerne.
5. Cliquez sur **Enregistrer**.

<DocImage src="/img/guides/stock/regle-reappro.png" alt="Regle de reapprovisionnement" />

## Definir les seuils minimum et maximum

1. Dans la fiche de la regle, definissez :
   - **Quantite minimum** : seuil declenchant l'alerte de reapprovisionnement
   - **Quantite maximum** : objectif de stock apres reapprovisionnement
2. Lorsque le stock descend en dessous du minimum, le produit est marque pour reapprovisionnement.
3. La quantite recommandee est calculee comme : maximum - stock actuel.

## Alertes automatiques quand le stock est bas

1. Lorsque le stock d'un produit passe sous le seuil minimum defini :
   - Le produit apparait dans le tableau de bord **Stock faible**
   - Une notification est envoyee au responsable de l'entrepot
   - Le produit est marque d'un indicateur visuel dans la liste des niveaux de stock
2. Les regles sont verifiees automatiquement a chaque mouvement de stock.
3. Pour supprimer une regle, ouvrez-la et cliquez sur **Supprimer**.
