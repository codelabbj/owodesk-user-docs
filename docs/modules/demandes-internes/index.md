---
sidebar_position: 1
---

# Demandes & approbations

Le module **Demandes & approbations** (`/app/requests`) centralise les demandes internes et leur circuit de validation entre collaborateurs.

Sous-titre dans l’app : *Centralisez les demandes internes et transférez-les librement entre collaborateurs.*

| Onglet dans l’app | Documentation |
|-------------------|---------------|
| **Boîte de réception** | [Boîte de réception](/modules/demandes-internes/boite-reception) |
| **Nouvelle demande** | [Nouvelle demande](/modules/demandes-internes/nouvelle-demande) |

Le **détail** et les actions (clôturer, transférer, refuser, renvoyer) sont décrits dans [Traiter une demande](/modules/demandes-internes/traiter-demande).

## Types de demandes

| Type | Usage |
|------|-------|
| **Décaissement** | Sortie de fonds (montant, mode de paiement, justificatifs) |
| **Fourniture** | Liste d’articles à obtenir (texte libre, pas de lien Stock) |
| **RH** | Congé ou permission avec dates (circuit **interne** à ce module, distinct des [congés RH](/modules/rh/conges-permissions)) |
| **Autre** | Demande libre (titre + description) |

## Parcours type

1. Créez une [nouvelle demande](/modules/demandes-internes/nouvelle-demande) et assignez un premier destinataire.
2. Le destinataire la voit dans la [boîte de réception](/modules/demandes-internes/boite-reception) (badge **À traiter**).
3. Il peut **clôturer**, **transférer**, **refuser** ou **renvoyer au précédent** selon le cas.
4. Pour un décaissement clôturé, une dépense peut être créée en **[Trésorerie → Dépenses](/modules/tresorerie/depenses)**.
