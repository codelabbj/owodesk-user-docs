---
sidebar_position: 1
---

# Demandes & approbations

Le module **Demandes & approbations** (`/app/requests`) centralise les demandes internes et leur circuit de validation entre collaborateurs.

Ouvrez-le depuis le menu lateral **Demandes & approbations**. Le sous-menu reprend les onglets de l'application :

| Onglet dans l'app | Documentation |
|-------------------|---------------|
| **Boite de reception** | [Boite de reception](/modules/demandes-internes/boite-reception) |
| **Nouvelle demande** | [Nouvelle demande](/modules/demandes-internes/nouvelle-demande) |

## Types de demandes

| Type | Usage |
|------|-------|
| **Decaissement** | Sortie de fonds (montant, mode de paiement, justificatifs) |
| **Fourniture** | Liste d'articles a commander |
| **RH** | Conge ou permission avec dates |
| **Autre** | Demande libre (titre + description) |

## Parcours type

1. Creez une [nouvelle demande](/modules/demandes-internes/nouvelle-demande) et assignez un premier destinataire.
2. Le destinataire la traite depuis la [boite de reception](/modules/demandes-internes/boite-reception).
3. Il peut **cloturer**, **transferer** a un autre collaborateur ou **refuser** avec motif.
4. Pour un decaissement cloture, une depense est creee en comptabilite.
