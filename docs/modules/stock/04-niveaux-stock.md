---
sidebar_label: Niveaux de stock
sidebar_position: 5
---

# Niveaux de stock

Onglet **Niveaux de stock** (`/app/inventory/stock`). Suivi des quantites par produit, variante et entrepot.

Deux sous-onglets sur cette page :

| Sous-onglet | Role |
|-------------|------|
| **Lignes de stocks** | Quantites, seuils d'alerte, valeur |
| **Inventaire physique** | Comptage terrain et ecarts |

## Sous-onglet Lignes de stocks

### Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Valeur (selection)** | Valeur de vente des lignes filtrees |
| **Articles (selection)** | Quantite totale filtree |
| **Rupture de stock** | Lignes a quantite zero |
| **Stock faible** | Quantite inferieure ou egale au seuil d'alerte |

### Alertes de reapprovisionnement

Si des regles de reappro existent et que le stock est sous le minimum, une section **Alertes de reapprovisionnement** affiche pour chaque alerte :

- produit et entrepot ;
- **Stock actuel** ;
- **Commander** : quantite suggeree.

### Recherche et filtres

- Recherche par SKU, nom produit, variante ou entrepot.
- Filtre par **entrepot**.
- Boutons **PDF** : export etat de stock (tous les entrepots ou entrepot filtre).

### Ajouter ou modifier une ligne

Bouton **Ajouter la ligne de stock** :

| Champ | Description |
|-------|-------------|
| **Produit** | Recherche dans le catalogue |
| **Variante** | Si le produit a des variantes |
| **Entrepot** | Lieu de stockage |
| **Quantite** | Stock actuel |
| **Seuil d'alerte** | Alerte stock faible sur l'accueil |

En modification, seuls la quantite et le seuil sont editables.

### Tableau

Colonnes : Produit, Variante, Entrepot, Quantite, Valeur vente, Seuil d'alerte, Actions (modifier / supprimer).

Ligne de **Total** en pied de tableau.

---

## Sous-onglet Inventaire physique

### Liste des inventaires

Tableau : **Date**, **Entrepot**, **Lignes**, **Statut** (Brouillon ou Valide).

### Nouvel inventaire

Bouton **Nouvel inventaire** :

1. Choisissez l'**entrepot** et la **date**.
2. Les produits en stock dans cet entrepot s'affichent avec :
   - **Quantite theorique** (systeme) ;
   - **Quantite comptee** (saisie terrain) ;
   - **Ecart** (+ / −).
3. Renseignez toutes les quantites comptees.
4. **Valider l'inventaire** : ajuste le stock selon les ecarts.
5. **Annuler** : abandonne le brouillon.

Un seul inventaire brouillon par entrepot a la fois.
