---
sidebar_label: Commandes initiées
sidebar_position: 4
---

# Commandes initiées

Onglet **Commandes initiées** (`/app/ecommerce/intents`).

Demandes clients (souvent via WhatsApp) à convertir en **facture brouillon**.

## En-tête

Sous-titre WhatsApp → facture ; badge **N en attente**.

## Recherche

*Référence, client, téléphone, produit…* (le filtre peut aussi porter sur l’entrepôt en coulisse).

## Tableau

| Colonne | Contenu |
|---------|---------|
| **Référence** | Identifiant |
| **Client** | Nom |
| **Téléphone** | Lien WhatsApp |
| **Produit** | Article demandé |
| **Entrepôt** | Ou **À assigner** |
| **Date** | |
| Actions | **Voir le produit**, **Traiter** |

## Traiter

1. **Traiter** ;
2. Si pas d’entrepôt : modale **Choisir l'entrepôt** ;
3. Création d’une facture brouillon → redirection `/app/billing/invoices/{id}` ([Facturation](/modules/facturation/factures)).
