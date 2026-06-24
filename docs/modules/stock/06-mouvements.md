---
sidebar_label: Mouvements
sidebar_position: 7
---

# Mouvements

Onglet **Mouvements** (`/app/inventory/movements`). Journal de toutes les entrees, sorties et ajustements de stock.

## Nouveau mouvement

Bouton **Enregistrer le mouvement**. Formulaire :

| Champ | Description |
|-------|-------------|
| **Produit** | Article concerne |
| **Variante** | Si le produit a des variantes |
| **Entrepot** | Lieu du mouvement (ou source si transfert) |
| **Entrepot destination** | Uniquement pour le type **Transfert** |
| **Type de mouvement** | Voir tableau ci-dessous |
| **Quantite** | Nombre d'unites |
| **Reference** | Document ou note (optionnel) |
| **Motif** | Obligatoire pour Perte, Dechet et Casse |

### Types de mouvement

| Type | Effet |
|------|-------|
| **Entree** | Augmente le stock |
| **Sortie** | Diminue le stock |
| **Ajustement (stock cible)** | Fixe le stock a la quantite saisie |
| **Transfert** | Sortie source + entree destination |
| **Perte (vol / erreur)** | Sortie avec motif obligatoire |
| **Dechet (inutilisable)** | Sortie avec motif obligatoire |
| **Casse (endommage)** | Sortie avec motif obligatoire |

Pour les transferts entre entrepots, la page [Transferts](/modules/stock/transferts) offre un parcours dedie.

## Filtres

Bouton **Filtres** :

- produit ;
- entrepot ;
- type de mouvement ;
- date de debut / fin.

**Reinitialiser** pour tout effacer.

## Export

**Exporter CSV** : telecharge les mouvements filtres (`movements.csv`).

## Liste des mouvements

Colonnes : Date, Produit, Entrepot, Type, Quantite, Stock avant → apres, Reference / motif.

Cliquez sur une ligne pour ouvrir le **detail** du mouvement (type, quantite, entrepots, source systeme si applicable).
