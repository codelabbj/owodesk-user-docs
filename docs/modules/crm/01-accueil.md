---
sidebar_label: Accueil
sidebar_position: 2
---

# Accueil (pipeline)

Onglet **Accueil** (`/app/crm/kanban-preview`). Vue Kanban des affaires par pipeline — page par defaut du module.

## Barre de controle

| Element | Description |
|---------|-------------|
| **Pipeline** | Pilule pour changer de pipeline actif |
| **Nouveau pipeline** | Lien vers [Pipelines](/modules/crm/pipelines) |
| **Gerer les etapes** | Modale de gestion des colonnes |
| **Commercial** | Filtre **Tous les commerciaux** ou un collaborateur |
| **Recherche** | Rechercher une affaire |

## Tableau Kanban

Une colonne par **etape** du pipeline :

- en-tete : nom de l'etape + nombre d'affaires ;
- cartes **glissables** entre colonnes ;
- pied de colonne : **valeur totale** de l'etape ;
- bouton **+ Affaire** par colonne.

### Carte affaire

- titre ;
- contact et entreprise ;
- valeur (FCFA) ;
- avatar commercial ;
- date de cloture, probabilite % ;
- menu **⋯** : Voir le detail, Marquer comme Gagné, Marquer comme Perdu ;
- clic : modale detail.

## Nouvelle affaire

| Champ | Description |
|-------|-------------|
| **Titre** | Obligatoire |
| **Valeur** | Montant FCFA |
| **Etape** | Colonne initiale |
| **Commercial** | Assignation |
| **Date cloture** | Echeance |
| **Notes** | Texte libre |

## Detail affaire

Modale avec :

- valeur, etape (modifiable), commercial, cloture, probabilite ;
- derniere activite (+ indicateur retard) ;
- notes ;
- suppression avec confirmation ;
- panneau **Activites** : ajouter (type, date, note), basculer fait/a faire, supprimer.

## Gerer les etapes

Modale **Gerer les etapes** :

- renommer une etape (clic) ;
- reordonner ▲ / ▼ ;
- ajouter une etape ;
- supprimer (minimum 1 etape conservee).

## Etats vides

Messages si aucun pipeline, aucune etape, ou chargement en cours.

Notifications toast apres actions.
