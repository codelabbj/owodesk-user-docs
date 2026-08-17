---
sidebar_label: Mouvements
sidebar_position: 8
---

# Mouvements

Onglet **Mouvements** (`/app/inventory/movements`). Saisie manuelle et historique des mouvements de stock.

## Enregistrer un mouvement

Bouton **Nouveau mouvement** / titre **Enregistrer un mouvement**.

### Types

| Type | Usage |
|------|-------|
| **Entrée** | Augmente le stock |
| **Sortie** | Diminue le stock |
| **Ajustement (stock cible)** | Fixe la quantité cible |
| **Transfert** | Entre deux entrepôts |
| **Perte (vol / erreur)** | Motif obligatoire |
| **Déchet (inutilisable)** | Motif obligatoire |
| **Casse (endommagé)** | Motif obligatoire |

### Saisie en lot

Vous pouvez saisir **plusieurs lignes** avec type, entrepôt (et destination si transfert) et référence communs :

- **Ajouter une ligne** ;
- **Valider N mouvement(s)**.

## Historique

- **Afficher les filtres** ;
- **Exporter CSV** ;
- **Détail du mouvement** : document source éventuel (inventaire, facture, caisse, réception achat…).
