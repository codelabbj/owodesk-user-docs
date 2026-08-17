---
sidebar_label: Achats
sidebar_position: 9
---

# Achats

Onglet **Achats** (`/app/inventory/purchasing`). Titre : **Achats fournisseurs**.

:::info Bureau
Cet écran est prévu pour un usage **bureau**.
:::

Sous-onglets : **Commandes achat** | **Fournisseurs**.

---

## Fournisseurs

**Nouveau fournisseur** :

| Champ | Description |
|-------|-------------|
| **Nom** | Obligatoire |
| **Email** / **Téléphone** | Optionnels |
| **NIF / IFU** | Optionnel |

---

## Commandes achat

**Nouveau bon de commande** :

| Champ | Description |
|-------|-------------|
| **Fournisseur** | Obligatoire |
| **Date de livraison** | Prévue |
| **Nature comptable (réception)** | Ex. 601 / 622 / 605 |
| **Lieu de livraison** | Suggestions entrepôts / géoloc (pas un unique « entrepôt de réception » figé à la création) |
| **Notes** | Internes |
| **Lignes** | Produit, variante, quantité, **coût unitaire** |

### Statuts

**Brouillon** · **Confirmé** · **Partiel** · **Reçu** · **Soldé** · **Annulé**

### Actions

| Action | Quand |
|--------|-------|
| **Télécharger PDF** | Selon disponibilité |
| **Modifier** / **Supprimer** | Brouillon |
| **Confirmer** | Brouillon (selon [Autorisations](/modules/stock/autorisations)) |
| **Réceptionner** / **Réceptionner le reste** | Confirmé / Partiel |
| **Payer** | S’il reste un solde |
| **Historique paiements** | Si des paiements existent |

### Réception

Répartissez les quantités reçues **entre vos entrepôts** (réception multi-entrepôts). Le stock est mis à jour à la validation.

### Paiement

Montant, moyen (**Virement**, **Espèces**, **Mobile Money**, **Carte**, **Chèque**), référence.
