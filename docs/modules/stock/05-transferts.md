---
sidebar_label: Transferts
sidebar_position: 6
---

# Transferts

Onglet **Transferts** (`/app/inventory/transfers`). Deplacez du stock d'un entrepot vers un autre.

Deux modes via les onglets internes :

| Mode | Usage |
|------|-------|
| **Un produit** | Transfert unitaire |
| **Transfert en lot** | Plusieurs produits en une operation |

## Transfert — un produit

| Champ | Description |
|-------|-------------|
| **Entrepot source** | D'ou part le stock |
| **Entrepot destination** | Ou arrive le stock |
| **Produit** | Article a transferer |
| **Variante** | Si applicable |
| **Quantite** | Nombre d'unites (stock disponible affiche a la source) |
| **Reference** | Libelle optionnel (ex. BL-2024-001) |

Bouton pour lancer le transfert.

## Transfert en lot

Meme entrepots source et destination pour toutes les lignes.

Chaque ligne : **produit**, **variante**, **quantite**. Bouton **Ajouter une ligne** pour en ajouter d'autres.

**Reference du lot** : libelle commun a tous les mouvements (genere automatiquement si vide).

## Historique

Tableau des **50 derniers transferts** : date, produit, source → destination, quantite, reference.

Les transferts sont aussi visibles dans [Mouvements](/modules/stock/mouvements) (type Transfert).
