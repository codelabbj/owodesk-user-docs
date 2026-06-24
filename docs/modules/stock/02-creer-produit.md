---
sidebar_label: Creer un produit
sidebar_position: 2
---

# Creer un produit

Les fiches produits contiennent toutes les informations necessaires a la vente et a la gestion de stock.

## Creer un produit

1. Ouvrez **Stock** > **Produits**.
2. Cliquez sur **Nouveau produit**.
3. Renseignez les informations de base :
   - **SKU** (reference unique, generee automatiquement ou saisie manuellement)
   - **Nom** du produit
   - **Description** (optionnelle)
   - **Categorie** (selectionnez une categorie existante)
4. Cliquez sur **Enregistrer** pour creer le produit.

<DocImage src="/img/guides/stock/produit-creation.png" alt="Creation d'un produit" />

## Definir l'unite de mesure

1. Dans la fiche produit, ouvrez le champ **Unite de mesure**.
2. Selectionnez une unite parmi la liste :
   - **Unite** (piece, article)
   - **Kg** (kilogramme)
   - **L** (litre)
   - **M** (metre)
   - **Carton** / **Paquet**
3. L'unite est utilisee pour les mouvements de stock et les ventes.

## Prix d'achat et prix de vente

1. Dans la section **Prix**, renseignez :
   - **Prix d'achat** HT (cout unitaire)
   - **Prix de vente** HT (prix unitaire de vente)
2. Les prix sont utilises pour le calcul des marges et la facturation.
3. Modifiez les prix a tout moment ; les factures deja emises ne sont pas impactees.

## Configurer les paliers de prix (prix par quantite)

1. Dans la section **Paliers de prix**, cliquez sur **Ajouter un palier**.
2. Definissez :
   - **Quantite minimale** (ex. 10)
   - **Quantite maximale** (ex. 49)
   - **Prix unitaire** pour cette tranche
3. Ajoutez autant de paliers que necessaire.
4. Lors de la facturation, le prix est calcule automatiquement selon la quantite commandee.

## Groupe de taxes et regime fiscal

1. Dans la section **Taxes**, selectionnez un **groupe de taxes** (ex. TVA 18%).
2. Choisissez le **regime fiscal** :
   - **Standard** : regime general
   - **Touristique** : taux reduit pour le secteur touristique
   - **Specifique** : taux specifique defini par la reglementation
3. Le regime fiscal impacte le calcul des taxes lors de la facturation.

## Taxe AIB

1. Dans la section **Taxes**, activez l'option **AIB** (Acompte sur Impot sur les Benefices) si applicable.
2. Le taux AIB est defini dans la configuration de la taxe.
3. L'AIB est calculee automatiquement sur les ventes de ce produit.
