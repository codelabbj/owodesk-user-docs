---
sidebar_label: Faire un inventaire physique
sidebar_position: 8
---

# Faire un inventaire physique

L'inventaire physique permet de comparer le stock theorique avec le stock reellement compte.

## Creer une session d'inventaire

1. Ouvrez **Stock** > **Inventaire physique**.
2. Cliquez sur **Nouvel inventaire**.
3. Selectionnez l'**entrepot** a inventorier.
4. Saisissez un **nom** ou une **reference** pour la session (ex. "Inventaire trimestriel juin 2026").
5. Cliquez sur **Creer la session**.
6. La session s'ouvre avec la liste des produits de l'entrepot et leurs quantites theoriques.

<DocImage src="/img/guides/stock/inventaire-session.png" alt="Session d'inventaire" />

## Saisir les quantites comptees

1. Pour chaque produit, saisissez la **quantite comptee** dans le champ prevu.
2. Le systeme affiche automatiquement :
   - La **quantite theorique** (stock actuel)
   - La **quantite comptee** (saisie)
   - L'**ecart** (difference entre theorique et comptee)
3. Passez en revue tous les produits de l'entrepot.
4. Vous pouvez filtrer pour ne voir que les produits avec ecart.

## Valider l'inventaire (ajustement automatique)

1. Verifiez l'ensemble des quantites saisies.
2. Cliquez sur **Valider l'inventaire**.
3. Confirmez la validation dans la boite de dialogue.
4. Le systeme cree automatiquement des mouvements d'**ajustement** pour chaque produit :
   - Si comptee > theorique : mouvement d'entree (surplus)
   - Si comptee < theorique : mouvement de sortie (moins-value)
5. Les niveaux de stock sont mis a jour immediatement.

## Visualiser les ecarts

1. Dans la session d'inventaire, la colonne **Ecart** affiche la difference.
2. Un ecart **positif** (vert) signifie qu'il y a plus de stock que prevu.
3. Un ecart **negatif** (rouge) signifie qu'il y a moins de stock que prevu.
4. Apres validation, vous pouvez consulter le **rapport d'inventaire** qui recapitule tous les ecarts.
5. Utilisez ce rapport pour analyser les causes des ecarts (vol, erreur de saisie, perte).
