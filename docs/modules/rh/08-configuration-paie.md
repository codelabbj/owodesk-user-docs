---
sidebar_label: Configuration de la paie
sidebar_position: 8
---

# Configuration de la paie

Parametrez les taux et barèmes applicables pour le calcul automatique de la paie.

1. Ouvrez **RH** > **Configuration paie**.

<DocImage src="/img/guides/rh/config-paie.png" alt="Configuration de la paie" />

## Taux CNSS

La cotisation CNSS se decompose en deux parts :

- **Part salariale** : 3.6% du salaire brut
- **Part patronale** : 6.4% du salaire brut

Le systeme applique ces taux automatiquement lors du calcul des bulletins.

## Barème ITS

L'Impôt sur le Traitement et le Salaire (ITS) est calcule selon un barème progressif :

1. Saisissez les **tranches d'imposition** :
   - 0 a 50 000 FCFA : 0%
   - 50 001 a 100 000 FCFA : taux intermediaire
   - 100 001 a 200 000 FCFA : taux superieur
   - Au-dela : taux maximum
2. Pour chaque tranche, renseignez le **taux** et le **montant cumule**.
3. Le systeme applique le barème automatiquement sur le salaire imposable.

<DocImage src="/img/guides/rh/barème-its.png" alt="Configuration du barème ITS" />

## ORTB (taxe radio)

1. Saisissez le **montant forfaitaire** de la taxe radio (ORTB).
2. Ce montant est deduit mensuellement du salaire de chaque employe.

## Prestations familiales

1. Renseignez le **taux des prestations familiales** (par defaut 9%).
2. Ce taux s'applique sur le salaire brut comme charge patronale.

## Risque professionnel

1. Renseignez le **taux d'assurance risque professionnel** (par defaut 1%).
2. Ce taux s'applique sur le salaire brut comme charge patronale.

## SMIG et autres taux patronaux

1. Saisissez le **SMIG** (Salaire Minimum Interprofessionnel Garanti) en vigueur.
2. Configurez les autres taux et montants specifiques a votre entreprise.

<DocImage src="/img/guides/rh/taux-patronaux.png" alt="Configuration des taux patronaux" />
