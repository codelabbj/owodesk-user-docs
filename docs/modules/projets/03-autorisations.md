---
sidebar_label: Autorisations
sidebar_position: 4
---

# Autorisations

Onglet **Autorisations** (`/app/projects/autorisations`). Titre dans l’app : **Autorisations des tâches**.

Cet écran permet au **propriétaire** (et aux personnes déjà habilitées à gérer les autorisations) de décider qui voit **toutes** les tâches et tous les projets.

## Accéder à la page

Menu latéral **Projets** → onglet **Autorisations**.

L’onglet n’apparaît que si vous avez le droit de le consulter.

## Règle par défaut

Par défaut, chaque collaborateur ne voit que :

- ses tâches (**assignées** ou **créées**) ;
- les projets liés à ces tâches.

Quand on lui **assigne** une tâche sur un projet, il y a accès — en général **limité aux tâches qui le concernent** sur ce projet.

## Tableau des autorisations

| Colonne | Contenu |
|---------|---------|
| **Collaborateur** | Nom du collaborateur (badge **Propriétaire** pour le propriétaire de l’organisation) |
| **Voir toutes les tâches** | Autorise la vue d’ensemble (toutes les tâches / projets) |
| **Gérer les autorisations** | Autorise à modifier ce tableau (réservé en pratique au propriétaire et aux personnes qu’il habilite) |

Les bascules se font avec une **confirmation** avant enregistrement. Un message confirme la mise à jour.

## Quand l’utiliser

- Un chef d’équipe doit suivre **tout** le Kanban, pas seulement ses tâches.
- Un assistant doit piloter les projets sans être assigné à chaque carte.
- Vous voulez garder, pour le reste de l’équipe, une vue **restreinte** (confidentialité et clarté).

## Lien avec les archives

- Les **tâches archivées** restent consultables selon les droits habituels.
- Les **projets archivés** sont en général réservés au propriétaire.

Pour le détail du workspace et des archives, voir [Tâches](/modules/projets/taches).
