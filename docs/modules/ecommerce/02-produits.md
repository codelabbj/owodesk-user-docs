---
sidebar_label: Produits
sidebar_position: 3
---

# Produits

Onglet **Produits** (`/app/ecommerce/products`). Catalogue marketplace synchronise avec l'inventaire.

## En-tete

Titre **Produits** avec rappel de synchronisation inventaire. Bouton **Actualiser** (hors formulaire ouvert).

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Total** | Nombre de produits |
| **Publies** | En ligne |
| **Non publies** | Brouillons |

## Formulaire produit

S'ouvre via **Modifier** (crayon) sur une ligne. Pas de bouton **Ajouter** : les nouveaux produits viennent de l'[Inventaire](/modules/stock/produits).

| Champ | Description |
|-------|-------------|
| **Importer depuis l'inventaire** | Lie un produit stock existant |
| **Nom** | Obligatoire |
| **Description** | Texte libre |
| **Prix / Prix promo** | Tarifs marketplace |
| **Stock** | Desactive si lie a l'inventaire |
| **Categorie** | Liste deroulante |
| **Images** | Upload fichier ou URL (max 20), apercu avec suppression |
| **Publie** | Brouillon ou Publie |

Actions : **Enregistrer**, **Annuler**, fermeture (X).

Dialogues de confirmation pour supprimer un produit ou une variante.

## Barre d'outils

Recherche par nom, slug ou categorie avec effacement.

## Liste des produits

Lignes deployables :

- miniature, nom, slug ;
- badge **Publie** / **Brouillon** ;
- badge inventaire si lie ;
- stock ;
- **Publier** / **Depublier** ;
- **Modifier**, **Supprimer** (suppression impossible si lie a l'inventaire).

### Variantes (ligne deployee)

- Compteur de variantes, badge **Depuis l'inventaire** si applicable ;
- si inventaire : message de gestion automatique ;
- si manuel : formulaire inline (Label, Prix, Stock) + liste avec edition/suppression.

## Etats vides

- Aucun produit : consulter l'Inventaire puis **Actualiser** ;
- Aucun resultat de recherche.
