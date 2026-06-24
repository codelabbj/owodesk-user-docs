---
sidebar_label: Annuler une vente
sidebar_position: 4
---

# Annuler une vente

Seuls les **gestionnaires** et les **administrateurs** peuvent annuler une vente.

1. Ouvrez **Point de vente** > **Ventes**.
2. Cliquez sur la vente a annuler (statut **Completee**).
3. Cliquez sur **Annuler la vente**.

<DocImage src="/img/guides/pos/annuler-vente.png" alt="Annulation d'une vente" />

## Motif obligatoire

4. Saisissez un **motif d'annulation** (minimum 10 caracteres).
   - Exemple : "Erreur de caisse, remboursement client"
5. Confirmez l'annulation.

## Actions automatiques

L'annulation declenche :

- **Restauration du stock** : les quantites sont remises dans le stock
- **Contre-ecriture comptable** : une ecriture inverse est generee pour annuler la piece comptable initiale
- **Enregistrement d'annulation** : l'evenement est consigne dans le registre d'audit (audit trail) avec l'identite de l'utilisateur, la date, l'heure et le motif

<DocImage src="/img/guides/pos/audit-annulation.png" alt="Registre d'audit des annulations" />
