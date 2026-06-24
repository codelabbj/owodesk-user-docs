---
sidebar_position: 10
---

# Achats / Approvisionnements

Gerer les fournisseurs, les bons de commande et la reception des marchandises.

Les achats sont disponibles depuis **Stock** -> **Achats**.

## Creer un fournisseur

1. Ouvrez **Stock** -> **Achats** -> onglet **Fournisseurs**.
2. Cliquez **Ajouter un fournisseur**.
3. Saisissez **Nom**, **Email**, **Telephone** et **IFU/NIF**.
4. Cliquez **Enregistrer**.

## Creer un bon de commande

1. Ouvrez **Stock** -> **Achats** -> onglet **Commandes**.
2. Cliquez **Nouvelle commande**.
3. Selectionnez le **fournisseur** et l'**entrepot** de destination.
4. Ajoutez des lignes : produit, quantite, cout unitaire.
5. Cliquez **Enregistrer** (statut brouillon).

## Confirmer une commande

1. Ouvrez la commande en statut **Brouillon**.
2. Cliquez **Confirmer**. La commande passe a **Confirmee**.

## Receptionner les marchandises

1. Ouvrez une commande en statut **Confirmee** ou **Partiellement recue**.
2. Cliquez **Receptionner**.
3. Saisissez les **quantites recues** pour chaque ligne.
4. Cliquez **Valider**.
5. Le stock est automatiquement mis a jour et une ecriture comptable est generee.

## Payer un fournisseur

1. Ouvrez une commande en statut **Recu** avec un solde restant.
2. Cliquez **Payer**.
3. Saisissez le **montant**, la **methode de paiement** et la **reference**.
4. Cliquez **Valider**.

## Statuts d'une commande

| Statut | Description |
|---|---|
| Brouillon | En cours de saisie, modifiable |
| Confirmee | Validee, en attente de reception |
| Partiellement recue | Au moins une ligne receptionnee |
| Recue | Toutes les lignes receptionnees |
| Payee | Commandee entierement payee |

<DocImage src="/img/guides/stock/achats.png" alt="Gestion des achats" />
