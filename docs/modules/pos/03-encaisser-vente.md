---
sidebar_label: Encaisser une vente
sidebar_position: 3
---

# Encaisser une vente

Finalisez la vente et encaissez le paiement.

1. Ouvrez **Point de vente** > **Ventes**.
2. Cliquez sur la vente en statut **Brouillon**.
3. Verifiez les articles et les montants.
4. Cliquez sur **Completer** ou **Encaisser**.

<DocImage src="/img/guides/pos/encaissement.png" alt="Ecran d'encaissement" />

## Choisir le mode de paiement

5. Selectionnez le **mode de paiement** :
   - **Especes** : saisissez le montant recu, le systeme calcule la monnaie a rendre
   - **Carte bancaire** : enregistrez la transaction carte
   - **Mobile money** : initiez la transaction mobile
6. Confirmez l'encaissement.

## Actions automatiques

Une fois la vente encaissee, le systeme execute automatiquement :

- **Deduction du stock** : les quantites vendues sont retirees du stock
- **Piece comptable** : une ecriture comptable est generee (debit caisse / credit vente)
- **Facture** : la facture est generee si la fonction est activee dans les parametres
- **Ticket fiscal** : le ticket est imprime si une imprimante fiscale est configuree

<DocImage src="/img/guides/pos/ticket-vente.png" alt="Ticket de vente" />
