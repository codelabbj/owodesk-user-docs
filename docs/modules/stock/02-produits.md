---
sidebar_label: Produits
sidebar_position: 3
---

# Produits

Onglet **Produits** (`/app/inventory/products`). Catalogue articles : SKU, prix, categories, variantes et codes-barres.

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Catalogue produits** | Nombre de produits |
| **SKUs** | Produits + variantes |
| **Stock faible** | Produits sous seuil d'alerte |

## Recherche et filtres

- Champ de **recherche** (nom, SKU, code-barres).
- Filtre de statut : **Actifs**, **Archives**, **Tous**.

## Ajouter ou modifier un produit

Bouton **Ajouter le produit**. Formulaire principal :

| Champ | Description |
|-------|-------------|
| **Nom** | Libelle du produit (SKU auto-genere si non modifie) |
| **SKU** | Reference unique (non modifiable apres creation) |
| **Prix de vente** | Prix de vente |
| **Prix d'achat** | Cout d'achat (reprend le prix de vente si vide) |
| **Groupe de taxe** | A a F (ex. B = 18 %, A = exonere) |
| **Categorie** | Combobox avec categories existantes ou nouvelle |
| **Unite** | u, pcs, kg, L, carton, etc. |
| **Code-barres** | EAN, QR… Bouton **Scanner** pour douchette |
| **Actif** | Decochez pour archiver le produit |

### Options avancees

Section repliable : **description**, **URL image**, **poids**, **dimensions** (L × l × H).

### Variantes

Pour un produit avec tailles, couleurs, etc. :

1. Enregistrez d'abord le produit.
2. Section **Variantes** : **Ajouter une variante**.
3. Renseignez SKU, nom, attributs (ex. Taille : L), prix vente/achat.
4. Palier de prix optionnel par variante.

Chaque variante a son propre SKU et peut avoir un stock distinct.

## Liste des produits

Pour chaque ligne : image, nom, SKU, categorie, prix, badge statut. Actions :

| Action | Effet |
|--------|-------|
| **Crayon** | Modifier le produit |
| **Code-barres** | Ouvrir la fenetre code-barres / etiquette |
| **Corbeille** | Supprimer (si aucune reference bloquante) |

## Code-barres

Le bouton code-barres ouvre une modale pour visualiser ou gerer le code-barres du produit.
