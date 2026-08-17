---
sidebar_label: Tâches
sidebar_position: 2
---

# Tâches

Onglet **Tâches** (`/app/projects/tasks`). C’est l’écran principal du module : une **barre latérale** pour choisir le périmètre, et un **tableau Kanban** pour suivre les tâches.

## Accéder à la page

Menu latéral **Projets** → onglet **Tâches** (page par défaut du module).

## Barre latérale (liste des projets)

En haut, des puces :

| Puce | Rôle |
|------|------|
| **Projets** | Liste des projets actifs |
| **Archives** | Tâches archivées et projets archivés |
| **Créer un projet** | Ouvre la modale de création rapide |

Champ **Rechercher un projet…** pour filtrer la liste.

### Sections

| Section | Contenu |
|---------|---------|
| **Épinglés** | Jusqu’à 3 projets épinglés (accès rapide) |
| **Accès rapide** | **Mes tâches**, **Tous les projets**, **Sans projet** |
| **Projets** | Liste des projets actifs |

- **Mes tâches** : tâches qui vous sont assignées, tous projets confondus (nécessite un profil employé lié au compte).
- **Tous les projets** : vue d’ensemble (souvent l’ouverture par défaut pour le propriétaire).
- **Sans projet** : tâches non rattachées à un projet.

Clic droit sur un projet : **Ouvrir**, **Épingler** / **Désépingler**, **Archiver le projet** / **Désarchiver** (selon vos droits).

### Archives

- **Tâches archivées** : tâches archivées individuellement (le projet peut encore être actif).
- **Projets archivés** : visibles surtout pour le propriétaire de l’organisation.

Dans une vue archivée, vous consultez l’historique : vous ne créez pas de nouvelle tâche.

## Barre d’actions (zone Kanban)

| Action | Description |
|--------|-------------|
| **Actualiser** | Recharge les tâches |
| **Filtrer** | Modale de filtres avancés (badge si des filtres sont actifs) |
| **Ajouter une tâche** | Ouvre le formulaire de création (indisponible en vue archivée) |

Champ **Rechercher une tâche…** pour chercher dans le titre / le contenu affiché.

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Total** | Nombre de tâches dans la vue |
| **À faire** | Statut À faire |
| **En cours** | Statut En cours |
| **Terminé** | Statut Terminé |
| **En retard** | Affiché selon le contexte (échéance dépassée) |

## Tableau Kanban (3 colonnes)

Colonnes : **À faire** | **En cours** | **Terminé**

Par colonne :

- en-tête avec compteur ;
- zone vide **Déposer ici** ;
- **glisser-déposer** des cartes entre colonnes (met à jour le statut) ;
- bouton **+** en bas pour ajouter une tâche dans cette colonne.

### Carte tâche

Sur une carte vous voyez en général :

- le titre et le **projet** lié ;
- les **tags** (étiquettes) colorés ;
- un point / badges pour commentaires non lus et **@mentions** ;
- les dates (échéance, retard éventuel) ;
- les assignés (aperçu + compteur) ;
- un menu pour ouvrir, archiver ou désarchiver.

Clic sur la carte : ouvre le **détail** (pas directement le formulaire de modification).

L’échéance peut être déplacée depuis la carte si vous êtes assigné (ou responsable en mode strict).

## Créer un projet

Depuis **Créer un projet** :

| Champ | Description |
|-------|-------------|
| **Nom** | Obligatoire |
| **Description** | Optionnel |

Le projet est créé **actif**. Il n’y a pas, dans cette modale, de chef de projet, budget ni dates de début/fin.

### Archiver un projet

Lorsqu’un projet est archivé :

- les tâches encore ouvertes sont d’abord traitées (terminées avec une note d’archivage selon le parcours proposé) ;
- le projet passe en archive ;
- les **tâches récurrentes** liées au projet **s’arrêtent** (plus de nouvelles occurrences).

Seul le propriétaire peut en général désarchiver un projet.

## Créer ou modifier une tâche

Modale **Ajouter une tâche** / **Modifier** :

| Champ | Description |
|-------|-------------|
| **Projet** | Choix du projet (à la création uniquement) |
| **Titre de la tâche** | Obligatoire |
| **Description** | Optionnel |
| **Tags** | Multi-sélection + création inline (nom + couleur) |
| **Échéance** | Date et heure ; masquée si vous activez une récurrence à la création |
| **Tâche récurrente** | Case à cocher — **création uniquement** (voir ci-dessous) |
| **Assigné à** | Recherche d’employés, plusieurs assignés possibles |
| **Statut tâche** | À faire, En cours, Terminé |
| **Note de clôture** | Optionnel, quand vous passez à Terminé |
| **Mode strict** | Si coché : seul le **Responsable** peut modifier ; le responsable se choisit parmi les assignés |

## Tâches récurrentes

À la **création** d’une tâche, cochez **Tâche récurrente**.

Aide affichée : *Crée automatiquement une nouvelle tâche selon la fréquence choisie, avec les mêmes assignés. S’arrête si le projet est archivé.*

### Options

| Champ | Description |
|-------|-------------|
| **Fréquence** | **Quotidien**, **Hebdomadaire**, **Mensuel**, ou **Date fixe (annuel)** |
| **Jour de la semaine** | Si hebdomadaire (Lundi… Dimanche) |
| **Jour du mois** | Si mensuel (1 à 31 ; les mois plus courts sont adaptés automatiquement) |
| **Date fixe (annuel)** | Si date fixe : même jour et mois chaque année |
| **Heure** | Heure de l’occurrence (souvent 09:00 par défaut) |

Message : *L’échéance sera calculée automatiquement à chaque occurrence.*

### Comportement

1. La tâche que vous créez est la **première occurrence**.
2. Ensuite, le système crée automatiquement une **nouvelle tâche** à chaque échéance (mêmes titre, description, assignés, tags, mode strict / responsable).
3. Chaque nouvelle occurrence démarre en **À faire**, avec l’échéance calculée pour ce passage.
4. Les assignés reçoivent une notification du type **Nouvelle tâche assignée**.
5. Si le **projet est archivé**, la récurrence **s’arrête**.

### Limites à connaître

- La récurrence se règle **uniquement à la création** : pas d’écran pour la modifier, la mettre en pause ou la reprendre ensuite.
- À l’édition d’une tâche déjà créée, la case **Tâche récurrente** n’apparaît pas.

## Détail d’une tâche

Modale ouverte au clic sur une carte :

- bannière **mode strict** (verrouillé ou responsable) ;
- badge de statut, titre, projet, échéance / **Terminé le** ;
- **Modifier** (sauf verrouillage strict), navigation **Tâche précédente** / **Tâche suivante**, actualisation ;
- **Description**, **Étiquettes** ;
- **Commentaires** : saisie (*Écrire un commentaire…*), **@mentions** (autocomplete sur les assignés et le créateur), réponse, badge **Nouveau**, marquage lu à l’ouverture ;
- panneau latéral : **assignés** (ajout / retrait), échéance cliquable (*Ajouter une échéance* / *Cliquer pour déplacer l’échéance*), note de clôture, retard éventuel.

## Mode strict

Quand le **Mode strict** est activé :

- un **Responsable** est désigné parmi les assignés ;
- seul ce responsable peut modifier la tâche (statut, contenu, etc.) ;
- les autres voient la tâche mais sont limités selon les règles affichées dans la bannière.

## Filtres avancés

Modale **Filtrer** (libellé du type **Filtrer l’affichage**) :

- **Statut** (multi) ;
- **Projet** (recherche + multi ; figé sur Sans projet si vous êtes sur cet accès rapide) ;
- **Tags** ;
- **Assigné à** (souvent masqué sur **Mes tâches**) ;
- dates : début après / avant, échéance après / avant ;
- options : **En retard uniquement**, **Avec commentaires**, **Avec @mentions**, **Avec commentaires non lus** ;
- **Réinitialiser** / **Appliquer**.

## Notifications utiles

Selon les actions, les collaborateurs peuvent recevoir des notifications dans l’application, par exemple :

- nouvelle tâche assignée (y compris une occurrence récurrente) ;
- désignation comme responsable (mode strict) ;
- changement de statut ;
- mise à jour de tâche ;
- nouveau commentaire / mention.

Des toasts confirment aussi les actions locales (création, modification, archivage…).
