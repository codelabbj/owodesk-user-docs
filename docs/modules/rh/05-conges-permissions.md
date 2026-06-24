---
sidebar_label: Conges et permissions
sidebar_position: 6
---

# Conges et permissions

Onglet **Conges/Permissions** (`/app/hr/leave`). Demandes de conges, permissions et calendrier des jours feries.

Managers : lien **File d'approbation** vers `/app/hr/leave/approvals`.

Deux sous-onglets sur cette page :

| Sous-onglet | Role |
|-------------|------|
| **Demandes** | Creer et suivre les demandes |
| **Jours feries** | Calendrier organisation (managers : edition) |

---

## Sous-onglet Demandes

### Filtre

**Afficher** : Toutes les demandes, Permissions uniquement, ou Conges uniquement.

### Nouvelle demande

Bouton **Nouvelle demande**. Bascule **Conge** ou **Permission**.

#### Conge

| Champ | Description |
|-------|-------------|
| **Employe** | Managers uniquement : pour qui est la demande |
| **Type** | Annuel, Maladie, Sans solde, Autre |
| **Date de debut / fin** | Periode |
| **Motif** | Optionnel |

Pour un conge **annuel** : banniere **Solde annuel restant** (jours).

#### Permission

| Champ | Description |
|-------|-------------|
| **Dates** | Jour(s) concernes |
| **Heure debut / fin** | Creneau horaire |
| **Paye (conges)** | Case a cocher |
| **Motif** | Optionnel |

Boutons : **Enregistrer brouillon**, **Soumettre**, **Annuler**.

### Tableau des demandes

Colonnes : Employe (managers), Nature, Periode, Statut, Actions.

**Statuts** : Brouillon, En attente, Approuve, Refuse, Annule.

| Action | Quand |
|--------|-------|
| **Detail** | Toujours |
| **Soumettre** | Brouillon |
| **Supprimer** | Brouillon |
| **Approuver / Refuser** | En attente (managers, depuis la liste ou le detail) |
| **Annuler** | Selon statut |

---

## Sous-onglet Jours feries

Selecteur **Annee** (annee precedente, courante, suivante).

Managers : formulaire **Date** + **Libelle** + bouton **Ajouter**.

Liste des jours feries avec suppression possible (managers).

Ces dates sont exclues des jours ouvres (presence, conges, permissions).

---

## File d'approbation

Page `/app/hr/leave/approvals` (managers et admins RH uniquement).

Deux onglets :

| Onglet | Contenu |
|--------|---------|
| **En attente** | Demandes a valider |
| **Historique** | Demandes deja traitees (filtres nature et statut) |

Actions sur une demande en attente : **Approuver**, **Refuser** (motif optionnel), **Voir le detail**.
