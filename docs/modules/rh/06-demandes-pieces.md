---
sidebar_label: Demandes de pièces
sidebar_position: 9
---

# Demandes de pièces

Onglet **Demandes de pièces** (`/app/hr/document-requests`). Attestations de travail ou de stage à retirer **sur place** (pas d'envoi par email).

Sous-onglets selon le profil :

| Sous-onglet | Qui le voit | Rôle |
|-------------|-------------|------|
| **À traiter** | Managers | Demandes en attente de préparation |
| **Historique** | Managers | Demandes déjà traitées |
| **Mes demandes** | Tous | Demandes de l'employé connecté |

---

## Mes demandes (employé)

Bouton **Nouvelle demande** (si aucune demande en attente du même type).

| Champ | Description |
|-------|-------------|
| **Type de pièce** | Attestation de travail (salarié) ou Attestation de stage (stagiaire) |
| **Message** | Optionnel, pour les RH |

**Statuts** : En attente, Prête au retrait, Retirée, Refusée, Annulée.

L'employé peut **Annuler** une demande encore en attente.

---

## À traiter (managers)

Filtre par **type de pièce**.

| Action | Effet |
|--------|-------|
| **Marquer prête** | La pièce est prête au retrait |
| **Refuser** | Motif de refus |

Quand le statut est **Prête au retrait** :

| Action | Effet |
|--------|-------|
| **PDF** | Télécharger l'attestation générée |
| **Remise effectuée** | Confirmer le retrait en main propre |

## Historique (managers)

Filtres **type** et **statut**. Consultation et téléchargement PDF des attestations déjà remises.

La route `/app/hr/document-requests/approvals` redirige vers cette page avec l'onglet **À traiter**.

Les formats d'attestation se configurent aussi depuis [Documents](/modules/rh/documents) (**Formats d'attestation**).
