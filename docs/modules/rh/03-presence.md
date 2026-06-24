---
sidebar_label: Gestion de la presence
sidebar_position: 4
---

# Gestion de la presence

Onglet **Gestion de la presence** (`/app/hr/attendance`). Suivi des pointages, absences et retards par employe.

## En-tete

- Lien rapide vers [Horaires](/modules/rh/horaires) ;
- Bouton **Exporter** (present dans l'interface).

## Periode analysee

Banniere : nombre de **jours calendaires** et **jours ouvres attendus** selon le planning (lien vers le nom du planning).

Filtres **date de debut** et **date de fin** (par defaut : jour en cours).

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Jours de presence** | Total des jours presents |
| **Absences** | Jours d'absence |
| **Retards** | Nombre de retards |
| **Taux de presence** | Pourcentage global |

## Recherche

Champ **Rechercher un employe** (nom ou matricule).

## Tableau par employe

| Colonne | Contenu |
|---------|---------|
| **Employe** | Nom et matricule |
| **Departement** | Service |
| **Present / Attendu** | Jours presents vs jours ouvres attendus |
| **Absences** | Nombre de jours absents |
| **Retards** | Nombre de jours en retard |
| **Heures** | Total d'heures pointees |
| **Taux (%)** | Barre de progression + pourcentage |

Les calculs s'appuient sur le [planning horaire](/modules/rh/horaires) et les [jours feries](/modules/rh/conges-permissions) (onglet Jours feries).

Le pointage mobile utilise le **code organisation** affiche sur la page [Employes](/modules/rh/employes).
