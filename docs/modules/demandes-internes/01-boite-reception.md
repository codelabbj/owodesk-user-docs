---
sidebar_label: Boite de reception
sidebar_position: 2
---

# Boite de reception

Onglet **Boite de reception** (`/app/requests`). Liste de toutes les demandes qui vous concernent.

## Acceder a la page

Menu lateral **Demandes & approbations** > onglet **Boite de reception** (page par defaut du module).

Un compteur affiche le nombre de demandes **a traiter** (vous etes detenteur et statut en cours).

Bouton **Nouvelle demande** : raccourci vers [Nouvelle demande](/modules/demandes-internes/nouvelle-demande).

## Filtres

| Filtre | Options |
|--------|---------|
| **Perimetre** | Tout ce qui me concerne, A traiter uniquement, Mes envois uniquement ; administrateurs : Reste de l'organisation |
| **Type** | Decaissement, Fourniture, RH, Autre |
| **Statut** | En cours, Refusee, Cloturee |

Les demandes a traiter en priorite apparaissent en tete de liste.

## Tableau

| Colonne | Contenu |
|---------|---------|
| **Reference** | Lien vers le detail |
| **Titre** | Objet de la demande |
| **Mon lien** | Badges A traiter, Mon envoi, Autre (admins) |
| **Type** | Decaissement, Fourniture, RH, Autre |
| **Statut** | En cours, Refusee, Cloturee |
| **Detenteur** | Collaborateur charge de traiter |
| **Date et heure** | Date de creation |
| **Actions** | **Traiter** (si vous pouvez agir) ou **Voir** |

---

## Detail d'une demande

Page `/app/requests/{id}`, accessible en cliquant sur une reference ou une action.

### En-tete

- **Reference** et **titre** ;
- **Type** et **statut** ;
- Bouton retour vers la boite de reception.

### Informations

- **Description** (si renseignee) ;
- **Demandeur** et **detenteur** actuel.

### Details selon le type

**Decaissement** : montant, justificatifs (liens telechargeables). Apres cloture, lien **Voir la depense creee** vers Comptabilite > Depenses.

**Fourniture** : liste des articles (description, quantite, urgence).

**RH** : nature (conge ou permission), dates de debut et fin, motif.

**Refus** : motif affiche si la demande a ete refusee.

### Traiter une demande (si vous etes detenteur)

Section **Votre decision** visible uniquement quand vous pouvez agir (`can_act`) :

1. **Commentaire de cloture** (optionnel).
2. Bouton principal :
   - **Executer et cloturer** pour un decaissement (cree la depense en comptabilite) ;
   - **Cloturer** pour les autres types.
3. Autres actions :
   - **Transferer** : choisir un collaborateur + commentaire optionnel, puis **Confirmer le transfert** ;
   - **Refuser** : motif obligatoire, puis **Confirmer le refus**.

### Historique

Chronologie des actions : Creee, Transferee, Refusee, Cloturee — avec auteur, date, commentaire et nouveau detenteur le cas echeant.
