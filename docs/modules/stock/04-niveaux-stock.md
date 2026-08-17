---
sidebar_label: Niveaux de stock
sidebar_position: 6
---

# Niveaux de stock

Onglet **Niveaux de stock** (`/app/inventory/stock`). Titre : **Stock par entrepôt**.

Deux sous-onglets : **Lignes de stocks** et **Inventaire physique**.

---

## Lignes de stocks

### Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Valeur (sélection)** | Valorisation de la sélection |
| **Articles (sélection)** | Nombre d’articles |
| **Rupture de stock** | Quantité 0 |
| **Stock faible** | Sous seuil |

### Alertes de réapprovisionnement

Si des règles existent : stock actuel et suggestion **Commander :** quantité.

:::info Règles
La gestion détaillée des règles de réappro peut exister en URL dédiée, mais **n’est pas** un onglet de la navigation actuelle.
:::

### Ajouter une ligne

**Ajouter la ligne de stock** : Produit, Variante, Entrepôt, Quantité, **Seuil d’alerte**.

Exports : **PDF — tous les entrepôts** / **PDF — cet entrepôt**.

Colonnes : Produit, Variante, Entrepôt, Quantité, **Valeur (vente)**, Seuil, Total.

---

## Inventaire physique

Sous-onglet dans cette page (pas un onglet module séparé).

- **Nouvel inventaire** : date, entrepôt ;
- Colonnes **Théorique** / **Compté** / **Écart** ;
- Statuts **Brouillon** / **Validé** ;
- Actions **Valider** / **Annuler** ;
- Un brouillon par entrepôt en général.

La validation ajuste le stock et génère des mouvements associés.
