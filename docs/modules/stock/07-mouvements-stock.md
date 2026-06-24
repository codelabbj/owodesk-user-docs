---
sidebar_label: Enregistrer un mouvement de stock
sidebar_position: 7
---

# Enregistrer un mouvement de stock

Les mouvements de stock tracent chaque variation de quantite, qu'elle soit manuelle ou automatique.

## Types de mouvements

- **Entree** : ajout de stock (achat, production, retour fournisseur)
- **Sortie** : retrait de stock (vente, utilisation interne)
- **Transfert** : deplacement entre deux entrepots
- **Ajustement** : correction de stock (inventaire)
- **Perte** : disparition constatee (vol, egarement)
- **Dechet** : produit impropre a la vente
- **Casse** : produit endommage

## Enregistrer une entree de stock

1. Ouvrez **Stock** > **Mouvements**.
2. Cliquez sur **Nouveau mouvement**.
3. Selectionnez le type **Entree**.
4. Renseignez les champs :
   - **Produit** concerne
   - **Entrepot** de destination
   - **Quantite** recue
   - **Date** du mouvement
   - **Motif** ou reference (bon de livraison, facture fournisseur)
5. Cliquez sur **Valider**.
6. Le niveau de stock est mis a jour immediatement.

<DocImage src="/img/guides/stock/mouvement-entree.png" alt="Entree de stock" />

## Enregistrer une sortie

1. Ouvrez **Stock** > **Mouvements**.
2. Cliquez sur **Nouveau mouvement**.
3. Selectionnez le type **Sortie**.
4. Renseignez :
   - **Produit** concerne
   - **Entrepot** de provenance
   - **Quantite** sortante
   - **Motif** (vente, utilisation, don)
5. Cliquez sur **Valider**.
6. Le stock est decremente.

## Transferer du stock entre entrepots

1. Cliquez sur **Nouveau mouvement**.
2. Selectionnez le type **Transfert**.
3. Renseignez :
   - **Produit** a transferer
   - **Entrepot source** (origine)
   - **Entrepot destination**
   - **Quantite** a transferer
4. Cliquez sur **Valider**.
5. Le stock est decremente de l'entrepot source et ajoute a l'entrepot destination.
6. L'historique du transfert est conserve dans les deux entrepots.

## Ajuster le stock

1. Cliquez sur **Nouveau mouvement**.
2. Selectionnez le type **Ajustement**.
3. Renseignez le **produit**, l'**entrepot** et la **nouvelle quantite**.
4. Le systeme calcule automatiquement la difference.
5. Ajoutez un **motif** d'ajustement (ex. "Erreur de saisie", "Inventaire").
6. Cliquez sur **Valider**.

## Declarer une perte (avec motif obligatoire)

1. Cliquez sur **Nouveau mouvement**.
2. Selectionnez le type **Perte**.
3. Renseignez le **produit**, l'**entrepot** et la **quantite** perdue.
4. Le champ **Motif** est obligatoire : decrivez la cause de la perte (vol, egarement, etc.).
5. Cliquez sur **Valider**.
6. La perte est enregistree et le stock est ajuste.

## Consulter l'historique des mouvements

1. Ouvrez **Stock** > **Mouvements**.
2. La liste affiche tous les mouvements classes par date recente.
3. Filtrez par :
   - **Type** de mouvement (entree, sortie, transfert)
   - **Produit** concerne
   - **Entrepot**
   - **Periode** (date de debut et de fin)
4. Cliquez sur un mouvement pour voir le detail complet.
