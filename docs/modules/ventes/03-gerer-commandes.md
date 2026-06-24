---
sidebar_label: Gerer les commandes
sidebar_position: 3
---

# Gerer les commandes

## Creer une commande directement

1. Ouvrez **Ventes** -> **Commandes**.
2. Cliquez **Nouvelle commande**.
3. Selectionnez le **client** (contact ou entreprise CRM).
4. Ajoutez des lignes de commande :
   - Produit, quantite, prix unitaire.
   - Les totaux et taxes sont calcules automatiquement.
5. Cliquez **Enregistrer** pour creer la commande en statut "brouillon".

## Confirmer une commande

1. Ouvrez la commande en statut "brouillon".
2. Cliquez **Confirmer**.
3. La commande passe au statut "confirme". Ce statut indique que la commande est validee et prete a etre preparee.

## Suivi des statuts de commande

Une commande peut avoir les statuts suivants :

| Statut | Description |
|---|---|
| Brouillon | En cours de saisie, modifiable |
| Confirmee | Validee, prete a etre preparee |
| Partiellement livree | Au moins une ligne a ete livree |
| Livree | Toutes les lignes ont ete livrees |
| Facturee | La commande a ete facturee |
| Annulee | Commande annulee |

## Quantites livrees par ligne

1. Ouvrez une commande en statut "confirme".
2. Chaque ligne de commande affiche une colonne **Quantite livree** (initialement 0).
3. Lors de la creation d'un bon de livraison, les quantites livrees sont mises a jour automatiquement.
4. Quand toutes les lignes atteignent "quantite livree = quantite commandee", le statut passe a "livre".

<DocImage src="/img/guides/ventes/gerer-commandes.png" alt="Liste des commandes avec leurs statuts" />

Pour livrer une commande, voir [Bons de livraison](/modules/ventes/bons-livraison).
