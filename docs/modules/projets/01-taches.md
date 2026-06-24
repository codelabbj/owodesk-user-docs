---
sidebar_label: Taches
sidebar_position: 2
---

# Taches

Ecran principal du module (`/app/projects/tasks`). Tableau Kanban des taches.

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Total** | Nombre de taches |
| **A faire** | Statut `todo` |
| **En cours** | Statut `in_progress` |
| **Termine** | Statut `done` |

## Barre de controle

| Action | Description |
|--------|-------------|
| **Filtre projet** | Pilule **Tous les projets** ou nom filtre ; ouvre la modale de filtres |
| **Ajouter un projet** | Modale rapide : nom + description (projet actif) |
| **Actualiser** | Recharge les taches |
| **Filtrer** | Modale filtres avances (badge si filtres actifs) |
| **Rechercher** | Recherche texte dans les taches |

## Tableau Kanban (3 colonnes)

Colonnes : **A faire** | **En cours** | **Termine**

Par colonne :

- en-tete avec compteur ;
- etat vide **Deposer ici** ;
- **glisser-deposer** des cartes entre colonnes (met a jour le statut) ;
- bouton **+** en bas pour ajouter une tache.

### Carte tache

- titre, nom du **projet** lie ;
- **etiquettes** colorees ;
- point non lu (commentaires) ;
- badges : commentaires non lus, @mentions ;
- dates (debut, echeance, fin, **retard** avec jours/heures) ;
- assignes (2 visibles + compteur) ;
- menu **⋯** : Modifier, Archiver, Supprimer ;
- clic sur la carte : **detail** (pas le formulaire d'edition).

## Creer ou modifier une tache

Modale **Nouvelle tache** / **Modifier** :

| Champ | Description |
|-------|-------------|
| **Projet** | Selection (creation uniquement) |
| **Titre** | Obligatoire |
| **Description** | Optionnel |
| **Etiquettes** | Multi-select + creation inline (nom + couleur) |
| **Fin** | Date/heure (`due_date` et `end_date`) |
| **Assigne a** | Recherche employes, puces multiples |
| **Statut** | A faire, En cours, Termine |
| **Mode strict** | Case + **responsable** (parmi les assignes) |

## Detail d'une tache

Modale ouverte au clic sur une carte :

- banniere mode strict (verrouille ou responsable) ;
- badge statut, titre, projet, echeance ;
- **Actualiser**, **Modifier**, **Supprimer** (avec confirmation) ;
- **Description** (mise en evidence des @mentions) ;
- **Etiquettes** ;
- **Commentaires** : saisie, @mentions (autocomplete assignes), reponse, badge **Nouveau**, marquage lu a l'ouverture ;
- panneau lateral : **Assignation** (ajout/retrait), **Cree par**, **Dates** (debut, echeance, fin, retard), **Actions** (Archiver, Supprimer).

## Filtres avances

Modale **Filtrer** :

- **Statut** (multi) ;
- **Projet** (recherche + multi) ;
- **Etiquettes** (multi) ;
- **Assigne a** (multi) ;
- dates : debut apres/avant, echeance apres/avant ;
- options : En retard, Avec commentaires, Avec @mentions, Commentaires non lus ;
- **Reinitialiser** / **Appliquer**.

## Creer un projet (rapide)

Modale depuis **Ajouter un projet** :

- **Nom** (obligatoire) ;
- **Description** ;
- pas de budget, manager ni dates dans cette modale.

## Notifications

Toasts de confirmation (creation, modification, suppression).
