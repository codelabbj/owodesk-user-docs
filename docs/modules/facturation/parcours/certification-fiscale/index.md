# Certification fiscale (Bénin — e-MECeF)

OwoDesk permet de **certifier** vos documents de vente conformément au système **e-MECeF** du Bénin : factures PDF et **tickets de caisse POS**.

La certification ajoute une **référence fiscale**, une **signature** et un **QR code** vérifiable par l'administration fiscale.

---

## Avant de commencer

### Qui peut certifier ?

Le **propriétaire** configure la fiscalité. Les utilisateurs avec droit d'**écriture sur la Facturation** ou le **POS** finalisent les documents.

### Prérequis communs

1. **Pays Bénin** et **IFU** renseigné — **Paramètres** → **Entreprise**
2. **Mode de facturation** : *Normalisée* ou *Les deux* — **Facturation** → **Fiscal / e-facture**
3. **Adaptateur fiscal** configuré et **testé** (connexion e-MECeF ou terminal MCF en ligne)
4. Module **Facturation** actif (et **POS** pour les tickets caisse)

### Deux façons de se connecter à e-MECeF

| Adaptateur | Usage typique | Fonctionnement |
|------------|---------------|----------------|
| **e-MECeF — DGI Bénin** | Cloud / API directe | Envoi puis confirmation en 2 étapes sur les serveurs DGI |
| **e-MECeF — Machine MCF** | Caisse avec terminal physique | Certification **immédiate** via l'agent local branché sur la machine |

Configuration détaillée : [Configurer e-MECeF](/modules/facturation/parcours/certification-fiscale/configuration)

---

## Que certifier dans OwoDesk ?

| Document | Où | Quand |
|----------|-----|-------|
| **Facture normalisée** | Facturation → détail facture | À la **finalisation** (bouton *Normalisée*) |
| **Avoir / export** | Facturation → nouvelle facture | Type de document + référence fiscale d'origine |
| **Ticket POS** | Point de vente → encaissement | **Automatique** à l'encaissement si la fiscalité POS est active |

Guides détaillés :

- [Types de documents MECeF (FV, FA, EV, EA)](/modules/facturation/parcours/certification-fiscale/types-mecef)
- [Certifier une facture](/modules/facturation/parcours/certification-fiscale/factures)
- [Certifier un ticket de caisse](/modules/facturation/parcours/certification-fiscale/tickets-pos)

---

## Résumé du parcours

### Facture

1. Créer la facture en **brouillon** (client, lignes, entrepôt si produits stockés)
2. Vérifier montants, TVA et type de document (vente, avoir, export…)
3. Cliquer **Finaliser** → **Normalisée**
4. OwoDesk contacte e-MECeF ; le statut passe à *Normalisée* ou *Échec certification*
5. Télécharger le **PDF** : QR code et mentions fiscales apparaissent sur le document

### Ticket POS

1. Ouvrir une **session de caisse**
2. Ajouter les articles et **encaisser**
3. Si la fiscalité POS est active, la certification se lance **en arrière-plan**
4. Le ticket affiche **TICKET NORMALISÉ — MECeF**, la référence et le QR code (ou un message d'erreur si échec — la vente reste enregistrée)

---

## Statuts à connaître

| Statut | Signification |
|--------|----------------|
| **Brouillon** | Pas encore finalisée, pas de valeur fiscale |
| **Finalisée** | Facture simple (non normalisée) |
| **Certification en cours** | e-MECeF traite la demande |
| **Normalisée** | Certifiée — PDF / ticket avec QR |
| **Échec certification** | Erreur e-MECeF — corriger et réessayer |

---

## Points importants

- La certification **normalisée est définitive** : on ne « décertifie » pas une facture. Pour corriger, émettez un **avoir** (type FA) en indiquant la **référence fiscale** de la facture d'origine.
- Les **devis** ne sont **pas** certifiés.
- En mode **Les deux**, vous choisissez à chaque finalisation : facture **simple** ou **normalisée**.
- Une erreur de certification sur le **POS** n'annule pas la vente : le stock est déjà décrémenté ; vous pouvez **relancer** la normalisation depuis le ticket.

:::warning
Vérifiez toujours les montants et le type de document avant de finaliser en mode normalisé.
:::
