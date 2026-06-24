---
sidebar_label: Facture Pro
sidebar_position: 4
---

# Facture Pro

Onglet **Facture Pro** (`/app/billing/factures-pro`). Les factures pro sont des propositions commerciales (proformas) generees a partir d'une facture brouillon.

## Qu'est-ce qu'une facture pro ?

Une facture pro reprend les lignes d'une facture en brouillon sans la finaliser. Elle peut avoir une **date d'expiration**. Elle sert a presenter une offre au client avant emission definitive.

:::info Creation
Les factures pro se creent depuis le [detail d'une facture en brouillon](/modules/facturation/factures#detail-dune-facture), pas directement depuis cet onglet.
:::

## Liste des factures pro

### Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Total factures pro** | Somme des montants affiches |
| **Expirees** | Nombre de factures pro dont la date d'expiration est depassee |

### Filtres

| Filtre | Affiche |
|--------|---------|
| **Tous** | Toutes les factures pro |
| **Expires** | Uniquement celles dont la date d'expiration est passee |

### Recherche

Filtre par numero ou nom du client.

### Carte

Pour chaque facture pro : client, numero, montant, date d'expiration (en rouge si expiree), date d'emission.

Cliquez pour ouvrir le detail.

---

## Detail d'une facture pro

Page `/app/billing/factures-pro/{id}`.

### Document

Apercu **FACTURE PRO** avec :

- informations entreprise ;
- numero, date d'emission ;
- **Expire le** (avec mention Expire si depassee) ;
- **Accepte le** si le client a accepte ;
- destinataire (contact CRM) ;
- tableau des lignes et ventilation des taxes ;
- **Net a payer**.

### Panneau lateral

| Element | Action |
|---------|--------|
| **Facture source** | Lien vers la facture brouillon d'origine |
| **Expiration** | Date de validite affichee |
| **Imprimer** | Impression navigateur |
| **Telecharger PDF** | Export PDF |

Si la facture pro est **expiree**, un message d'avertissement s'affiche dans le panneau.
