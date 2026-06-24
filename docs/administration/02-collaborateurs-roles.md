---
sidebar_label: Collaborateurs et roles
sidebar_position: 2
---

# Collaborateurs et roles

La page **Collaborateurs et roles** vous permet de gerer les membres de votre equipe, leurs droits d'acces et les invitations en attente.

## Acces

**Administration** > **Collaborateurs et roles**

## Liste des collaborateurs

La page affiche la liste de tous les collaborateurs de l'organisation avec les informations suivantes :

- **Nom et prenom** du collaborateur.
- **Adresse email** utilisee pour la connexion.
- **Role** attribue dans l'organisation.
- **Statut** : actif, invitation en attente, ou desactive.
- **Date d'ajout** : date a laquelle le collaborateur a rejoint l'organisation.

<DocImage src="/img/guides/administration/collaborateurs-liste.png" alt="Liste des collaborateurs" />

## Inviter un collaborateur

1. Cliquez sur le bouton **Inviter un collaborateur**.
2. Saisissez l'**adresse email** du collaborateur (obligatoire).
3. Saisissez le **nom** du collaborateur (facultatif).
4. Selectionnez un **role** dans la liste deroulante (voir la section Roles predfinis ci-dessous).
5. Cliquez sur **Inviter**.
6. Un email d'invitation est envoye automatiquement au collaborateur.
7. Le collaborateur apparait dans la liste avec le statut "Invitation en attente".

## Roles predfinis

| Role | Description | Permissions principales |
|------|-------------|------------------------|
| **Proprietaire** | Acces total et gestion de l'abonnement | Tous les modules, administration, suppression |
| **Commercial** | Gestion de la relation client et ventes | CRM, facturation, devis, pipeline de vente |
| **Comptable** | Gestion financiere et comptable | Facturation, comptabilite, depenses, tresorerie |
| **Responsable RH** | Gestion des ressources humaines | Fiches employes, paie, conges, pointage |
| **Manager** | Supervision avec droits limites | Lecture/ecriture sans suppression |
| **Collaborateur** | Acces de base | Permissions minimales definies par module |

## Creer un role personnalise

1. Cliquez sur l'onglet **Roles et permissions**.
2. Cliquez sur **Creer un role**.
3. Saisissez un **nom** pour le role (ex. : "Magasinier", "Superviseur commercial", "Assistant comptable").
4. Pour chaque module, definissez les permissions :
   - **Aucun acces** : le module n'est pas visible pour ce role.
   - **Lecture** : consultation des donnees sans possibilite de modification.
   - **Ecriture** : creation et modification des donnees.
   - **Suppression** : possibilite de supprimer des donnees.
5. Cliquez sur **Enregistrer**.
6. Le nouveau role apparait dans la liste des roles disponibles lors de l'invitation.

<DocImage src="/img/guides/administration/collaborateurs-roles-personnalises.png" alt="Creation d'un role personnalise" />

## Modifier le role d'un collaborateur

1. Dans la liste des collaborateurs, localisez le collaborateur concerne.
2. Cliquez sur l'icone de modification (crayon) dans la colonne Actions.
3. Selectionnez le nouveau role dans la liste deroulante.
4. Cliquez sur **Enregistrer**.
5. Les permissions sont mises a jour immediatement. Le collaborateur peut avoir a se reconnecter pour appliquer les changements.

## Retirer un collaborateur

1. Dans la liste des collaborateurs, localisez le collaborateur concerne.
2. Cliquez sur l'icone de suppression (corbeille).
3. Confirmez la suppression dans la boite de dialogue.
4. Le collaborateur n'a plus acces a l'organisation.
5. Les donnees creees par ce collaborateur (contacts, factures, etc.) restent dans l'organisation.

## Gestion des invitations en attente

1. Cliquez sur l'onglet **Invitations en attente**.
2. La liste affiche les invitations non encore acceptees.
3. Pour chaque invitation, vous pouvez :
   - **Annuler** : supprime l'invitation si elle a ete envoyee par erreur.
   - **Renvoyer** : envoie a nouveau l'email d'invitation.
4. Les invitations expirent automatiquement apres 7 jours.

## Bon a savoir

- Chaque collaborateur ne voit que les modules et donnees correspondant a son role.
- Le role **Proprietaire** est unique et ne peut pas etre attribue a un autre collaborateur. Pour transferer la propriete, contactez le support OwoDesk.
- Un collaborateur peut appartenir a plusieurs organisations. Il bascule entre elles depuis le menu du profil.
