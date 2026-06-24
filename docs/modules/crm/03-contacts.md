---
sidebar_label: Contacts
sidebar_position: 4
---

# Contacts

Onglet **Contacts** (`/app/crm/contacts`). Gestion des prospects et clients.

## En-tete

Compteur + **Ajouter contact** + **Import CSV** (si module Import/Export actif → `/app/io/imports?target_module=crm`).

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Total** | Contacts (filtres appliques) |
| **Avec email** | Contacts ayant un email |
| **Score eleve** | Score ≥ 60 |

## Filtres

| Filtre | Description |
|--------|-------------|
| **Source** | Origine du contact |
| **Etiquettes** | Puces cliquables |
| **Score** | Min / max (0–100) |
| **Entreprise** | Filtre par compte |
| **Tri** | Score ou nom (asc/desc) |

Puces de filtres actifs + **Tout effacer**.

## Formulaire creation / edition

| Champ | Description |
|-------|-------------|
| **Prenom** | Obligatoire |
| **Nom** | Obligatoire |
| **Email** | — |
| **Telephone** | — |
| **Entreprise** | Liste deroulante |
| **Source** | Texte libre |
| **Score** | 0–100 |
| **Etiquettes** | Separees par virgules |
| **Fonction** | Titre / poste |
| **LinkedIn** | URL |
| **Actif** | Case a cocher |

## Recherche

Barre de recherche texte.

## Tableau

| Colonne | Contenu |
|---------|---------|
| **Nom** | Lien vers la fiche (`/app/crm/contacts/id`) |
| **Email** | Lien mailto |
| **Entreprise** | Badge |
| **Telephone** | Lien tel |
| **Fonction** | — |
| **LinkedIn** | — |
| **Etiquettes** | — |
| **Score** | Points colores |
| **Actions** | Modifier, Supprimer |

## Detail contact

Page `/app/crm/contacts/id` (clic sur le nom dans le tableau).

### En-tete

Lien retour vers la liste. Identite : avatar, nom complet, fonction, entreprise, score, etiquettes, liens email / telephone / LinkedIn.

### Affaires

Tableau lecture seule : titre, valeur, etape, probabilite.

### Activites

Liste lecture seule : statut (a faire / fait / en retard), type, date, description.

### Factures

Tableau lecture seule : numero, total, etat de paiement.

Pas d'edition sur cette page. Etat **introuvable** si l'identifiant est invalide.

## Suppression

Dialogue de confirmation depuis la liste.
