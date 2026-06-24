---
sidebar_label: Depenses
sidebar_position: 5
---

# Depenses

Onglet **Depenses** (`/app/accounting/expenses`). Suivi des charges et justificatifs.

## Filtre periode

Selecteurs **date de debut** et **date de fin** (par defaut : mois en cours).

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Total Depenses** | Somme sur la periode |
| Par categorie | Jusqu'a 2 principales categories de depenses |

## Nouvelle depense

Bouton **Nouvelle depense**. Formulaire :

| Champ | Description |
|-------|-------------|
| **Montant** | Obligatoire |
| **Libelle** | Description de la charge (obligatoire) |
| **Date** | Date de la depense |
| **Categorie** | Liste des categories (ou Sans categorie) |
| **Methode** | Especes, Virement, Mobile Money, Carte |
| **Reference** | N° recu, virement… (optionnel) |
| **Justificatifs** | Fichiers PDF, images ou documents (max 20, 20 Mo chacun) |

Boutons **Enregistrer** et **Annuler**.

Les depenses peuvent aussi etre creees automatiquement lors de la cloture d'une [demande de decaissement](/modules/demandes-internes/boite-reception).

## Tableau des depenses

| Colonne | Contenu |
|---------|---------|
| Case a cocher | Selection pour telechargement des justificatifs |
| **Date** | Date de creation |
| **Libelle / Categorie** | Description et categorie (pastille couleur) |
| **Montant** | Montant de la depense |
| **Moyen / Ref** | Mode de paiement et reference |
| **Doc** | Liens vers les justificatifs joints |
| **Corbeille** | Supprimer la depense (confirmation) |

Telechargement groupé des justificatifs selectionnes via le bouton dedie.
