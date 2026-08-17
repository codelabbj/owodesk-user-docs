---
sidebar_label: Pointage
sidebar_position: 4
---

# Pointage

Onglet **Pointage** (`/app/hr/attendance`). Titre de page : **Pointage & Présences**.

Sous-titre : *Suivi des pointages et des absences.*

## Accéder à la page

Menu latéral **RH** → **Pointage**.

Depuis une [fiche employé](/modules/rh/employes), le lien **Voir la présence** ouvre cet écran **filtré sur cet employé** (`?employee=`). Un bandeau rappelle alors le collaborateur concerné.

## En-tête

- Lien vers [Horaires](/modules/rh/horaires) ;
- Bouton **Exporter** (Excel) ;
- Action admin **Corriger sortie** pour enregistrer une sortie oubliée.

## Deux sous-onglets

| Sous-onglet | Rôle |
|-------------|------|
| **Journal du jour** | Pointages du jour (entrées, sorties, pauses, statuts) |
| **Synthèse période** | Cumuls sur une plage de dates |

## Période analysée (synthèse)

Bannière : nombre de **jours calendaires** et **jours ouvrés attendus** selon le planning.

Filtres **date de début** et **date de fin** (par défaut : jour en cours).

## Indicateurs (synthèse)

| Indicateur | Signification |
|------------|---------------|
| **Jours de présence** | Total des jours présents |
| **Absences** | Jours d’absence |
| **Retards** | Nombre de retards |
| **Taux de présence** | Pourcentage global |

## Journal du jour

Colonnes typiques : **Entrée**, **Sortie**, **Pauses**, **Statut**, permission/congé lié, **Durée**, présence nette.

**Statuts** possibles (exemples) : Présent, En retard, En pause, Parti (permission), Retour attendu, Congé, Journée terminée, Absent, Non travaillé…

## Tableau synthèse par employé

| Colonne | Contenu |
|---------|---------|
| **Employé** | Nom et matricule |
| **Département** | Service |
| **Présent / Attendu** | Jours présents vs jours ouvrés attendus |
| **Absences** | Nombre de jours absents |
| **Retards** | Nombre de jours en retard |
| **Heures** | Total d’heures pointées |
| **Taux (%)** | Barre de progression + pourcentage |

Recherche : **Rechercher un employé…** ; filtre département.

## Règles de calcul

Les calculs s’appuient sur :

- le [planning horaire](/modules/rh/horaires) (entreprise ou personnalisé) ;
- les [jours fériés](/modules/rh/conges-permissions) ;
- les [lieux de travail](/modules/rh/lieux-de-travail) pour le pointage géolocalisé / QR.

Le pointage mobile utilise le **code organisation** affiché sur la page [Employés](/modules/rh/employes).

Selon la configuration, un [rapport journalier](/modules/rh/rapports-equipe) peut être exigé avant ou après le pointage de départ (rédaction dans [Projets → Mon rapport](/modules/projets/mon-rapport)).
