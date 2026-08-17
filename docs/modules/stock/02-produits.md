---
sidebar_label: Produits
sidebar_position: 3
---

# Produits

Onglet **Produits** (`/app/inventory/products`). Catalogue : SKU, prix, catégories, variantes, codes-barres.

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Catalogue produits** | Nombre de produits |
| **SKUs** | Produits + variantes |
| **Stock faible** | Sous seuil d’alerte |

## Recherche et filtres

- Recherche (nom, SKU, code-barres) ;
- Statut : **Actifs** / **Archivés** / **Tous** ;
- **Toutes les catégories** (filtre).

## Ajouter ou modifier un produit

Bouton **Ajouter le produit** :

| Champ | Description |
|-------|-------------|
| **Nom** | Libellé |
| **SKU** | Auto ; **non modifiable** après création |
| **Prix de vente** / **Prix d’achat** | |
| **Catégorie** | Voir [Catégories](/modules/stock/categories) |
| **Unité** | u, Pièce, kg, g, L, ml, Carton, Paquet, Boîte, Sac, Tonne… |
| **Groupe de taxe** | A–F (ex. A exonéré, B 18 %) |
| **Fiscalité avancée — régime** | Standard / Taxe de séjour / Taxe spécifique |
| **Code-barres** + **Scanner** | |
| **Actif** | Décocher pour archiver |
| **Produit vendable** | Si décoché : hors caisse / factures |

### Options avancées

Description, URL image, poids, dimensions (L × l × H).

### Variantes

**Ajouter une variante** : nom, SKU, code-barres, images (max 20), **paliers de prix**, **variante de base**.

À la création : stock initial possible **par entrepôt**.

Après création, l’app peut proposer : *Ajouter ce produit au stock d’un entrepôt ?* → **Ajouter au stock** / **Plus tard**.

## Liste

Actions : modifier, code-barres (impression / téléchargement tailles Petite/Moyenne/Grande), supprimer.
