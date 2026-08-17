---
sidebar_label: Gestion de la paie
sidebar_position: 3
---

# Gestion de la paie

Onglet **Gestion de la paie** (`/app/hr/payroll`).

Sous-titre dans l’app : *Créez une période, générez les bulletins, validez et payez vos employés.*

C’est le **parcours principal** de la paie. Les anciennes pages séparées (périodes, bulletins, historique) ne sont plus dans le menu : tout est centralisé ici.

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Employés** | Nombre d’employés dans le périmètre paie |
| **Masse salariale** | Total à payer sur la période |
| **Total payé** | Montant déjà versé |
| **… en attente** | Collaborateurs / bulletins encore à traiter |

## Périodes de paie

Liste des périodes (mois, dates, statut).

| Action | Effet |
|--------|-------|
| **Nouveau mois** / **Nouvelle période** | Crée une période pour un mois |
| **Paie multi-mois** | Prépare un lot sur plusieurs mois (un bulletin par collaborateur et par mois) |
| **Clic sur une période** | Affiche les bulletins et actions de cette période |
| **Voir plus…** | Affiche les périodes plus anciennes |

**Statuts** courants d’une période : **Brouillon**, **Validée**, **Clôturée** (et suivi du paiement des bulletins).

Une période doit être **sélectionnée** pour travailler.

## Workflow d’une période

Ordre typique :

1. **Créer brouillons** / **Générer les brouillons** — génère les fiches de paie en brouillon ;
2. Ajuster primes, déductions et retenues sur chaque fiche si besoin ;
3. **Valider** (une fiche) ou **Valider les brouillons** / **Valider tout** — verrouille les montants ;
4. **Payer** (individuel), **Payer la sélection** ou **Payer tous (période)** ;
5. Au besoin : **Rouvrir le bulletin** (si autorisé) ou **Invalider** (souvent réservé au propriétaire).

## Déductions et primes automatiques

Deux panneaux (période sélectionnée) :

- **Déductions automatiques** : fixe récurrente, prêt, ponctuelle — boutons **Gérer** / **Ajouter** ;
- **Primes automatiques** : fixe récurrente ou ponctuelle — même logique.

Ces éléments alimentent les bulletins de la période.

## Tableau des employés / bulletins

| Colonne | Contenu |
|---------|---------|
| **Employé** | Nom, matricule, statut |
| **Poste** | Fonction |
| **Salaire Base** | Salaire brut de référence |
| **Primes/Déd.** | Résumé des ajustements |
| **Émission** | État du bulletin (brouillon, validé…) |
| **Paiement** | Payé, en attente, partiel… |
| **Net à payer** | Montant net |

Badges utiles : **Fiche** (bulletin salarié) ou **Facture stagiaire** (selon le droit à la fiche de paie du stagiaire).

Filtres : recherche, département, statut de paiement, etc.

## Détail d’un bulletin

Dans la fiche / modale :

- Primes et déductions manuelles ajustables tant que le bulletin est en brouillon ;
- **Retenues statutaires** pour un employé **déclaré** : **CNSS**, **ITS**, **Redevance SRTB** (et autres retenues légales selon la config) ;
- Actions : enregistrer le brouillon → **Voir / télécharger la fiche** → **Valider** → **Payer** ;
- **Rouvrir le bulletin** si vous devez corriger après validation (selon droits).

### Bulletin PDF — libellés importants

Sur le PDF / aperçu, vous retrouvez notamment :

- **BULLETIN DE PAIE** ;
- **Salaire de base**, primes, heures supplémentaires, **Salaire brut** ;
- Retenues : **Retenue ITS**, **Retenue CNSS**, **Redevance SRTB**, **VPS** le cas échéant ;
- **Total retenues**, **Salaire net**, **NET A PAYER** ;
- Cumuls depuis janvier et identité (CNSS, IFU…).

:::info Libellé SRTB
La redevance apparaît sous le nom **Redevance SRTB** (anciennement ORTB dans certaines versions). C’est le libellé à utiliser avec vos collaborateurs et sur les documents.
:::

La **Redevance SRTB** s’applique selon les règles configurées côté serveur (périodes type mars / juin et seuil d’exonération). Les montants détaillés ne sont pas forcément éditables dans l’écran Paramètres.

## Payer

### Un employé

- Montant à verser ;
- **Mode de paiement** : Espèces, Mobile Money, Virement bancaire, Chèque, Autre ;
- Option **Virement Mobile Money via PAL** (si activé dans **Paramètres → Paiements**), avec numéro de téléphone.

### Paiement groupé

Confirmation du montant total et de la liste des bénéficiaires, mêmes modes de paiement.

### Stagiaire sans fiche de paie

Parcours spécifique : montant manuel, facture éventuelle, validation puis paiement (**Facture stagiaire**).

## Paie multi-mois

Bouton **Paie multi-mois** :

- Choix **Du mois** / **Au mois** ;
- Note et référence optionnelles (visibles sur bulletins / historique) ;
- **Prévisualiser** puis **Créer les bulletins mensuels**, éventuellement **Valider** puis **Payer le lot**.

Utile pour un rattrapage sur plusieurs mois.

## Configuration connexe

- **Paramètres → Configuration de la paie** : taux CNSS, plafond, cotisations patronales, slogan / pied de page / signature du bulletin.
- **Paramètres → Paiements** : activation PAL pour la paie.

## Routes hors menu

`/app/hr/pay-periods`, `/app/hr/payslips` et `/app/hr/payment-history` peuvent encore exister techniquement, mais le travail quotidien se fait sur **Gestion de la paie**. L’historique reste aussi consultable depuis la [fiche employé](/modules/rh/employes).
