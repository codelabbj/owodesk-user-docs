---
sidebar_label: Plan comptable
sidebar_position: 1
---

# Plan comptable

Le plan comptable suit la structure SYSCOHADA (Systeme Comptable Ouest-Africain) avec les classes 1 a 9.

## Classes SYSCOHADA

| Classe | Intitule |
|---|---|
| Classe 1 | Comptes de capitaux |
| Classe 2 | Comptes d'immobilisations |
| Classe 3 | Comptes de stocks |
| Classe 4 | Comptes de tiers |
| Classe 5 | Comptes de tresorerie |
| Classe 6 | Comptes de charges |
| Classe 7 | Comptes de produits |
| Classe 8 | Comptes des resultats |
| Classe 9 | Comptes de la comptabilite analytique |

## Plan comptable par defaut

A la premiere installation, le plan comptable SYSCOHADA est cree automatiquement via une commande de seed. Vous n'avez rien a faire pour obtenir la structure de base.

## Creer un compte comptable

1. Ouvrez **Comptabilite** -> **Plan comptable**.
2. Cliquez **Nouveau compte**.
3. Saisissez les informations :
   - **Code** du compte (ex : "601100" pour achats de marchandises).
   - **Nom** du compte (ex : "Achats de marchandises").
   - **Classe** (1 a 9).
4. Optionnellement, selectionnez un **compte parent** pour creer une structure hierarchique.
5. Cliquez **Enregistrer**.

## Structure hierarchique

Les comptes peuvent etre organises en arborescence :

- 6 (Charges) -> compte parent
  - 60 (Achats) -> enfant de 6
    - 601 (Achats de marchandises) -> enfant de 60
    - 602 (Achats de matieres premieres) -> enfant de 60

Pour creer cette hierarchie, lors de la creation d'un compte, selectionnez le compte parent approprie.

<DocImage src="/img/guides/comptabilite/plan-comptable.png" alt="Plan comptable SYSCOHADA" />
