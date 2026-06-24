---
sidebar_label: Pipelines
sidebar_position: 5
---

# Pipelines

Onglet **Pipelines** (`/app/crm/pipelines`). Configuration des pipelines et de leurs etapes.

## Section Pipelines

En-tete avec compteur + **Ajouter pipeline**.

### Formulaire pipeline

- **Nom** (obligatoire) ;
- creation inline au clic sur **Ajouter pipeline**.

### Liste

Lignes cliquables pour selectionner un pipeline :

- nom ;
- badge nombre d'etapes ;
- pastilles des etapes (lecture seule) ;
- **Supprimer** (avec confirmation).

Etat vide si aucun pipeline.

## Section Etapes

Visible apres selection d'un pipeline.

### Ajouter une etape

| Champ | Description |
|-------|-------------|
| **Nom** | Obligatoire |
| **Ordre** | Numero d'ordre |
| **Probabilite par defaut** | Pourcentage |

### Tableau des etapes

| Colonne | Contenu |
|---------|---------|
| **Nom** | Libelle etape |
| **Ordre** | Position |
| **Probabilite** | % |
| **Actions** | Supprimer |

Messages si aucun pipeline selectionne ou aucune etape.

## Reordonnancement

Le reordonnancement par glisser-deposer n'est pas disponible sur cette page. Utilisez **Gerer les etapes** depuis l'onglet [Accueil](/modules/crm/accueil) pour reorganiser les colonnes du Kanban.

## Suppression

Confirmations avant suppression d'un pipeline ou d'une etape.
