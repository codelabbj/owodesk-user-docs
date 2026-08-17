---
sidebar_label: Encaissement
sidebar_position: 2
---

# Encaissement

Onglet **Encaissement** (`/app/pos/checkout`). Écran principal de vente au comptoir.

## Session obligatoire

Sans session ouverte :

- bandeau **Caisse fermée** / *Ouvrez une session pour commencer à vendre* ;
- bouton **Ouvrir la caisse**.

### Ouvrir depuis Encaissement

Modale **Ouvrir la caisse** :

| Champ | Description |
|-------|-------------|
| **Entrepôt / Caisse** | Obligatoire (— Choisir —) |
| **Fond de caisse initial** | Montant dans la devise de l’organisation |

Confirmation : **Ouvrir la caisse ?**

:::info
Cette ouverture rapide n’a **pas** de champ Notes (contrairement à l’onglet [Sessions](/modules/pos/sessions-caisse)).
:::

### Barre de session

Une fois ouverte : nom de l’entrepôt (badge **principal**), caissier, heure, CA + nombre de ventes, bouton **Clôturer**.

L’entrepôt du panier est **verrouillé** sur celui de la session.

### Clôture depuis Encaissement (raccourci)

Résumé : **CA total**, **Espèces encaissées**, **Fond initial**, **Cash théorique** ; saisie **Cash compté dans la caisse** ; écart (**Caisse équilibrée** / excédent / manquant).

Pour une clôture complète (répartition des modes, notes, email, Z détaillé), utilisez [Sessions de caisse](/modules/pos/sessions-caisse).

---

## Indicateurs

**Encaissé** · **Ventes** · **En cours**

## Ajouter des produits

Champ *Ajouter un produit (scan ou recherche)...* :

- recherche / filtre de la grille ;
- scan code-barres ou SKU ;
- **OwoScan** (douchette / WebSocket) : ajoute au panier si le code est trouvé.

Grille cliquable : nom, options, SKU, prix. Variantes : modale **Choisissez une option**.

### Ventes récentes

Liste : numéro, badge **Multientrepôt**, statut (**Brouillon** / **Finalisée** / **Annulée** / **Payée**), client, total. **Poursuivre** un brouillon.

---

## Panier

- Client : **Client anonyme** ou sélection ; **Nouveau client** (Prénom *, Nom, Téléphone optionnel) ;
- **Vider** le panier ;
- Lignes : quantité −/+, **Remise ligne** (%), prix net, supprimer ;
- Alerte **Stock insuffisant (N dispo.)** si besoin.

### Remises

| Type | Description |
|------|-------------|
| **Remise ligne** | % sur une ligne |
| **Remise sur le ticket** | % sur le ticket |
| **Remise grossiste** | Montant fixe |

Si la remise dépasse le seuil organisation (souvent **10 %**), une **Validation manager** est demandée (email + mot de passe → **Valider la remise** / **Faire valider**).

Totaux : **Sous-total** puis **Total**.

---

## Paiement

| Mode | Particularités |
|------|----------------|
| **Espèces** | **Montant reçu**, **Rendu** / **Insuffisant**, référence optionnelle |
| **Carte** | Valider sur le TPE puis confirmer ; réf. optionnelle |
| **Mobile Money** | **Wave**, **Orange Money**, **MTN Money**, **Moov Money** + réf. optionnelle |
| **Chèque** | **Référence obligatoire** (min. 3 caractères) |

Bouton **Encaisser — {montant}** (ou messages *Panier vide* / *Ouvrez la caisse d'abord*).

Confirmation : **Confirmer l'encaissement**.

Le stock est décrémenté à la finalisation de la vente.

---

## Ticket après encaissement

Modale **Vente encaissée** :

- normalisation MECeF automatique selon le mode org (**Normalisation MECeF en cours…**, **Normalisé**, échec + **Retenter**, ou **Ticket non normalisé**) ;
- ticket : éventuelle bannière **TICKET NORMALISÉ — MECeF**, réf. fiscale, n° transaction, QR ;
- **Passer** / **Imprimer** (format ticket ~80 mm).
