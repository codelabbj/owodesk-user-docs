# Certifier une facture

Guide pas à pas pour obtenir une **facture normalisée** avec QR code e-MECeF.

## Prérequis

- [Configuration e-MECeF](/modules/facturation/parcours/certification-fiscale/configuration) terminée et testée
- Mode *Normalisée* ou *Les deux* actif
- Facture en statut **Brouillon**

## Étapes

### 1. Créer la facture

**Facturation** → **Nouvelle facture** (ou facture multi-entrepôts)

<DocImage src="/img/guides/facturation/facture-brouillon.png" alt="Facture en brouillon" />

Renseignez :

- **Client** (contact CRM)
- **Lignes** : produits, quantités, prix
- **Entrepôt** si les lignes concernent du stock
- **Type de document** si ce n'est pas une vente simple : avoir, export… (voir [types MECeF](/modules/facturation/parcours/certification-fiscale/types-mecef))
- Pour un **avoir** : la **référence fiscale** de la facture d'origine (visible sur le PDF normalisé initial)

Les **devis** ne se certifient pas.

### 2. Contrôler le brouillon

Ouvrez la facture et vérifiez l'aperçu :

- Total TTC cohérent avec vos lignes
- Client et IFU client si requis
- Bon type de document (badge AVOIR, EXPORT…)

### 3. Finaliser en mode normalisé

Dans le panneau latéral **Finaliser** :

| Votre mode entreprise | Boutons affichés |
|----------------------|------------------|
| **Les deux** | *Simple* et *Normalisée* — cliquez **Normalisée** |
| **Normalisée uniquement** | Un seul bouton *Normalisée* |

OwoDesk envoie alors la facture à e-MECeF.

<DocImage src="/img/guides/facturation/facture-finaliser-normalisee.png" alt="Finaliser une facture en mode normalisé" />

### 4. Ce qui se passe côté technique

Selon l'adaptateur configuré :

**API DGI (e-MECeF Bénin)** — 2 étapes :

1. **Soumission** : la DGI calcule la ventilation TVA et renvoie un identifiant (UID)
2. **Confirmation** : récupération de la signature et du QR code

**Machine MCF** — 1 étape :

1. L'agent local ouvre la facture sur la machine, enregistre les lignes, les paiements, et clôture
2. La machine renvoie NIM, compteur, signature et données QR

### 5. Résultat

| Résultat | Statut | Action |
|----------|--------|--------|
| Succès | **Normalisée** | Téléchargez le PDF — QR et référence fiscale visibles |

<DocImage src="/img/guides/facturation/facture-pdf-normalisee.png" alt="PDF facture normalisée avec QR code" />

| Échec | **Échec certification** | Lisez le message d'erreur, corrigez, cliquez **Réessayer** |

Le panneau **Fiscal** sur la facture affiche :

- Référence fiscale (NIM-compteur)
- Signature / code MECeF
- QR code

### 6. Après certification

- Le **stock** a été décrémenté (sauf avoir qui le **restaure**)
- Une **écriture comptable** peut être créée automatiquement
- Vous pouvez **envoyer le PDF** par email au client

---

## Cas particuliers

### Facture simple (non certifiée)

En mode *Les deux*, cliquez **Simple** à la finalisation. Statut **Finalisée**, sans QR e-MECeF.

### Export

Choisissez le type **Export** : TVA à 0, code EV à la certification.

### Échec « montants incorrects »

La machine MCF recalcule le total : vérifiez que la somme des lignes = total facture (tolérance 1 FCFA).

### Annuler une facture déjà normalisée

Ne supprimez pas la facture : créez un **avoir** avec la référence fiscale d'origine.

Retour : [Certification fiscale](/modules/facturation/parcours/certification-fiscale)
