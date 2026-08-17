---
sidebar_position: 1
---

# Point de vente

Le module **Point de vente** (`/app/pos`) permet d’encaisser des ventes au comptoir, de gérer les sessions de caisse et les tickets.

Sous-titre dans l’app : *Encaissement et ventes liées au stock.*

Ouvrez-le depuis le menu latéral **Point de vente**. Le sous-menu reprend les onglets de l’application :

| Onglet dans l’app | Documentation |
|-------------------|---------------|
| **Encaissement** | [Encaissement](/modules/pos/encaissement) |
| **Sessions de caisse** | [Sessions de caisse](/modules/pos/sessions-caisse) |
| **Annulations** | [Annulations](/modules/pos/annulations) |
| **Impression & Scan** | [Impression & scan](/modules/pos/impression-scan) |
| **Activités** | [Activités](/modules/pos/activites) (propriétaire) |

## Parcours type

1. Ouvrez une [session de caisse](/modules/pos/sessions-caisse) (ou depuis Encaissement).
2. Encaissez les ventes sur [Encaissement](/modules/pos/encaissement).
3. En cas d’erreur, utilisez [Annulations](/modules/pos/annulations).
4. En fin de journée, clôturez et consultez le **Z de caisse**.
5. Réimprimez un ticket depuis [Impression & scan](/modules/pos/impression-scan) si besoin.

## Prérequis

Les entrepôts utilisés en caisse doivent avoir **Autoriser les ventes (caisse et factures)** activé (voir [Entrepôts](/modules/stock/entrepots)).

La normalisation MECeF des tickets dépend du mode de facturation (voir [Fiscal / e-facture](/modules/facturation/fiscal-efacture)).
