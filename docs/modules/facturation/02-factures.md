---
sidebar_label: Factures
sidebar_position: 3
---

# Factures

Onglet **Factures** (`/app/billing/invoice-list`). Liste, recherche et détail de chaque facture.

## Accéder à la page

Menu latéral **Facturation** → **Factures**.

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Total facturé** | Somme des montants (selon filtre) |
| **Total encaissé** | Déjà payé |
| **En attente** | Reste à encaisser |

## Filtres rapides

**Toutes** · **Aujourd'hui** · **Impayées** · **En retard** · **Payées**

## Recherche

Champ *Rechercher une facture ou un client…* : numéro de facture ou **nom du client** (particulier, entreprise ou libellé affiché).

## Carte facture

- **Client** (nom affiché correctement pour particuliers et entreprises) ;
- **Numéro** ;
- Badges : **FP**, **AVOIR**, **EXPORT**, **AV. EXPORT**, **Multientrepôt** ;
- **Montant** ;
- Paiement : **Payée** / **Partiel** / **Non payée** ;
- Statut document : **Brouillon**, **En attente DGI**, **Finalisée**, **Normalisée**, **Échec DGI**, **Annulée** ;
- Date d’émission.

## Créer une facture

- **Unientrepôt** → [Facture unientrepôt](/modules/facturation/facture-unientrepot)
- **Multientrepôt** → [Facture multientrepôt](/modules/facturation/facture-multientrepot)
- **Facture service** → [Facture service](/modules/facturation/facture-service)

---

## Détail d'une facture

Page `/app/billing/invoices/{id}`.

### Aperçu

À gauche : aperçu papier (entreprise, **client**, lignes, totaux, TVA). Le nom du client (y compris **entreprise**) apparaît aussi sur le PDF.

### Certification fiscale

- **Certification en cours…** / **En attente DGI** ;
- **Échec DGI** + **Réessayer la certification** ;
- Succès : **Facture certifiée (e-MECeF)** (QR, réf. fiscale, signature, compteur, NIM).

La config se fait dans [Fiscal / e-facture](/modules/facturation/fiscal-efacture) (**Paramètres → Facturation**).

### Si brouillon — Finaliser

Selon le mode organisation :

| Mode | Boutons |
|------|---------|
| **Les deux** | Finalisation **Simple** et **Normalisée** |
| **Simple uniquement** | **Simple** |
| **Normalisée uniquement** | **Normalisée** |

**Créer une facture pro à partir de cette facture** (date d’expiration optionnelle).

### Si finalisée / normalisée

| Action | Description |
|--------|-------------|
| **Imprimer** | Impression navigateur |
| **Télécharger PDF** | Export PDF |
| **Générer un Avoir** | Nouvelle facture préremplie (type avoir) |

:::info E-mail
Il n’y a pas de bouton **Envoyer par e-mail** sur cet écran pour l’instant. Utilisez PDF ou impression.
:::

### Cachet / signature

**Choisir une image** ou supprimer ; sinon cachet organisation.

### Encaisser

Si la facture n’est pas soldée (et pas brouillon / annulation / échec bloquant) :

1. **Montant** (prérempli avec le solde) ;
2. **Mode** : Espèces, Carte, Mobile Money, Virement, Chèque ;
3. **Référence de paiement** (obligatoire pour un chèque) ;
4. **Confirmer le paiement**.

Facture service : lien éventuel vers le **contrat** de prestation.

**Nouvelle vente** : retour vers la création unientrepôt.
