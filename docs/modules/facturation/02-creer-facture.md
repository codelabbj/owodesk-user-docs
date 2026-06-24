---
sidebar_label: Creer une facture
sidebar_position: 2
---

# Creer une facture

Une facture peut etre creee en brouillon avant d'etre finalisee et, selon le type, certifiee.

## Creer une facture

1. Ouvrez **Facturation** > **Factures**.
2. Cliquez sur **Nouvelle facture**.
3. Selectionnez le **client** (contact CRM ou client facturation).
4. Remplissez les champs generaux :
   - **Date** de la facture
   - **Numero** (genere automatiquement, modifiable)
   - **Devise** (par defaut celle de l'organisation)

<DocImage src="/img/guides/facturation/facture-creation.png" alt="Creation d'une facture" />

## Ajouter des lignes d'articles

1. Dans la section **Lignes de facture**, cliquez sur **Ajouter une ligne**.
2. Selectionnez un **produit** ou saisissez une **description libre**.
3. Renseignez :
   - **Quantite**
   - **Prix unitaire** HT
   - **Remise** (optionnelle, en % ou montant)
4. Le total de la ligne est calcule automatiquement.

## Selectionner l'entrepot pour chaque ligne

1. Sur chaque ligne d'article, ouvrez le champ **Entrepot**.
2. Selectionnez l'entrepot de provenance.
3. Si la facture est finalisee, le stock de cet entrepot sera decremente.

## Configurer le type de facture

1. Dans l'en-tete, ouvrez le champ **Type de facture** :
   - **Simple** : pas de certification fiscale
   - **Normalisee** : certification e-MECeF obligatoire
   - **Proforma** : document provisoire sans valeur fiscale
   - **Avoir** : annulation ou correction d'une facture
2. Le type choisi determine les regles de finalisation.

## Configurer le type de document

1. Dans l'en-tete, ouvrez le champ **Type de document** :
   - **Vente** : facture standard (code FV)
   - **Avoir** : avoir sur facture (code FA)
   - **Export** : vente export TVA 0 (code EV)
   - **Devis** : proposition commerciale

## Definir le groupe de taxes par article

1. Sur chaque ligne, ouvrez le champ **Groupe de taxes**.
2. Selectionnez un groupe de taxes existant (ex. TVA 18%, TVA 0%).
3. La taxe est calculee automatiquement sur le montant de la ligne.
4. Verifiez le total TTC en bas de la facture.

## Enregistrer en brouillon

1. Cliquez sur **Enregistrer**.
2. La facture reste en statut **Brouillon**.
3. Vous pouvez la modifier, la dupliquer ou la supprimer tant qu'elle est en brouillon.
4. Pour la finaliser, suivez le guide [Finaliser une facture](/modules/facturation/finaliser-facture).
