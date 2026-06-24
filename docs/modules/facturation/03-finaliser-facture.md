---
sidebar_label: Finaliser une facture
sidebar_position: 3
---

# Finaliser une facture

La finalisation est l'etape qui rend la facture definitive et declenche les traitements automatiques.

## Finaliser une facture

1. Ouvrez **Facturation** > **Factures**.
2. Ouvrez la facture en statut **Brouillon**.
3. Verifiez l'ensemble des informations : client, lignes, totaux, entrepot.
4. Cliquez sur le bouton **Finaliser**.

<DocImage src="/img/guides/facturation/facture-finaliser.png" alt="Finalisation d'une facture" />

## Choisir simple ou normalisee

1. Lors de la finalisation, un choix vous est propose si le mode de facturation est parametre en mode mixte :
   - **Simple** : pas de certification fiscale
   - **Normalisee** : certification e-MECeF automatique
2. Si vous etes en mode normalise uniquement, la certification est automatique.
3. Si vous etes en mode simple uniquement, la certification n'est pas disponible.

## Declenchement automatique

La finalisation declenche automatiquement les traitements suivants :

1. **Sortie de stock** : les quantites des articles sont decrementees de l'entrepot selectionne.
2. **Ecriture comptable** : une ecriture est creee dans le journal de vente.
3. **Generation du PDF** : le document PDF est genere avec toutes les informations legales.
4. **Notification** : le client peut etre notifie par email si l'option est activee.

## Validation des stocks disponibles

1. Lors de la finalisation, le systeme verifie les stocks disponibles pour chaque ligne.
2. Si un article n'a pas assez de stock, un message d'erreur bloque la finalisation.
3. Vous pouvez alors ajuster les quantites, changer d'entrepot ou effectuer une entree de stock.
4. Les articles sans suivi de stock (services) ne sont pas verifies.
