---
sidebar_label: Virement de caisse
sidebar_position: 4
---

# Virement de caisse

Transferez des fonds entre comptes de tresorerie (caisse, banque, mobile money).

## Effectuer un virement

1. Ouvrez **Comptabilite** -> **Virements**.
2. Cliquez **Nouveau virement**.
3. Renseignez les informations :
   - **Compte source** : compte debite (ex : Caisse 571000).
   - **Compte destination** : compte credite (ex : Banque 511000).
   - **Montant** transfere.
   - **Date** du virement.
   - **Motif** (ex : "Depot en banque").
4. Cliquez **Effectuer le virement**.

## Comptes supportes

| Type de compte | Classe | Exemple |
|---|---|---|
| Caisse | 57 | 571000 Caisse principale |
| Banque | 51 | 511000 Banque |
| Mobile money | 58 | 581000 Mobile Money |

## Ecriture automatique

Le virement genere automatiquement une ecriture comptable dans le journal **OD** (Operations Diverses) :

- Debit du compte de **destination** (le compte qui recoit les fonds).
- Credit du compte **source** (le compte qui envoie les fonds).

<DocImage src="/img/guides/comptabilite/virement-caisse.png" alt="Virement entre comptes de tresorerie" />
