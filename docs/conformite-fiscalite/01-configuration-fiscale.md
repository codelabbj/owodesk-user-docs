---
sidebar_label: Configuration fiscale
sidebar_position: 1
---

# Configuration fiscale

La configuration fiscale permet a OwoDesk de se conformer aux exigences de l'administration fiscale de votre pays. Selon votre pays d'implantation, vous pouvez utiliser l'adaptateur e-MECeF (Benin) ou un terminal MCF (caisse enregistreuse).

## Acces

**Administration** > **Parametres entreprise** > **Fiscalite**

## Choix de l'adaptateur fiscal

1. Allez dans **Administration** > **Parametres entreprise**.
2. Ouvrez l'onglet **Fiscalite**.
3. Dans la section **Adaptateur fiscal**, choisissez l'option adaptee a votre situation :
   - **Aucun** : pas de certification fiscale (factures simples uniquement).
   - **e-MECeF (DGI)** : certification en ligne via l'API de la Direction Generale des Impots du Benin.
   - **MCF (agent local)** : certification via une caisse enregistreuse MCF connectee a votre poste de travail.

<DocImage src="/img/guides/conformite-fiscalite/configuration-fiscale-adaptateur.png" alt="Choix de l'adaptateur fiscal" />

## Configurer e-MECeF (Benin)

1. Selectionnez **e-MECeF (DGI)** comme adaptateur fiscal.
2. Renseignez les identifiants fournis par la DGI :
   - **IFU** : Identifiant Fiscal Unique de votre entreprise.
   - **NIM** : Numero d'Identification Mecanographique du systeme de facturation.
   - **Code produit MECeF** : code attribue a votre logiciel par la DGI.
   - **Token d'authentification** : jeton d'acces a l'API e-MECeF.
3. Cliquez sur **Tester la connexion** pour verifier que les identifiants sont corrects.
4. Si le test est reussi, un message de confirmation s'affiche. Sinon, verifiez les identifiants saisis.

<DocImage src="/img/guides/conformite-fiscalite/configuration-fiscale-emeccef.png" alt="Configuration e-MECeF" />

## Configurer l'agent MCF (caisse enregistreuse)

1. Selectionnez **MCF (agent local)** comme adaptateur fiscal.
2. Connectez le terminal MCF a votre ordinateur via le port USB ou Bluetooth.
3. Dans OwoDesk, renseignez les parametres de connexion :
   - **Port de connexion** : port serie ou numerique utilise par le terminal.
   - **Vitesse de transmission** : parametre de communication avec le terminal (ex. : 9600 bauds).
4. Cliquez sur **Detecter le terminal** pour que OwoDesk recherche automatiquement l'agent MCF.
5. Si la detection reussit, le terminal apparait comme connecte.
6. Cliquez sur **Tester la connexion** pour verifier le fonctionnement.

## Verifier la connexion avec l'administration fiscale

1. Apres configuration, cliquez sur **Tester la connexion** dans la section **Statut de la connexion**.
2. Les tests suivants sont effectues :
   - **Authentification** : verification des identifiants aupres du serveur fiscal.
   - **Communication** : test d'echange de donnees avec l'API ou le terminal.
   - **Certification** : envoi d'un document test pour verifier le processus de certification.
3. Si tous les tests sont passes, l'etat **Connecte** s'affiche.
4. En cas d'erreur, le message d'erreur precise la nature du probleme (identifiants incorrects, serveur indisponible, terminal deconnecte).

## Obtenir un QR code fiscal sur les documents

1. Une fois la configuration fiscale terminee et validee, les documents certifies comportent automatiquement :
   - Un **QR code fiscal** imprime sur la facture ou le ticket.
   - Un **numero de certification** unique attribue par l'administration fiscale.
2. Le QR code permet a vos clients de verifier l'authenticite du document aupres de l'administration fiscale.
3. Chaque document certifie est horodate et infalsifiable.

<DocImage src="/img/guides/conformite-fiscalite/configuration-fiscale-qrcode.png" alt="QR code fiscal sur une facture" />

## Desactiver la certification fiscale

1. Allez dans **Administration** > **Parametres entreprise** > **Fiscalite**.
2. Selectionnez **Aucun** comme adaptateur fiscal.
3. Cliquez sur **Enregistrer**.
4. Les nouvelles factures seront emises en mode simple, sans certification fiscale.
5. Les factures deja certifiees restent valides et conservees dans l'historique.

## Bon a savoir

- La certification fiscale est obligatoire pour les entreprises assujetties a la TVA dans les pays qui ont adopte la facturation normalisee (Benin, Cote d'Ivoire, Senegal).
- Une facture certifiee ne peut pas etre modifiee. Pour la corriger, vous devez emettre une facture d'avoir ou de credit.
- Conservez precieusement vos identifiants e-MECeF. En cas de perte, contactez la Direction Generale des Impots de votre pays.
