---
sidebar_label: Nouvelle demande
sidebar_position: 3
---

# Nouvelle demande

Onglet **Nouvelle demande** (`/app/requests/create`). Titre : **Créer une demande**.

## Champs communs

| Champ | Description |
|-------|-------------|
| **Type de demande** | Décaissement (défaut), Fourniture, RH, Autre |
| **Titre** | Obligatoire |
| **Description** | Optionnel |
| **Premier destinataire** | Collaborateur obligatoire (*Choisir un collaborateur*) |

Boutons : **Envoyer la demande** / Annuler. Après envoi → page de détail.

---

## Décaissement

| Champ | Description |
|-------|-------------|
| **Montant** | Obligatoire |
| **Mode de paiement** | Espèces, Virement bancaire, Mobile money, Carte |
| **Référence de paiement** | Optionnel |
| **Justificatifs** | **Ajouter un fichier** (PDF, image — max 20) |

À la clôture, une dépense peut être générée en [Trésorerie](/modules/tresorerie/depenses).

---

## Fourniture

Section **Articles** : Description, **Qté**, urgence **Normal** / **Urgent**, **Ajouter un article**.

Pas de lien automatique vers le catalogue Stock.

---

## RH

| Champ | Description |
|-------|-------------|
| **Nature** | **Congé** / **Permission** |
| **Date de début** | Obligatoire |
| **Date de fin** | Optionnelle |
| **Motif** | |

:::info
Ce n’est **pas** la même chose que [Congés/Permissions](/modules/rh/conges-permissions) ni les [demandes de pièces](/modules/rh/demandes-pieces) du module RH.
:::

---

## Autre

Titre + description + destinataire uniquement.
