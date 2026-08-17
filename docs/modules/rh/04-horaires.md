---
sidebar_label: Horaires
sidebar_position: 6
---

# Horaires

Onglet **Horaires** (`/app/hr/work-schedule`). Titre : **Horaires de travail**.

Définit le planning par défaut de l’organisation (et sert de base aux retards / absences).

## Types de planning

Vous pouvez configurer un planning :

- **Hebdomadaire** — même grille chaque semaine ;
- **Cycle de rotation** — enchaînement de jours selon un cycle défini.

## Paramètres généraux

| Champ | Description |
|-------|-------------|
| **Nom du planning** | Ex. Horaire standard |
| **Fuseau horaire** | Ex. Africa/Porto-Novo |

Bouton **Enregistrer** pour sauvegarder.

## Synthèse

- **Jours ouvrés / semaine** ;
- **Heures hebdomadaires** (calculées selon créneaux et pauses).

## Grille (jours)

Pour chaque jour du planning :

| Colonne | Description |
|---------|-------------|
| **Ouvre** | Jour ouvré ou non |
| **Début** | Heure d’arrivée |
| **Fin** | Heure de départ |
| **Pause (min)** | Durée de pause déduite |
| Grâce / retard | Seuil éventuel avant de compter un retard |

Les champs horaires sont désactivés si le jour n’est pas ouvré.

## Jours fériés

Bannière avec lien vers [Congés/Permissions](/modules/rh/conges-permissions) → sous-onglet **Jours fériés**.

Les retards et absences en [Pointage](/modules/rh/presence) s’appuient sur ce planning et le calendrier des jours fériés.

Chaque employé peut suivre ce planning **entreprise** ou un [horaire personnalisé](/modules/rh/employes) sur sa fiche.
