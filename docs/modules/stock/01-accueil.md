---
sidebar_label: Accueil
sidebar_position: 2
---

# Accueil

Onglet **Accueil** du module Stock (`/app/inventory/dashboard`). Vue synthetique des alertes et de l'activite recente.

## Acceder a la page

Menu lateral **Stock** > onglet **Accueil** (page par defaut du module).

## Actions rapides

Quatre raccourcis en haut de page :

| Bouton | Destination |
|--------|-------------|
| **Ajouter un produit** | [Produits](/modules/stock/produits) |
| **Enregistrer un mouvement** | [Mouvements](/modules/stock/mouvements) |
| **Nouvelle commande** | [Achats](/modules/stock/achats) |
| **Gerer les entrepots** | [Entrepots](/modules/stock/entrepots) |

## Alertes de stock

Si des produits sont en rupture ou sous le seuil d'alerte, une section **Alertes de stock** s'affiche :

- **Rupture** : quantite a zero (produit + entrepot) ;
- **Stock faible** : quantite inferieure ou egale au seuil (affiche `quantite / seuil`).

Cliquez sur une alerte pour ouvrir [Niveaux de stock](/modules/stock/niveaux-stock).

## Derniers mouvements

Tableau des 5 derniers mouvements avec :

- **Type** : Entree, Sortie, Ajust., Transfert, Perte, Dechet, Casse ;
- **Produit** et variante ;
- **Entrepot** ;
- **Stock avant → apres** ;
- **Quantite** (+ ou −) ;
- **Reference / motif** ;
- **Date**.

Lien **Tout voir →** : ouvre [Mouvements](/modules/stock/mouvements).
