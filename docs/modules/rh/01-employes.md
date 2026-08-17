---
sidebar_label: Employés
sidebar_position: 2
---

# Employés

Onglet **Employés** (`/app/hr/employees`). Liste des dossiers employés, création, invitation et fiche détaillée.

## Code organisation

Bannière **Code Organisation** avec bouton **Copier** : code utilisé par les employés pour le **pointage mobile**.

## Ajouter ou modifier un employé

Bouton **Ajouter un employé**. Principales sections du formulaire :

### Identité et contact

| Champ | Description |
|-------|-------------|
| **Prénom / Nom** | Identité |
| **Matricule / Numéro employé** | Obligatoire ; non modifiable après création |
| **Email / Téléphone** | Coordonnées |
| **WhatsApp (notifications)** | Numéro pour les notifications WhatsApp |
| **Date / lieu de naissance**, **Adresse** | Optionnels selon votre usage |
| **Contact CRM (même personne)** | Lien éventuel avec un contact CRM |

À la création : option **Créer un compte utilisateur associé** (rôle + invitation par email).

### Emploi

| Champ | Description |
|-------|-------------|
| **Département** | Service (saisie libre ou existant) |
| **Poste / Rôle** | Fonction |
| **Type de collaboration** | Salarié, Stagiaire ou Prestataire |
| **Type d’assignation** | **Standard** ou **Terrain** (terrain : contraintes de poste/lieu assouplies pour le pointage) |
| **Date d’embauche** | Début |
| **Salaire** + devise | Rémunération de référence (XOF, EUR, USD…) |
| **Actif** | Statut du dossier |

### Stagiaire (si type Stagiaire)

- Dates de **début / fin de stage** ;
- **Tuteur / responsable**, **établissement**, **sujet de stage** ;
- **Doit être payé** (indemnité) ;
- **Droit à la fiche de paie** (sinon le parcours paie peut passer par une facture stagiaire).

### Déclaration

- Case **Employé déclaré** ;
- Si coché : **Numéro IFU** et **Numéro CNSS**.

### Lieux de travail

- Sélection parmi les lieux existants ;
- Possibilité d’ajouter un lieu (lien avec les [lieux de travail](/modules/rh/lieux-de-travail) / entrepôts Stock).

### Horaire de travail

- **Horaire entreprise** (planning global [Horaires](/modules/rh/horaires)) ;
- Ou **Horaire personnalisé** : grille jour par jour + seuil de retard.

## Filtres et recherche

| Filtre | Options |
|--------|---------|
| **Statut** | Tous, Actifs, Inactifs |
| **Type** | Tous, Salariés, Stagiaires, Prestataires |
| **Département** | Liste des départements |
| **Recherche** | Nom, matricule, email, département, poste |

## Tableau des employés

Colonnes typiques : **Employé**, **Numéro**, **Poste**, **Département**, **Salaire**, **Heure** / horaire (**Entreprise** ou personnalisé), **Statut**.

Badges : **Stagiaire**, **Déclaré**, **Débauché le…** si applicable.

Actions courantes : ouvrir la fiche, **Modifier**, **Supprimer** (avec confirmation).

---

## Fiche employé

Page `/app/hr/employees/{id}`, accessible en cliquant sur un employé.

### En-tête

- **Retour** vers la liste ;
- **Modifier**, **Mettre fin au contrat**, **Désactiver** / **Réactiver** ;
- **Inviter sur la plateforme** (si l’employé a un email et pas encore de compte utilisateur).

### Profil

Matricule, poste, département, badge **Terrain** si applicable, contacts, date d’embauche, statut **Actif / Inactif**, indicateur de paiement (**À jour** / **En retard**).

### Sections principales

| Section | Contenu |
|---------|---------|
| **Lieux de travail** | Lieux assignés pour le pointage |
| **Informations de stage** | Période, tuteur, école, sujet (stagiaires) + note d’exclusion éventuelle de la paie standard |
| **Temps & absences** | Liens **Voir la présence** et **Voir les congés** (ouvrent le [pointage](/modules/rh/presence) et les [congés](/modules/rh/conges-permissions) **filtrés sur cet employé** via `?employee=`) |
| **Horaire de travail** | Affectation horaire entreprise ou personnalisé |
| **Coordonnées bancaires** | Titulaire, banque, N° compte/RIB, SWIFT/BIC |
| **Salaire de base** / **Indemnité de stage** | Montant, **fréquence** (Mensuel / Quinzaine / Hebdomadaire), **Modifier salaire** |
| **Indicateurs** | Nombre de bulletins, total payé, en attente |
| **Historique des paiements** | Liste + **Payer** / **Payer l’indemnité** |
| **Déductions & Prêts** | Fixe récurrent, prêt, ponctuel |
| **Primes automatiques** | Fixes ou ponctuelles (badge **Versée** si verrouillée) |
| **Informations légales & déclaration** | Déclaré, IFU, CNSS ; **Attestation de travail** / **Attestation de stage** |
| **Documents** | Upload par catégorie (Contrat, Pièce d’identité, CNSS, RIB, Certificat, Médical, Autre) |

### Bon à savoir

Depuis la fiche, **Voir la présence** et **Voir les congés** ne montrent que les données de **cet** employé (plus toute l’équipe).
