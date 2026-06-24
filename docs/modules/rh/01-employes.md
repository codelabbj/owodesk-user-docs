---
sidebar_label: Employes
sidebar_position: 2
---

# Employes

Onglet **Employes** (`/app/hr/employees`). Dossiers employes, departements et affectations.

## Code organisation

Banniere **Code Organisation** avec bouton **Copier** : code utilise par les employes pour le pointage mobile.

## Ajouter ou modifier un employe

Bouton **Ajouter un employe**. Sections du formulaire :

### Compte utilisateur

- Lier un **compte utilisateur** existant (pre-remplit nom, email) ;
- Ou cocher **Creer un compte utilisateur associe** : choix du **role** + email d'invitation envoye automatiquement.

### Identite et poste

| Champ | Description |
|-------|-------------|
| **Numero employe** | Matricule (obligatoire, non modifiable apres creation) |
| **Prenom / Nom** | Identite |
| **Email / Telephone** | Coordonnees |
| **Date d'embauche** | Date de debut |
| **Departement** | Combobox (saisie libre ou existant) |
| **Poste / Role** | Fonction |
| **Type d'assignation** | Standard ou Terrain (terrain : pas de poste/lieu obligatoire pour le pointage) |
| **Type de collaboration** | Salarie, Stagiaire ou Prestataire |

### Stagiaire (si type Stagiaire)

- Dates de **debut / fin de stage** ;
- **Tuteur / responsable** ;
- **Etablissement** et **sujet de stage** ;
- Option **Doit etre paye** avec indemnite si applicable.

### Remuneration

- **Salaire de base** (ou indemnite de stage) + devise (XOF, EUR, USD) ;
- **Statut** : Actif ou Inactif.

### Declaration

- Case **Employe declare** ;
- Si coche : **Numero IFU** et **Numero CNSS**.

### Fin de contrat (modification uniquement)

- **Date de fin de contrat** et **motif**.

### Lieux de travail

- Selection parmi les lieux existants (tags cliquables) ;
- **Ajouter un nouveau lieu** : nom + position sur la carte, bouton **Creer et assigner**.

### Horaire de travail

- **Horaire entreprise** (planning global [Horaires](/modules/rh/horaires)) ;
- Ou **Horaire personnalise** : grille jour par jour (ouvre, debut, fin, pause) + seuil de retard en minutes.

## Filtres et recherche

| Filtre | Options |
|--------|---------|
| **Statut** | Tous, Actifs, Inactifs |
| **Type** | Tous, Salaries, Stagiaires, Prestataires |
| **Departement** | Liste des departements |
| **Recherche** | Nom, matricule, email, departement, poste |

Bouton **Reinitialiser**.

## Tableau des employes

Colonnes : Employe (lien fiche), Numero, Poste, Departement, Salaire, Horaire (Entreprise ou resume personnalise), Statut.

Badges : Stagiaire, Declare, date de debauche si applicable.

Menu **Actions** (trois points) :

| Action | Effet |
|--------|-------|
| **Envoyer code d'activation** | Code pointage pour l'employe |
| **Modifier** | Ouvre le formulaire |
| **Debaucher** | Date et motif de fin (employes actifs) |
| **Reactiver** | Remet un employe inactif en service |

---

## Fiche employe

Page `/app/hr/employees/{id}`, accessible en cliquant sur un employe.

### En-tete

- **Retour** vers la liste ;
- **Modifier**, **Mettre fin au contrat**, **Desactiver / Reactiver**.

### Profil

Matricule, poste, departement, badge Terrain si applicable, telephone, email, date d'embauche, statut de paiement (a jour / en retard).

### Sections

| Section | Contenu |
|---------|---------|
| **Lieux de travail** | Lieux assignes |
| **Informations de stage** | Periode, tuteur, ecole, sujet (stagiaires) |
| **Salaire de base** | Montant, frequence, dernier paiement ; bouton **Modifier salaire** |
| **Indicateurs** | Nombre de bulletins, total paye, en attente |
| **Historique des paiements** | Liste des bulletins ; bouton **Payer** |
| **Deductions & Prets** | Ajouter / modifier / supprimer (fixe recurrent, pret, ponctuel) |
| **Primes automatiques** | Primes fixes ou ponctuelles |
| **Documents** | Upload, telechargement, modification, suppression par document |
