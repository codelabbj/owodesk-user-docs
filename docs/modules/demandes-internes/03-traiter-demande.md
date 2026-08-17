---
sidebar_label: Traiter une demande
sidebar_position: 4
---

# Traiter une demande

Page `/app/requests/{id}`, ouverte via **Traiter** ou **Voir**.

Le panneau **Votre décision** n’apparaît que si vous êtes le **détenteur** et que le statut est **En cours** (`can_act`).

## En-tête

Référence, titre, type, statut (**En cours** / **Refusée** / **Clôturée**), description, **Demandeur** / **Détenteur**.

Retour ← **Boîte de réception**.

## Détails selon le type

- **Décaissement** : montant, justificatifs (**Voir le justificatif**) ;
- **Fourniture** : liste d’articles ;
- **RH** : nature et dates ;
- Si refusée : **Motif**.

## Votre décision

Hint : *Clôturez la demande ou choisissez une autre action ci-dessous.*

### Clôturer

- **Commentaire de clôture (optionnel)** ;
- Bouton **Exécuter et clôturer** (décaissement) ou **Clôturer** (autres types) ;
- Confirmation : **Clôturer la demande**.

Pour un décaissement : lien éventuel **Voir la dépense créée** → [Dépenses](/modules/tresorerie/depenses).

### Transférer

**Transférer à** + commentaire → **Confirmer le transfert**.

### Refuser ou renvoyer

Selon la configuration / mode de la demande :

| Action | Description |
|--------|-------------|
| **Refuser la demande** | Motif obligatoire → **Confirmer le refus** (le demandeur est informé) |
| **Renvoyer au précédent** | Motif de renvoi → **Confirmer le renvoi** (retour au détenteur précédent) |

## Historique

Actions : **Créée**, **Transférée**, **Renvoyée**, **Refusée**, **Clôturée** (acteur, date, commentaire, destinataire).

## Notifications

Vous pouvez recevoir des notifications (assignation, transfert, renvoi, refus, clôture) qui ouvrent cette page.
