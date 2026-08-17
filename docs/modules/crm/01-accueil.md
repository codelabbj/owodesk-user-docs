---
sidebar_label: Accueil
sidebar_position: 2
---

# Accueil

Onglet **Accueil** (`/app/crm/kanban-preview`). Kanban des **affaires** du pipeline sélectionné.

:::info Bureau
Souvent masqué sur téléphone / tablette portrait.
:::

## Barre de contrôle

- Pilules de **pipeline** + **Nouveau pipeline** (vers [Pipelines](/modules/crm/pipelines)) ;
- Engrenage **Gérer les étapes** ;
- Filtre **Tous les commerciaux** ;
- Recherche *Rechercher une affaire…*

## Colonnes Kanban

Chaque étape : nom, compteur, total (devise de l’organisation), bouton **+ Affaire**.

### Carte affaire

Titre, contact · entreprise, montant, commercial, date, probabilité %.

Menu **⋯** : **Voir le détail**, **Marquer comme Gagné**, **Marquer comme Perdu**.

## Nouvelle affaire

Modale **Nouvelle affaire** :

| Champ | Description |
|-------|-------------|
| **Titre** | Obligatoire |
| **Valeur** | Montant |
| **Étape** | Étape du pipeline |
| **Commercial** | Assigné |
| **Date de clôture estimée** | Optionnel |
| **Notes** | Optionnel |

Bouton **Créer l'affaire**.

## Détail d’une affaire

Informations (valeur, étape, commercial, clôture, probabilité, dernière activité), notes, **Activités** (ajouter / enregistrer), suppression avec confirmation.

## Gérer les étapes

Depuis l’engrenage : renommer, réordonner (▲/▼), **+ Ajouter** (au moins une étape).
