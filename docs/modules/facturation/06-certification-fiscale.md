---
sidebar_label: Certification fiscale e-MECeF
sidebar_position: 6
---

# Certification fiscale e-MECeF

La certification e-MECeF permet de rendre vos factures conformes a la reglementation fiscale beninoise.

## Configurer la certification e-MECeF

1. Ouvrez **Facturation** > **Fiscal / e-facture**.
2. Choisissez le **mode de facturation** :
   - **Facture simple uniquement** : pas de certification
   - **Facture normalisee uniquement** : certification obligatoire sur toutes les factures
   - **Les deux** : vous choisissez a chaque finalisation
3. Choisissez l'**adaptateur** :
   - **API DGI Benin** : renseignez token API, NIM et IFU, puis testez la connexion
   - **Machine MCF** : creez un terminal, copiez le token dans l'agent local et testez la liaison
4. Verifiez que l'**IFU** dans **Parametres** > **Entreprise** est identique a celui de la DGI.
5. Confirmez que le test est reussi (bandeau vert).

<DocImage src="/img/guides/facturation/config-mecef.png" alt="Configuration e-MECeF" />

## Finaliser une facture normalisee

1. Creez une facture en brouillon avec le type **Normalisee** ou le type de document **Vente**.
2. Verifiez le client, les lignes et les totaux.
3. Cliquez sur **Finaliser**.
4. Le systeme appelle automatiquement l'API e-MECeF.
5. En cas de succes, le statut passe a **Normalisee**.

## Statuts de certification

- **Brouillon** : facture non finalisee
- **Finalisee** : facture simple sans certification
- **Normalisee** : certifiee avec succes aupres de la DGI
- **Echec certification** : la certification a echoue (message d'erreur disponible)
- **En attente** : certification en cours de traitement

## QR code et signature fiscale sur le PDF

1. Apres certification, le PDF genere contient :
   - Un **QR code** lisible par l'application de controle fiscal
   - La **signature electronique** de la DGI
   - La **reference fiscale** unique attribuee par le systeme
2. Le QR code permet de verifier l'authenticite de la facture.
3. Telechargez le PDF depuis la fiche facture.

## Avoirs avec reference fiscale d'origine

1. Pour emettre un avoir (type de document **Avoir**), creez une nouvelle facture.
2. Dans le champ **Reference fiscale d'origine**, saisissez la reference fiscale de la facture initiale.
3. Cette reference se trouve sur le PDF normalise de la facture d'origine.
4. Finalisez en mode **Normalisee**.
5. L'avoir est certifie avec un lien vers la facture originale.
6. Sans reference d'origine, la finalisation est refusee.
