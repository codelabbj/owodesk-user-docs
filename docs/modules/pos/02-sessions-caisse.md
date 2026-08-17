---
sidebar_label: Sessions de caisse
sidebar_position: 3
---

# Sessions de caisse

Onglet **Sessions de caisse** (`/app/pos/sessions`).

Sous-titre : *Gérez l'ouverture, la clôture et les Z de caisse.*

## Ouvrir une session

Sans session : bouton **Ouvrir une session**.

| Champ | Description |
|-------|-------------|
| **Entrepôt / Caisse** | Obligatoire |
| **Fond de caisse (montant initial)** | Espèces de départ |
| **Notes (optionnel)** | Commentaire d’ouverture |

Confirmation avant ouverture.

## Session ouverte

Bannière : **Session #N ouverte**, entrepôt, caissier, **Depuis HH:MM**, montant encaissé, nombre de ventes.

Boutons : **Z de caisse**, **Clôturer**.

## Clôturer

Écran complet (plus détaillé que le raccourci Encaissement) :

- cartes **CA total**, **Ventes**, **Espèces**, **Carte**, **Mobile Money**, **Chèque** ;
- fond initial + espèces = cash théorique ;
- **Fond de caisse compté (montant réel)** ;
- **Écart de caisse** (Manque / Excédent / Caisse équilibrée) ;
- **Notes de clôture (optionnel)** ;
- **Email rapport** (optionnel) ;
- **Clôturer la caisse**.

## Historique

Colonnes typiques : Session, **Caissier**, Caisse, Ouverture, Clôture, CA, Ventes, Fond initial, Fond compté, Écart, bouton **Z**.

## Z de caisse

Rapport de période / session :

- résumé : CA, Ventes, **Annulations**, **Écart caisse** ;
- **Ventes par mode de paiement** (dont **Chèque**) ;
- **Top produits vendus** ;
- **Envoyer par email** / **Fermer**.
