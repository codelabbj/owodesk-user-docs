---
sidebar_label: Premiers reglages
sidebar_position: 3
---

# Premiers reglages

Apres avoir configure votre entreprise via l'assistant, effectuez ces reglages complementaires pour utiliser OwoDesk dans les meilleures conditions.

## 1. Verifier les informations legales

1. Allez dans **Administration** > **Parametres entreprise**.
2. Completez les champs juridiques :
   - **Forme juridique** : SARL, SA, EURL, EI, etc. (selon le droit OHADA).
   - **RCCM** : numero au registre du commerce (ex. : BJ-COT-2024-B-1234).
   - **Capital social** : montant du capital en chiffres.
   - **Adresse** : siege social de l'entreprise.
   - **Telephone** : numero professionnel de l'entreprise.
3. Cliquez sur **Enregistrer**.

<DocImage src="/img/guides/premiers-pas/premiers-reglages-infos-legales.png" alt="Informations legales de l'entreprise" />

## 2. Configurer la facturation

1. Dans **Administration** > **Parametres entreprise**, ouvrez l'onglet **Facturation**.
2. Selectionnez le **mode de facturation** :
   - **Simple** : factures sans certification fiscale.
   - **Normalisee** : factures certifiees via e-MECeF (Benin) ou MCF.
   - **Les deux** : vous choisissez au moment de la creation.
3. Configurez les options de **TVA** : taux par defaut, regles de calcul sur les lignes.
4. Ajoutez un **message pied de page** qui apparaitra sur toutes les factures (ex. : "Sauf erreurs et omissions").
5. Telechargez votre **signature** ou **cachet** (image PNG, max 2 Mo).
6. Cliquez sur **Enregistrer**.

<DocImage src="/img/guides/premiers-pas/premiers-reglages-facturation.png" alt="Configuration de la facturation" />

## 3. Souscrire a un abonnement

1. Allez dans **Administration** > **Abonnement et modules**.
2. Consultez les plans disponibles : **Starter**, **Pro**, **Business**.
3. Choisissez le plan adapte a votre activite.
4. Selectionnez le cycle de facturation : mensuel ou annuel.
5. Procedez au paiement par carte bancaire ou Mobile Money (PAL).
6. Une fois le paiement valide, vos modules sont actifs.

<DocImage src="/img/guides/premiers-pas/premiers-reglages-abonnement.png" alt="Souscription a un abonnement" />

## 4. Activer les modules necessaires

1. Dans **Administration** > **Abonnement et modules**, consultez la liste des modules.
2. Activez les modules dont vous avez besoin : CRM, Facturation, Stock, RH, POS, E-commerce, etc.
3. Certains modules sont inclus dans votre plan, d'autres peuvent necessiter un passage au plan superieur.

## 5. Creer un premier entrepot

1. Allez dans **Stock** > **Entrepots**.
2. Cliquez sur **Nouvel entrepot**.
3. Saisissez le **nom** (ex. : "Entrepot principal", "Magasin Cotonou").
4. Renseignez l'**adresse** et le **responsable**.
5. Cliquez sur **Enregistrer**.

## 6. Configurer les paiements PAL (optionnel)

1. Allez dans **Administration** > **Paiements PAL**.
2. Saisissez les cles PAL fournies par votre prestataire :
   - `secret_key`
   - `public_key`
   - `user_id`
3. Cliquez sur **Verifier la configuration** pour tester la connexion.
4. Activez le module PAL pour la facturation, la paie ou le POS selon vos besoins.

<DocImage src="/img/guides/premiers-pas/premiers-reglages-pal.png" alt="Configuration des paiements PAL" />

## 7. Configurer la certification fiscale (Benin)

1. Allez dans **Administration** > **Parametres entreprise** > **Fiscalite**.
2. Selectionnez l'**adaptateur fiscal** :
   - **e-MECeF (DGI)** : certification en ligne via l'API de la Direction Generale des Impots.
   - **MCF (agent local)** : certification via une caisse enregistreuse MCF connectee.
3. Saisissez les identifiants e-MECeF ou configurez l'agent MCF.
4. Cliquez sur **Tester la connexion**.
5. Un QR code fiscal apparaitra sur vos factures certifiees.

## 8. Configurer la paie (si module RH active)

1. Allez dans **Administration** > **Parametres entreprise** > **Paie**.
2. Renseignez le **taux CNSS employeur** et le **taux CNSS employe**.
3. Configurez les **options de bulletin** (rubriques, cotisations).
4. Cliquez sur **Enregistrer**.

## Resume des actions du proprietaire

| Action | Menu | Priorite |
|--------|------|----------|
| Verifier les infos legales | Administration > Parametres entreprise | Haute |
| Configurer la facturation | Administration > Parametres entreprise > Facturation | Haute |
| Souscrire a un abonnement | Administration > Abonnement et modules | Haute |
| Activer les modules | Administration > Abonnement et modules | Haute |
| Creer un entrepot | Stock > Entrepots | Moyenne |
| Configurer PAL | Administration > Paiements PAL | Moyenne |
| Configurer la certification fiscale | Administration > Parametres entreprise > Fiscalite | Selon pays |
| Configurer la paie | Administration > Parametres entreprise > Paie | Si module RH |

## Etapes suivantes

Une fois ces reglages effectues, vous pouvez [inviter vos collaborateurs](/premiers-pas/inviter-collaborateurs) et consulter la documentation du module qui vous interesse.
