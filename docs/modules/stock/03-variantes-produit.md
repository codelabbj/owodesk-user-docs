---
sidebar_label: Gerer les variantes de produit
sidebar_position: 3
---

# Gerer les variantes de produit

Les variantes permettent de declariner un produit avec des caracteristiques differentes (taille, couleur, etc.).

## Creer des variantes

1. Ouvrez **Stock** > **Produits**.
2. Ouvrez la fiche du produit souhaite.
3. Dans la section **Variantes**, cliquez sur **Ajouter des variantes**.
4. Le systeme propose de generer les combinaisons a partir d'attributs :
   - **Taille** (S, M, L, XL)
   - **Couleur** (Noir, Blanc, Rouge)
   - **Matiere** (Cuir, Tissu, Metal)
5. Selectionnez les attributs et leurs valeurs.
6. Cliquez sur **Generer les variantes**.

<DocImage src="/img/guides/stock/variantes-generation.png" alt="Generation de variantes" />

## Definir SKU, prix, statut par variante

1. Apres generation, chaque variante apparait dans la liste avec :
   - Un **SKU** unique (base sur le SKU du produit principal + suffixe)
   - Le **prix de vente** (par defaut celui du produit principal, modifiable)
   - Le **statut** (actif/inactif)
2. Modifiez individuellement chaque variante si necessaire :
   - SKU specifique
   - Prix different (ex. taille XXL plus cher)
   - Desactivez les variantes non disponibles
3. Les modifications sont independantes pour chaque variante.

## Paliers de prix par variante

1. Ouvrez une variante specifique dans la liste.
2. Dans la section **Paliers de prix**, configurez des paliers dedies.
3. Les paliers definis au niveau du produit principal ne s'appliquent pas automatiquement aux variantes.
4. Si aucun palier n'est defini sur la variante, le prix unitaire de la variante est utilise.
