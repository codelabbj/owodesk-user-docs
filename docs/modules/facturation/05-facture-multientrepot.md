---
sidebar_label: Facture multientrepot
sidebar_position: 6
---

# Facture multientrepot

Onglet **Facture multientrepot** (`/app/billing/invoices/new-multi`). Creation d'une facture ou **chaque ligne** peut provenir d'un **entrepot different**.

## Acceder a la page

Menu lateral **Facturation** > onglet **Facture multientrepot**.

Indicateur en haut : **Facture multientrepot**.

## Difference avec unientrepot

| | Unientrepot | Multientrepot |
|---|-------------|---------------|
| Entrepot | Un seul pour toute la facture | Un par ligne |
| Usage | Magasin unique, vente simple | Plusieurs points de vente / depots |
| Badge liste | — | **Multientrepot** sur la carte facture |

---

## En-tete et client

Identique a [Facture unientrepot](/modules/facturation/facture-unientrepot) :

- type de document (Vente, Avoir, Export…) ;
- selection ou creation de client CRM ;
- reference MECeF pour les avoirs.

---

## Lignes de facture

Section **Articles de la facture** : chaque ligne est une carte avec :

| Champ | Description |
|-------|-------------|
| **Entrepot** | Magasin de sortie pour cette ligne uniquement |
| **Produit** | Article du catalogue |
| **Variante** | Obligatoire si applicable |
| **Prix unitaire** | Modifiable |
| **Quantite** | Nombre d'unites |
| **Groupe de taxe** | TVA par ligne |

- **Ajouter une ligne** : nouvelle carte (l'entrepot par defaut reprend celui de la ligne precedente).
- **Supprimer la ligne** : icone corbeille.

### Stock par entrepot

Le controle de stock s'effectue **par ligne et par entrepot**. En cas de rupture, la banniere alerte et le bouton **Gerer** permettent d'ajouter ou d'ajuster le stock dans l'entrepot concerne.

---

## Panneau lateral

Pas de selecteur d'entrepot global (contrairement a l'unientrepot). Les memes options sont disponibles :

### AIB (Retenue a la source)

Aucun, 1 % (IFU), ou 5 % (sans IFU).

### Mode de paiement

Especes, Mobile Money, Carte, Virement, Cheque, A credit, ou aucun.

### Valider

**Creer le Brouillon** → redirection vers le [detail de la facture](/modules/facturation/factures#detail-dune-facture).

A la finalisation, chaque ligne deduit le stock de **son** entrepot.
