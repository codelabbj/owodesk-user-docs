---
sidebar_label: Encaissement
sidebar_position: 2
---

# Encaissement

Onglet **Encaissement** (`/app/pos/checkout`). Caisse principale : scan, panier et paiement.

## Session de caisse obligatoire

Sans session ouverte, l'ecran affiche **Ouvrez une session pour commencer a vendre** avec le bouton **Ouvrir la caisse**.

Une fois la session active, une barre indique :

- nom de l'entrepot / caisse (badge **principal** si applicable) ;
- heure d'ouverture ;
- **CA session** et **nombre de ventes** ;
- bouton **Cloturer** (modale : cash compte, ecart, confirmation).

L'ouverture et la cloture sont aussi disponibles sur [Sessions de caisse](/modules/pos/sessions-caisse).

## Panneau gauche — Produits

### Indicateurs du jour

| Indicateur | Signification |
|------------|---------------|
| **Encaisse** | Total encaisse aujourd'hui |
| **Ventes** | Nombre de ventes du jour |
| **En cours** | Ventes en brouillon |

### Ajouter des articles

Champ unifie **scan + recherche** :

- scan code-barres ou SKU (douchette) ;
- recherche par nom de produit.

Grille de produits cliquables (nom, SKU, prix). Badge quantite si deja dans le panier.

Produits avec **variantes** : modale de choix d'option (nom, SKU, prix).

### Ventes recentes

Liste des dernieres ventes avec numero, statut, client, total.

- Cliquez pour deployer les **lignes** (produit, variante, entrepot, quantite, prix).
- Badge **Multientrepot** si la vente sort de plusieurs entrepots.
- Bouton **Poursuivre** sur les brouillons.
- **Voir plus** / **Voir moins** si plus de 5 ventes.

Statuts : Brouillon, Finalisee, Annulee.

## Panneau droit — Panier

### Configuration

| Champ | Description |
|-------|-------------|
| **Entrepot** | Entrepot de sortie stock (entrepots autorises pour les ventes) |
| **Client** | Recherche dans le CRM, **Client anonyme** par defaut |

Client :

- recherche par nom dans les contacts CRM ;
- bouton **+** pour **creer un client** rapide (prenom, nom, telephone) ;
- affichage compact du client selectionne avec bouton effacer.

### Lignes du panier

Pour chaque article :

- nom et variante ;
- selecteur **entrepot** (si plusieurs entrepots) ;
- alerte **stock insuffisant** si applicable ;
- boutons **− / +** quantite, prix ligne, corbeille.

Bouton **Vider** le panier.

Message **Multientrepot** si les lignes proviennent de plusieurs entrepots.

### Paiement

Modes : **Especes**, **Carte**, **Mobile Money**.

**Especes** :

- **Montant recu** ;
- calcul automatique du **Rendu** ou montant **Insuffisant**.

**Mobile Money** :

- operateur : Wave, Orange Money, MTN Money, Moov Money ;
- **Reference** (optionnelle).

**Carte** :

- message de validation TPE avant confirmation.

### Encaisser

Bouton **Encaisser — [montant] XOF** (desactive si panier vide, session fermee ou stock insuffisant).

Apres encaissement : **modale ticket** (impression / apercu du recu).

Le stock est decremente a la finalisation de la vente.
