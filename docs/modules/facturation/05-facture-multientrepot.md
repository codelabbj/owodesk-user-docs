---
sidebar_label: Facture multientrepôt
sidebar_position: 6
---

# Facture multientrepôt

Onglet **Facture multientrepôt** (`/app/billing/invoices/new-multi`). Chaque **ligne** peut sortir d’un **entrepôt différent**.

## Différence avec unientrepôt

| | Unientrepôt | Multientrepôt |
|---|-------------|---------------|
| Entrepôt | Un pour toute la facture | Un **par ligne** |
| Badge liste | — | **Multientrepôt** |

## En-tête et client

Identique à [Facture unientrepôt](/modules/facturation/facture-unientrepot) : type, particulier/entreprise/divers, AIB, paiement.

## Lignes

Chaque ligne : **Entrepôt**, produit, variante, PU, quantité, taxe.

Contrôle de stock **par ligne et par entrepôt** ; **Gérer** en cas de rupture.

## Validation

**Créer le Brouillon** → [détail](/modules/facturation/factures#detail-dune-facture).

À la finalisation, chaque ligne déduit le stock de **son** entrepôt.
