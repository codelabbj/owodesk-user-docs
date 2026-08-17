---
sidebar_label: Documents
sidebar_position: 10
---

# Documents

Onglet **Documents** (`/app/hr/employee-documents`). Coffre-fort documentaire par employé.

## Indicateurs

| Indicateur | Signification |
|------------|---------------|
| **Total documents** | Nombre de fichiers |
| **Catégories utilisées** | Diversité des catégories |
| **Volume total** | Taille cumulée |

## Recherche et filtres

- **Recherche** : titre, nom employé, description ;
- **Filtre catégorie** : Contrat, Pièce d'identité, CNSS, RIB, Certificat, Médical, Autre.

Boutons **Tout déplier** / **Tout replier** sur les groupes employés.

Lien **Formats d'attestation** → modèles d'attestation de travail / de stage (`/app/hr/employee-documents/certificate-format`).

## Uploader un document

Bouton **Uploader un document** :

| Champ | Description |
|-------|-------------|
| **Employé** | Obligatoire |
| **Titre** | Nom du document |
| **Catégorie** | Contrat de travail, Pièce d'identité, CNSS, RIB, Certificat/Diplôme, Certificat médical, Autre |
| **Fichier** | Obligatoire à l'upload |

En modification : titre, catégorie et remplacement de fichier optionnel.

## Vue par employé

Chaque employé apparaît en carte repliable :

- Nombre de documents, catégories, volume ;
- Tableau : Document, Catégorie, Taille, Ajouté le, Par ;
- Actions : **Télécharger**, **Modifier**, **Supprimer**.

Les documents peuvent aussi être ajoutés depuis la [fiche employé](/modules/rh/employes) (section Documents). Les attestations PDF peuvent être générées depuis la fiche ou via les [demandes de pièces](/modules/rh/demandes-pieces).
