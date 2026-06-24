---
sidebar_label: Valider une demande
sidebar_position: 2
---

# Valider une demande de decaissement

En tant que destinataire d'une demande, vous pouvez la consulter, la transferer, la refuser ou la cloturer.

## Consulter les demandes recues

1. Ouvrez **Demandes** > **Demandes recues**.
2. La liste affiche toutes les demandes qui vous sont assignees avec :
   - Le **type** de demande (Decaissement, Fourniture, RH, Autre)
   - Le **statut** (en attente, transfere, refusé, clos)
   - L'**auteur** de la demande
   - La **date** de creation
3. Cliquez sur une demande pour ouvrir sa fiche detaillee.
4. Consultez le **montant**, le **motif**, les **pieces jointes** et l'**historique** des actions.

<DocImage src="/img/guides/demandes/demandes-recues.png" alt="Liste des demandes recues" />

## Transferer une demande a un autre utilisateur

1. Ouvrez la fiche de la demande a transferer.
2. Cliquez sur le bouton **Transferer**.
3. Dans la fenetre qui s'affiche, selectionnez le **nouveau destinataire**.
4. Saisissez un **commentaire** expliquant le motif du transfert (champ obligatoire).
5. Cliquez sur **Transferer** pour confirmer.
6. Le nouveau destinataire recoit la notification. La demande conserve l'historique des transferts.

<DocImage src="/img/guides/demandes/transfert-demande.png" alt="Transfert d'une demande a un autre utilisateur" />

## Refuser une demande

1. Ouvrez la fiche de la demande a refuser.
2. Cliquez sur le bouton **Refuser**.
3. Une fenetre de confirmation apparait. Le champ **Motif du refus** est obligatoire.
4. Saisissez la raison du refus (exemple : budget insuffisant, demande incomplete).
5. Cliquez sur **Confirmer le refus**.
6. La demande passe au statut **Refuse**. L'auteur en est informe.
7. Une demande refusee peut etre re-soumise apres modification par son auteur.

## Cloturer une demande de decaissement

1. Ouvrez la fiche de la demande de decaissement a cloturer.
2. Verifiez les informations : montant, motif, pieces jointes.
3. Cliquez sur le bouton **Cloturer**.
4. La cloture d'une demande de decaissement declenche automatiquement :
   - La creation d'une **depense** en comptabilite avec le montant et le motif renseignes
   - Le rattachement des pieces jointes a la depense
   - La mise a jour du statut de la demande en **Clos**
5. Cliquez sur **Confirmer** pour finaliser la cloture.
6. La depense creee est accessible depuis le module **Comptabilite** > **Depenses**.

<DocImage src="/img/guides/demandes/cloture-demande-decaissement.png" alt="Cloture d'une demande de decaissement avec creation de depense" />

## Historique des actions

1. Depuis la fiche d'une demande, faites defiler jusqu'a la section **Historique**.
2. L'historique affiche chronologiquement toutes les actions realisees :
   - Creation de la demande
   - Transferts successifs avec commentaires
   - Refus avec motif
   - Cloture avec creation de depense
3. Chaque entree mentionne l'**auteur** de l'action, la **date** et l'**heure** precise.
4. L'historique est consultable par l'auteur et tous les destinataires de la demande.

> L'historique est en lecture seule et ne peut pas etre modifie ni supprime.
