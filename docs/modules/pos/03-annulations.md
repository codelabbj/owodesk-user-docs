---
sidebar_label: Annulations
sidebar_position: 4
---

# Annulations

Onglet **Annulations** (`/app/pos/cancellations`). Annulation controlee des ventes finalisees.

## Ventes annulables

Liste des ventes au statut **completed** (finalisees), jusqu'a 30 affichees.

| Colonne | Contenu |
|---------|---------|
| **Vente** | Numero |
| **Client** | Nom ou Anonyme |
| **Montant** | Total |
| **Statut** | completed |
| **Action** | Bouton **Annuler** |

## Annuler une vente

Modale **Annuler la vente #numero** :

- Avertissement : action **irreversible**, journal d'audit, **restitution automatique du stock** ;
- rappel : numero, montant, client ;
- **Motif d'annulation** (obligatoire).

Boutons **Annuler** (fermer) et **Confirmer l'annulation**.

Le motif et l'auteur sont enregistres dans le journal.

## Journal des annulations

Historique de toutes les annulations :

| Colonne | Contenu |
|---------|---------|
| **Vente** | Numero |
| **Montant** | Montant annule (negatif) |
| **Motif** | Raison saisie |
| **Annule par** | Utilisateur |
| **Date** | Date et heure |

Les ventes deja annulees ou en brouillon n'apparaissent pas dans les ventes annulables.
