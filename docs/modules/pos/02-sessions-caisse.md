---
sidebar_label: Sessions de caisse
sidebar_position: 3
---

# Sessions de caisse

Onglet **Sessions de caisse** (`/app/pos/sessions`). Ouverture, cloture et rapports Z.

## En-tete

Si aucune session n'est ouverte : bouton **Ouvrir une session**.

## Session en cours

Banniere verte avec :

- numero de session et entrepot ;
- heure d'ouverture (**Depuis HH:MM**) ;
- **montant encaisse** et **nombre de ventes** ;
- **Z de caisse** : ouvre le rapport detaille ;
- **Cloturer** : modale de fin de session.

## Ouvrir une session

| Champ | Description |
|-------|-------------|
| **Entrepot / Caisse** | Entrepot autorise pour les ventes |
| **Fond de caisse** | Montant initial en especes |
| **Notes** | Optionnel |

Bouton **Ouvrir la caisse**.

## Cloturer une session

Resume de la session :

- CA total, nombre de ventes ;
- repartition **Especes**, **Carte**, **Mobile Money** ;
- **Fond initial + especes encaissees = cash theorique**.

| Champ | Description |
|-------|-------------|
| **Fond de caisse compte** | Montant reel compte en caisse |
| **Notes de cloture** | Optionnel |

Affichage de l'**ecart de caisse** (manque, excedent ou caisse equilibree).

Actions :

- **Email rapport** : envoi du rapport par email ;
- **Cloturer la caisse**.

## Historique des sessions

Tableau des sessions cloturees :

| Colonne | Contenu |
|---------|---------|
| **Session** | Numero |
| **Caisse** | Entrepot |
| **Ouverture / Cloture** | Dates et heures |
| **CA** | Chiffre d'affaires |
| **Ventes** | Nombre |
| **Fond initial / Fond compte** | Montants |
| **Ecart** | Difference de caisse |
| **Z** | Bouton pour ouvrir le rapport |

## Rapport Z de caisse

Modale **Z de caisse** :

### Resume

- CA total, ventes, **annulations**, **ecart caisse**.

### Ventes par mode de paiement

Tableau : mode, nombre de ventes, total.

### Top produits vendus

Tableau : produit, quantite, total.

Bouton **Envoyer par email** ou **Fermer**.
