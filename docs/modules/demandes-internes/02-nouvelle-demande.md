---
sidebar_label: Nouvelle demande
sidebar_position: 3
---

# Nouvelle demande

Onglet **Nouvelle demande** (`/app/requests/create`). Formulaire de creation d'une demande interne.

## Acceder a la page

Menu lateral **Demandes & approbations** > onglet **Nouvelle demande**.

Ou bouton **Nouvelle demande** depuis la [boite de reception](/modules/demandes-internes/boite-reception).

## Champs communs

| Champ | Description |
|-------|-------------|
| **Type de demande** | Decaissement, Fourniture, RH, Autre |
| **Titre** | Objet court (obligatoire) |
| **Description** | Detail libre (optionnel) |
| **Premier destinataire** | Collaborateur qui traitera la demande (obligatoire) |

Apres envoi, vous etes redirige vers le detail de la demande.

Bouton **Envoyer la demande** pour soumettre.

---

## Type Decaissement

Champs supplementaires :

| Champ | Description |
|-------|-------------|
| **Montant** | Montant demande (obligatoire) |
| **Mode de paiement** | Especes, Virement bancaire, Mobile money, Carte |
| **Reference de paiement** | Reference optionnelle |
| **Justificatifs** | Fichiers PDF ou image (max 20). Bouton **Ajouter un fichier** |

---

## Type Fourniture

Section **Articles** :

| Champ | Description |
|-------|-------------|
| **Description** | Libelle de l'article |
| **Qte** | Quantite |
| **Urgence** | Normal ou Urgent |

Bouton **Ajouter un article** pour completer la liste. Corbeille pour retirer une ligne.

---

## Type RH

| Champ | Description |
|-------|-------------|
| **Nature** | Conge ou Permission |
| **Date de debut** | Obligatoire |
| **Date de fin** | Optionnelle (reprend la date de debut si vide) |
| **Motif** | Texte libre |

---

## Type Autre

Aucun champ specifique : titre, description et destinataire suffisent.
