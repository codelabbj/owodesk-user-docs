---
sidebar_label: Facture unientrepot
sidebar_position: 5
---

# Facture unientrepot

Onglet **Facture unientrepot** (`/app/billing/invoices/new`). Creation d'une facture avec **un seul entrepot** de sortie de stock pour toutes les lignes.

## Acceder a la page

Menu lateral **Facturation** > onglet **Facture unientrepot**.

Indicateur en haut : **Facture unientrepot**.

## Structure de la page

Deux colonnes :

- **Gauche** : apercu du document (comme sur papier).
- **Droite** : parametres (entrepot, AIB, mode de paiement, validation).

---

## En-tete du document

### Type de document

Liste deroulante :

| Type | Usage |
|------|-------|
| **Vente** | Facture classique |
| **Avoir Vente** | Avoir sur une vente locale (reference MECeF requise) |
| **Export** | Vente export (TVA exoneree) |
| **Avoir Export** | Avoir sur vente export |

Le type peut s'ajuster automatiquement selon le **pays du client** (hors Benin → Export).

Lors d'un avoir pre-rempli depuis une facture existante (`?from_invoice=...`), le type et les lignes sont charges automatiquement.

### Reference MECeF (avoir)

Pour **Avoir Vente** ou **Avoir Export** : saisir le **code MECeF de la facture originale**.

---

## Destinataire (client)

Par defaut : **Client Divers**. Cliquez pour ouvrir le selecteur :

- Choisir un **contact CRM** existant ;
- Ou laisser **Client Divers**.

Bouton **+ Nouveau Client** : ouvre une fenetre de creation rapide (prenom, nom, email, telephone, entreprise, IFU, adresse, ville, pays). Le contact est enregistre dans le CRM et selectionne automatiquement.

---

## Lignes de facture

Pour chaque ligne :

| Champ | Description |
|-------|-------------|
| **Produit** | Selection dans le catalogue stock |
| **Variante** | Obligatoire si le produit a des variantes |
| **Prix unitaire** | Pre-rempli depuis le produit, modifiable |
| **Quantite** | Nombre d'unites |
| **Groupe de taxe** | A, B, C… (taux TVA selon le groupe) |
| **Total** | Calcule automatiquement |

- Bouton **+** pour ajouter une ligne.
- Icone corbeille pour supprimer une ligne.

### Stock insuffisant

Si le stock est insuffisant dans l'entrepot choisi, une banniere alerte s'affiche avec bouton **Gerer** pour :

- **Ajouter** du stock (entree) ;
- ou **Ajuster** le stock.

La creation du brouillon est bloquee tant qu'un probleme de stock subsiste.

### Export

Si le type est Export : message **Operation exoneree de TVA (Groupe C)**.

---

## Panneau lateral

### Entrepot de sortie

Selectionnez l'entrepot unique pour toute la facture. Le stock sera deduit de cet entrepot a la finalisation.

### AIB (Retenue a la source)

| Option | Taux |
|--------|------|
| Aucun AIB — Client particulier | 0 % |
| AIB 1 % — Entreprise avec IFU | 1 % |
| AIB 5 % — Sans IFU / Informel | 5 % |

### Mode de paiement

| Option | Effet |
|--------|-------|
| Aucun — Choisir plus tard | Pas de paiement a la creation |
| Especes | Paiement confirme a la creation |
| Mobile Money | Idem |
| Carte bancaire | Idem |
| Virement bancaire | Idem |
| Cheque | Idem |
| A credit — Facture impayee | Facture laissee en creance |

### Valider

Bouton **Creer le Brouillon** :

- Desactive si aucune ligne valide, creation en cours, ou stock insuffisant.
- Redirige vers le [detail de la facture](/modules/facturation/factures#detail-dune-facture) pour finaliser, encaisser ou creer une facture pro.

:::info Facture pro
Le message rappelle qu'il faut d'abord creer le brouillon, puis generer la facture pro depuis la page de detail.
:::
