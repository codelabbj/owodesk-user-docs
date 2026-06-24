---
sidebar_label: Revenus
sidebar_position: 4
---

# Revenus

Onglet **Revenus** (`/app/accounting/revenues`). Encaissements issus de la facturation et du POS.

## Filtre periode

Selecteurs **date de debut** et **date de fin** (par defaut : mois en cours).

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Total Revenus** | Somme des encaissements sur la periode |
| Par mode de paiement | Jusqu'a 2 cartes (ex. Especes, Virement, Carte, Mobile Money) |

## Tableau des encaissements

| Colonne | Contenu |
|---------|---------|
| Case a cocher | Selection pour telechargement des justificatifs |
| **Date** | Date et heure de l'encaissement |
| **Source** | Facturation (icone facture) ou Vente comptoir / POS (icone panier) |
| **Reference / Client** | Numero de facture ou ticket, libelle client |
| **Montant** | Montant encaisse |
| **Moyen** | Mode de paiement |

Seuls les encaissements avec justificatif lie sont telechargeables (facture ou ticket POS).

## Telecharger les justificatifs

1. Cochez une ou plusieurs lignes (ou tout selectionner via l'en-tete).
2. Cliquez le bouton de telechargement qui apparait.
3. Les factures et tickets selectionnes sont telecharges.

Sources affichees : paiements facturation confirmes et ventes POS terminees.
