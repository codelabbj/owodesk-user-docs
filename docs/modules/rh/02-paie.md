---
sidebar_label: Gestion de la paie
sidebar_position: 3
---

# Gestion de la paie

Onglet **Gestion de la paie** (`/app/hr/payroll`). Periodes de paie, masse salariale et paiements individuels ou groupes.

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Employes** | Nombre d'employes dans le scope paie |
| **Masse salariale** | Total a payer sur la periode |
| **Total Paye** | Montant deja verse |
| **En attente** | Reste + employes sans bulletin ou en attente |

## Periodes de paie

Liste des periodes (nom, dates, statut : Brouillon, Validee, Cloturee).

| Action | Effet |
|--------|-------|
| **Nouvelle periode** | Creer une periode (nom, dates, statut) |
| **Clic sur une periode** | Filtre le tableau employes |
| **Modifier / Supprimer** | Icones sur chaque periode |
| **Voir plus...** | Acces a toutes les periodes |

Une periode doit etre **selectionnee** pour afficher les employes et les actions de paie.

## Deductions et primes automatiques (periode selectionnee)

Deux panneaux cote a cote :

**Deductions automatiques** : liste par employe, boutons **Gerer** et **Ajouter** (deduction fixe recurrente, pret, ponctuelle).

**Primes automatiques** : meme logique pour les primes (fixe recurrente ou ponctuelle).

## Filtres employes

- **Recherche** par nom ou matricule ;
- **Statut paiement** : Paye, En attente, Partiel, En retard ;
- **Departement**.

## Paiement groupe

Barre d'actions (periode selectionnee) :

| Bouton | Effet |
|--------|-------|
| **Payer la selection** | Paie les employes coches |
| **Payer tous (periode)** | Paie tous les eligibles de la periode |

Cases a cocher par ligne et case **tout selectionner** en en-tete.

## Tableau employes (periode active)

| Colonne | Contenu |
|---------|---------|
| **Employe** | Nom, matricule, statut actif |
| **Poste** | Fonction |
| **Salaire Base** | Salaire brut de reference |
| **Primes/Ded.** | Resume des ajustements |
| **Statut** | Paye, En attente, Partiel, En retard |
| **Paiement** | Net du, detail +/- primes et deductions, deja paye |
| **Actions** | **Payer** (si non solde), **Fiche** (telecharger bulletin PDF si disponible) |

Pagination si plusieurs pages.

## Payer un employe (modale)

- Montant a verser ;
- **Mode de paiement** : Especes, Mobile Money, Virement bancaire, Cheque ;
- Option **Paiement PAL** (Mobile Money via PAL) avec numero de telephone ;
- Primes et deductions ajustables sur la fiche avant validation.

## Paiement groupe (modale)

Meme modes de paiement, confirmation du montant total et liste des beneficiaires.

Les routes `/app/hr/pay-periods`, `/app/hr/payslips` et `/app/hr/payment-history` ne sont pas dans le menu : tout est centralise sur cette page.
