---
sidebar_label: Horaires
sidebar_position: 5
---

# Horaires

Onglet **Horaires** (`/app/hr/work-schedule`). Planning de travail par defaut de l'organisation.

## Parametres generaux

| Champ | Description |
|-------|-------------|
| **Nom du planning** | Ex. Horaire standard |
| **Fuseau horaire** | Ex. Africa/Porto-Novo |

Bouton **Enregistrer** pour sauvegarder.

## Synthese

- **Jours ouvres / semaine** ;
- **Heures hebdomadaires** (calculees selon creneaux et pauses).

## Grille hebdomadaire

Pour chaque jour (lundi a dimanche) :

| Colonne | Description |
|---------|-------------|
| **Ouvre** | Case a cocher jour ouvre ou non |
| **Debut** | Heure d'arrivee |
| **Fin** | Heure de depart |
| **Pause (min)** | Duree de pause deduite |

Les champs horaires sont desactives si le jour n'est pas ouvre.

## Jours feries

Banniere avec lien **Gerer les jours feries** vers [Conges/Permissions](/modules/rh/conges-permissions) (sous-onglet Jours feries).

Les retards et absences en [presence](/modules/rh/presence) s'appuient sur ce planning et le calendrier des jours feries.

Chaque employe peut suivre ce planning ou definir un [horaire personnalise](/modules/rh/employes) sur sa fiche.
