---
sidebar_position: 1
---

# Facturation

Le module **Facturation & Finance** (`/app/billing`) gère vos factures, encaissements et factures pro.

Sous-titre dans l’app : *Gérez vos factures, vos paiements et votre trésorerie.*

Ouvrez-le depuis le menu latéral **Facturation**. Le sous-menu reprend les onglets de l’application :

| Onglet dans l’app | Documentation |
|-------------------|---------------|
| **Vue d'ensemble** | [Vue d'ensemble](/modules/facturation/vue-ensemble) |
| **Factures** | [Factures](/modules/facturation/factures) |
| **Facture Pro** | [Facture Pro](/modules/facturation/facture-pro) |
| **Facture unientrepôt** | [Facture unientrepôt](/modules/facturation/facture-unientrepot) |
| **Facture multientrepôt** | [Facture multientrepôt](/modules/facturation/facture-multientrepot) |
| **Facture service** | [Facture service](/modules/facturation/facture-service) |
| **Activités** | [Activités](/modules/facturation/activites) (propriétaire) |

La configuration fiscale (**e-MECeF**) n’est plus un onglet du module : elle se trouve dans **Paramètres → Facturation**. Voir [Fiscal / e-facture](/modules/facturation/fiscal-efacture).

## Parcours type

1. Configurez le mode de facturation et l’adaptateur e-MECeF si besoin ([Fiscal / e-facture](/modules/facturation/fiscal-efacture)).
2. Créez une facture en **brouillon** ([unientrepôt](/modules/facturation/facture-unientrepot), [multientrepôt](/modules/facturation/facture-multientrepot) ou [service](/modules/facturation/facture-service)).
3. Ouvrez-la depuis [Factures](/modules/facturation/factures), **finalisez** (simple ou normalisée), enregistrez les **paiements**.
4. Optionnel : générez une **facture pro** depuis le détail d’un brouillon.

## Clients

Il n’y a **pas d’onglet Clients** dans Facturation. À la création, vous choisissez un **particulier** ou une **entreprise** (CRM), vous en créez un nouveau, ou vous facturez un **client divers (sans nom)**.

## Limites actuelles

- L’envoi de facture **par e-mail** n’est pas proposé dans l’écran détail (PDF / impression oui).
- **Facture Pro** : consultation plutôt bureau / tablette paysage.
