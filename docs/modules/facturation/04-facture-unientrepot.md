---
sidebar_label: Facture unientrepôt
sidebar_position: 5
---

# Facture unientrepôt

Onglet **Facture unientrepôt** (`/app/billing/invoices/new`). Facture avec **un seul entrepôt** de sortie pour toutes les lignes.

## Accéder à la page

Menu latéral **Facturation** → **Facture unientrepôt**.

## Structure

- **Gauche** : aperçu du document ;
- **Droite** : entrepôt, AIB, paiement, validation.

---

## Type de document

| Type | Usage |
|------|-------|
| **Vente** | Facture classique |
| **Avoir Vente** | Avoir local (réf. MECeF / facture originale) |
| **Export** | Vente export (TVA exonérée) |
| **Avoir Export** | Avoir sur export |

Le type peut s’ajuster selon le **pays du client** (hors Bénin → Export).

---

## Destinataire (client)

Sélecteur **Particulier** / **Entreprise** :

- choisir un contact ou une entreprise CRM existante ;
- **+ Nouveau particulier** / **+ Nouvelle entreprise** ;
- option **Facturer un client divers (sans nom)**.

Le nom choisi s’affiche ensuite dans la liste, le détail et le PDF.

---

## Lignes

| Champ | Description |
|-------|-------------|
| **Produit** | Catalogue stock |
| **Variante** | Si le produit en a |
| **Prix unitaire** | Modifiable |
| **Quantité** | Unités |
| **Groupe de taxe** | TVA |
| **Total** | Calculé |

Stock insuffisant : bannière + **Gérer** (ajouter / ajuster). La création du brouillon est bloquée tant que le stock pose problème.

Export : message d’exonération TVA (groupe C).

---

## Panneau latéral

### Entrepôt

Un entrepôt pour toute la facture (déduction à la finalisation).

### AIB

**Aucun AIB** · **AIB 1%** · **AIB 5%**

### Mode de paiement à la création

Aucun / Espèces / Mobile Money / Carte / Virement / Chèque / **À crédit — Facture impayée (créance)**

### Valider

**Créer le Brouillon** → [détail de la facture](/modules/facturation/factures#detail-dune-facture) pour finaliser, encaisser ou créer une facture pro.
