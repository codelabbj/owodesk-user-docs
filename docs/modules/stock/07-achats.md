---
sidebar_label: Achats
sidebar_position: 8
---

# Achats

Onglet **Achats** (`/app/inventory/purchasing`). Commandes fournisseurs et reception de marchandises.

Deux sous-onglets :

| Sous-onglet | Role |
|-------------|------|
| **Commandes** | Bons de commande (PO) |
| **Fournisseurs** | Carnet fournisseurs |

Barre de **recherche** commune (reference, fournisseur, statut…).

---

## Sous-onglet Fournisseurs

Bouton **Nouveau fournisseur** :

| Champ | Description |
|-------|-------------|
| **Nom** | Obligatoire |
| **Email** | Optionnel |
| **Telephone** | Optionnel |
| **N° fiscal** | Optionnel |

Liste des fournisseurs avec nom, email et telephone.

---

## Sous-onglet Commandes

Bouton **Nouvelle commande** :

| Champ | Description |
|-------|-------------|
| **Fournisseur** | Fournisseur existant |
| **Entrepot de reception** | Ou le stock sera incremente |
| **Notes** | Commentaires internes |
| **Lignes** | Produit, variante, quantite, cout unitaire (optionnel) |

Bouton **Ajouter une ligne** pour completer la commande.

### Statuts d'une commande

| Statut | Signification |
|--------|---------------|
| **Brouillon** | En cours de saisie |
| **Confirme** | Envoyee au fournisseur, en attente de reception |
| **Partiel** | Partiellement receptionnee |
| **Recu** | Entierement receptionnee |
| **Solde** | Recue et entierement payee |
| **Annule** | Commande annulee |

### Actions selon le statut

**Brouillon** :

- **Modifier** ;
- **Confirmer** ;
- **Supprimer**.

**Confirme ou Partiel** :

- **Receptionner** (ou **Receptionner le reste**) : saisir les quantites recues par ligne. Le stock de l'entrepot est mis a jour.

**Recu ou Partiel** (si solde > 0) :

- **Payer** : montant, mode de paiement (banque, especes…), reference.

**Si des paiements existent** :

- **Historique paiements** : date, mode, reference, montant.

Chaque carte commande affiche le fournisseur, le total, le paye, le solde et l'avancement de reception par ligne (barre de progression).
