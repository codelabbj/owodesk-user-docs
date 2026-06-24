---
sidebar_label: Facturer une commande
sidebar_position: 5
---

# Facturer une commande

1. Ouvrez **Ventes** -> **Commandes**.
2. Selectionnez une commande en statut **"livre"** (toutes les lignes livrees).
3. Cliquez **Generer la facture**.
4. La facture est creee automatiquement :
   - Les lignes de la commande sont reprises integralement.
   - Les prix, quantites et remises sont preserves.
   - Les totaux et taxes sont calcules.
   - La reference de facture est generee (format F-XXXXX).
5. La commande liee passe au statut **"facturee"**.
6. Ouvrez la facture depuis **Facturation** -> **Factures** pour verifier les informations.
7. Si necessaire, imprimez ou envoyez la facture au client.

<DocImage src="/img/guides/ventes/facturer-commande.png" alt="Generation de la facture depuis une commande livree" />

La facture peut ensuite etre certifiee fiscalement (e-MECeF) si la configuration est activee (voir le module [Facturation](/modules/facturation)).
