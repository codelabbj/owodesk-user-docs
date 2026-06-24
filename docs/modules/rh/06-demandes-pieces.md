---
sidebar_label: Demandes de pieces
sidebar_position: 7
---

# Demandes de pieces

Onglet **Demandes de pieces** (`/app/hr/document-requests`). Attestations de travail ou de stage a retirer sur place (pas d'envoi par email).

Sous-onglets selon le profil :

| Sous-onglet | Qui le voit | Role |
|-------------|-------------|------|
| **A traiter** | Managers | Demandes en attente de preparation |
| **Historique** | Managers | Demandes deja traitees |
| **Mes demandes** | Tous | Demandes de l'employe connecte |

---

## Mes demandes (employe)

Bouton **Nouvelle demande** (si aucune demande en attente du meme type).

| Champ | Description |
|-------|-------------|
| **Type de piece** | Attestation de travail (salarie) ou Attestation de stage (stagiaire) |
| **Message** | Optionnel, pour les RH |

**Statuts** : En attente, Prete au retrait, Retiree, Refusee, Annulee.

L'employe peut **Annuler** une demande encore en attente.

---

## A traiter (managers)

Filtre par **type de piece**.

Pour chaque demande :

| Action | Effet |
|--------|-------|
| **Marquer prete** | La piece est prete au retrait |
| **Refuser** | Motif de refus |

Quand le statut est **Prete au retrait** :

| Action | Effet |
|--------|-------|
| **PDF** | Telecharger l'attestation generee |
| **Remise effectuee** | Confirmer le retrait en main propre |

## Historique (managers)

Filtres **type** et **statut**. Consultation et telechargement PDF des attestations deja remises.

La route `/app/hr/document-requests/approvals` redirige vers cette page avec l'onglet **A traiter**.
