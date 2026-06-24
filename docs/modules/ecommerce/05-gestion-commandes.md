---
sidebar_label: Gestion des commandes
sidebar_position: 5
---

# Gestion des commandes en ligne

Consultez et suivez les commandes passees depuis la boutique.

## Consultation des commandes

1. Ouvrez **E-commerce** > **Commandes**.
2. La liste affiche toutes les commandes avec :
   - **Numero de commande**
   - **Client** (nom, email)
   - **Montant total**
   - **Statut**
   - **Date**

<DocImage src="/img/guides/ecommerce/liste-commandes.png" alt="Liste des commandes e-commerce" />

## Statuts des commandes

- **En attente** : commande recue, paiement non confirme
- **Confirmee** : paiement confirme, commande a preparer
- **En preparation** : la commande est en cours de preparation
- **Expediee** : la commande a ete remise au transporteur
- **Livree** : la commande a ete livree au client
- **Annulee** : la commande a ete annulee
- **Remboursee** : le montant a ete rembourse au client

## Detail d'une commande

1. Cliquez sur une commande pour voir le detail :
   - **Articles commandes** (produit, quantite, prix)
   - **Informations client** (nom, email, telephone, adresse)
   - **Adresse de livraison**
   - **Mode de paiement** et statut du paiement
   - **Mode de livraison** et zone

<DocImage src="/img/guides/ecommerce/detail-commande.png" alt="Detail d'une commande" />

## Lien CRM

Chaque commande cree automatiquement un **contact** dans le module CRM si le client n'existe pas deja. La commande est liee au contact pour le suivi commercial.
