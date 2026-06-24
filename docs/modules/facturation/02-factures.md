---
sidebar_label: Factures
sidebar_position: 3
---

# Factures

Onglet **Factures** (`/app/billing/invoice-list`). Liste, recherche et acces au detail de chaque facture.

## Acceder a la page

Menu lateral **Facturation** > onglet **Factures**.

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Total facture** | Somme des montants des factures affichees (selon filtre actif) |
| **Total encaisse** | Montant deja paye sur ces factures |
| **En attente** | Reste a encaisser |

## Filtres rapides

Chips en haut de la liste :

| Filtre | Affiche |
|--------|---------|
| **Toutes** | Toutes les factures |
| **Aujourd'hui** | Factures emises aujourd'hui |
| **Impayees** | Etat de paiement Non payee ou Partiel |
| **En retard** | Impayees depuis plus de 30 jours |
| **Payees** | Entierement reglees |

## Recherche

Champ **Rechercher une facture ou un client** : filtre par numero de facture ou nom du client.

## Carte facture

Chaque carte affiche :

- **Client** ;
- **Numero** de facture ;
- **Badges** eventuels :
  - **FP** : facture pro generee depuis cette facture ;
  - **AVOIR** / **EXPORT** / **AV. EXPORT** : type de document ;
  - **Multientrepot** : sortie de stock sur plusieurs entrepots ;
- **Montant** total ;
- **Etat de paiement** : Payee, Partiel, Non payee ;
- **Statut document** : Brouillon, En attente DGI, Finalisee, Normalisee, Echec DGI, Annulee ;
- **Date** d'emission.

Cliquez sur une carte pour ouvrir le detail.

## Creer une facture

Boutons en haut a droite :

- **Unientrepot** → [Facture unientrepot](/modules/facturation/facture-unientrepot)
- **Multientrepot** → [Facture multientrepot](/modules/facturation/facture-multientrepot)

---

## Detail d'une facture

Page `/app/billing/invoices/{id}`, accessible en cliquant sur une facture dans la liste.

### En-tete

- Bouton **Retour** vers la liste ;
- Badges : type de document (AVOIR, EXPORT…), Multientrepot, statut (Brouillon, Normalisee, etc.).

### Apercu document

A gauche : apercu imprimable de la facture (en-tete entreprise, client, lignes, totaux, ventilation TVA).

### Panneau de controle (droite)

#### Certification fiscale

Selon le statut :

- **En attente DGI** : certification en cours (rafraichissement automatique).
- **Echec DGI** : message d'erreur + bouton **Reessayer** la certification normalisee.
- **Normalisee** : QR code MECeF, reference fiscale, signature, compteur, date de certification.

#### Si la facture est en brouillon

Message invitant a finaliser. Boutons selon le mode de facturation de l'organisation :

| Mode org. | Boutons disponibles |
|-----------|---------------------|
| **Les deux** | **Finaliser simple** et **Finaliser normalisee** |
| **Simple uniquement** | **Finaliser simple** |
| **Normalisee uniquement** | **Finaliser normalisee** |

Si la configuration fiscale est incomplete, une fenetre propose d'aller vers [Fiscal / e-facture](/modules/facturation/fiscal-efacture).

**Facture pro** (si pas encore creee) :

- Bouton **Creer une facture pro a partir de cette facture** ;
- Saisie optionnelle de la **date d'expiration** ;
- Confirmation **Creer la facture pro**.

Si une facture pro existe deja : lien **Voir la facture pro**.

#### Si la facture est finalisee

Actions disponibles :

| Action | Description |
|--------|-------------|
| **Imprimer** | Ouvre la fenetre d'impression |
| **Telecharger PDF** | Export PDF de la facture |
| **Generer un Avoir** | Ouvre une nouvelle facture pre-remplie (type Avoir) — disponible si statut Finalisee ou Normalisee |

#### Cachet / signature

- Si aucune image : **Choisir une image** (upload sur la facture).
- Si image presente : apercu + bouton supprimer.
- Sinon, le cachet de l'organisation (parametres) peut s'afficher.

#### Enregistrer un paiement

Disponible si la facture n'est pas en brouillon, en attente DGI, en echec DGI ou annulee, et qu'elle n'est pas entierement payee.

1. Saisissez le **montant** (pre-rempli avec le solde restant).
2. Choisissez le **mode** : Especes, Carte bancaire, Mobile Money, Virement bancaire.
3. Cliquez **Confirmer le paiement**.

- Montant >= solde → paiement total, facture **Payee**.
- Montant < solde → paiement partiel, etat **Partiel**.

#### Nouvelle vente

Bouton **Nouvelle vente** : retour vers la creation de facture unientrepot.
