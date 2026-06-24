---
sidebar_label: Entrepots
sidebar_position: 4
---

# Entrepots

Onglet **Entrepots** (`/app/inventory/warehouses`). Lieux de stockage physiques ou logiques.

## Actions en-tete

| Bouton | Effet |
|--------|-------|
| **PDF — tous les entrepots** | Export PDF de l'etat global du stock |
| **Ajouter l'entrepot** | Ouvre le formulaire de creation |

## Creer ou modifier un entrepot

| Champ | Description |
|-------|-------------|
| **Nom** | Ex. Magasin central, Depot Abidjan |
| **Adresse** | Adresse + **position sur la carte** (clic ou marqueur) |
| **Autoriser les ventes** | Si coche : utilisable en caisse et facturation. Sinon : stockage seul |
| **Depot central** | Hub logistique pouvant reapprovisionner les autres entrepots via transfert |

La position GPS sert au routage marketplace (entrepot le plus proche).

## Carte entrepot

Chaque entrepot affiche :

- nom, adresse ;
- badges **Central** / **Pas de vente** si applicable ;
- nombre de **produits en stock** (> 0) ;
- indicateur carte : position definie ou a completer.

Actions sur la carte :

| Action | Effet |
|--------|-------|
| **Crayon** | Modifier |
| **PDF** | Etat du stock de cet entrepot |
| **Corbeille** | Supprimer l'entrepot |
