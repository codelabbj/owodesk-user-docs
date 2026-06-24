---
sidebar_label: Commandes initiees
sidebar_position: 4
---

# Commandes initiees

Onglet **Commandes initiees** (`/app/ecommerce/intents`). Demandes clients via WhatsApp a convertir en facture.

## Sans boutique

Message + **Creer ma boutique** vers [Parametres](/modules/ecommerce/parametres-boutique).

## En-tete

Titre **Commandes initiees** avec sous-titre (WhatsApp vers facture brouillon). Badge du nombre **en attente**.

## Recherche

Reference, client, telephone, produit ou entrepot.

## Tableau

| Colonne | Contenu |
|---------|---------|
| **Reference** | Identifiant commande |
| **Client** | Nom |
| **Telephone** | Lien WhatsApp |
| **Produit** | Article demande |
| **Entrepot** | Badge ou **A assigner** |
| **Date** | Date de la demande |
| **Actions** | **Voir le produit** (externe), **Traiter** |

## Traiter une commande

Bouton **Traiter** :

- si l'entrepot manque : modale **Choisir l'entrepot** (select rechercheable, contexte reference + produit) ;
- creation d'une **facture brouillon** dans [Facturation](/modules/facturation/factures) ;
- redirection vers la facture creee.

## Etats vides

- Erreur API affichee si echec ;
- **Aucune commande en attente** avec explication.
