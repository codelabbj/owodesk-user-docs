---
sidebar_label: Journaux comptables
sidebar_position: 2
---

# Journaux comptables

Les journaux comptables classent les ecritures par type d'operation. Chaque module envoie automatiquement ses ecritures dans le journal correspondant.

## Journaux par defaut

| Code | Journal | Utilisation |
|---|---|---|
| VTE | Journal des ventes | Factures clients |
| ACH | Journal des achats | Commandes fournisseur |
| BQ | Journal de banque | Operations bancaires |
| CA | Journal de caisse | Operations en especes |
| POS | Journal du point de vente | Ventes POS |
| MOB | Journal mobile money | Operations mobile money |
| OD | Journal des operations diverses | Virements, ecritures manuelles |

## Creer un nouveau journal

1. Ouvrez **Comptabilite** -> **Journaux**.
2. Cliquez **Nouveau journal**.
3. Saisissez les informations :
   - **Code** du journal (ex : "INV").
   - **Nom** du journal (ex : "Journal des investissements").
4. Cliquez **Enregistrer**.

## Utilisation par module

Quand un module cree une ecriture comptable automatique, elle est dirigee vers le journal correspondant :
- Une vente au POS genere une ecriture dans le journal **POS**.
- Une facture client genere une ecriture dans le journal **VTE**.
- Un paiement fournisseur genere une ecriture dans le journal **ACH**.

<DocImage src="/img/guides/comptabilite/journaux-comptables.png" alt="Liste des journaux comptables" />
