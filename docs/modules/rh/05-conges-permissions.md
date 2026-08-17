---
sidebar_label: Congés et permissions
sidebar_position: 8
---

# Congés et permissions

Onglet **Congés/Permissions** (`/app/hr/leave`). Demandes de congés, permissions et calendrier des jours fériés.

Managers : lien **File d'approbation** vers `/app/hr/leave/approvals`.

Depuis une [fiche employé](/modules/rh/employes), **Voir les congés** ouvre cet écran **filtré sur cet employé** (`?employee=`).

Deux sous-onglets sur cette page :

| Sous-onglet | Rôle |
|-------------|------|
| **Demandes** | Créer et suivre les demandes |
| **Jours fériés** | Calendrier organisation (managers : édition) |

---

## Sous-onglet Demandes

### Filtre

**Afficher** : Toutes les demandes, Permissions uniquement, ou Congés uniquement.

### Nouvelle demande

Bouton **Nouvelle demande**. Bascule **Congé** ou **Permission**.

#### Congé

| Champ | Description |
|-------|-------------|
| **Employé** | Managers uniquement : pour qui est la demande |
| **Type** | Congé annuel, Maladie, Sans solde, Autre |
| **Date de début / fin** | Période |
| **Motif** | Optionnel |

Pour un congé **annuel** : bannière **Solde annuel restant** (jours).

#### Permission

| Champ | Description |
|-------|-------------|
| **Dates** | Jour(s) concernés |
| **Heure début / fin** | Créneau horaire |
| **Payé (congés)** | Case à cocher |
| **Motif** | Optionnel |

Boutons : **Enregistrer brouillon**, **Soumettre**, **Annuler**.

### Tableau des demandes

Colonnes : Employé (managers), Nature, Période, Statut, Actions.

**Statuts** : Brouillon, En attente, Approuvé, Refusé, Annulé.

| Action | Quand |
|--------|-------|
| **Détail** | Toujours |
| **Soumettre** | Brouillon |
| **Supprimer** | Brouillon |
| **Approuver / Refuser** | En attente (managers, depuis la liste ou le détail) |
| **Annuler** | Selon statut |

---

## Sous-onglet Jours fériés

Sélecteur **Année** (année précédente, courante, suivante).

Managers : formulaire **Date** + **Libellé** + bouton **Ajouter**.

Liste des jours fériés avec suppression possible (managers).

Ces dates sont exclues des jours ouvrés ([Pointage](/modules/rh/presence), congés, permissions).

---

## File d'approbation

Page `/app/hr/leave/approvals` (managers et admins RH).

| Onglet | Contenu |
|--------|---------|
| **En attente** | Demandes à valider |
| **Historique** | Demandes déjà traitées (filtres nature et statut) |

Actions : **Approuver**, **Refuser** (motif optionnel), **Voir le détail**.
