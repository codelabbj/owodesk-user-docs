---
sidebar_label: Facture Pro
sidebar_position: 4
---

# Facture Pro

Onglet **Facture Pro** (`/app/billing/factures-pro`). Propositions commerciales (proformas) générées à partir d’une facture **brouillon**.

## Qu'est-ce qu'une facture pro ?

Elle reprend les lignes du brouillon sans le finaliser. Elle peut avoir une **date d'expiration** pour présenter une offre avant émission définitive.

:::info Création
Les factures pro se créent depuis le [détail d'une facture en brouillon](/modules/facturation/factures#detail-dune-facture), pas directement depuis cet onglet.
:::

:::info Écran
La consultation est prévue pour **bureau / tablette paysage** (pas pleinement adaptée au téléphone).
:::

## Liste

| Indicateur | Signification |
|------------|---------------|
| **Total** (factures pro) | Somme des montants affichés |
| **Expirées** | Nombre dont la date d’expiration est dépassée |

Filtres : **Tous** / **Expirés**. Recherche par numéro ou nom du client.

Carte : client, numéro, montant, expiration (en rouge si expirée), date d’émission.

## Détail

Page `/app/billing/factures-pro/{id}`.

Aperçu **FACTURE PRO** : entreprise, numéro, **Expire le**, destinataire, lignes, taxes, **Net à payer**.

Panneau : lien **facture source**, **Imprimer**, **Télécharger PDF**.
