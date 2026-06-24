---
sidebar_label: Paiements PAL
sidebar_position: 4
---

# Paiements PAL

PAL est la solution de paiement Mobile Money integree a OwoDesk. Elle permet d'effectuer des encaissements et des paiements directement depuis l'application.

## Acces

**Administration** > **Paiements PAL**

## Cas d'usage

- **Paiement de l'abonnement OwoDesk** : reglement mensuel ou annuel de votre forfait.
- **Encaissement des factures** : reception des paiements clients par Mobile Money.
- **Paiement des salaires** : virement des salaires depuis le module RH > Paie.
- **Paiement des fournisseurs** : reglement des commandes fournisseurs.
- **Encaissements au POS** : paiement des clients au point de vente.

## Configuration des cles PAL

Pour utiliser PAL, vous devez configurer les cles d'API fournies par votre prestataire PAL.

1. Allez dans **Administration** > **Paiements PAL**.
2. Dans la section **Configuration**, saisissez les cles suivantes :
   - **secret_key** : cle secrete fournie par PAL (ne pas partager).
   - **public_key** : cle publique fournie par PAL.
   - **user_id** : identifiant utilisateur PAL.
3. Cliquez sur **Enregistrer**.

<DocImage src="/img/guides/administration/paiements-pal-configuration.png" alt="Configuration des cles PAL" />

## Verifier la configuration

1. Apres avoir saisi les cles, cliquez sur **Verifier la configuration**.
2. PAL teste la connexion avec les identifiants fournis.
3. En cas de succes, un message vert s'affiche : "Configuration PAL validee".
4. En cas d'echec, verifiez les points suivants :
   - Les cles sont correctement copiees (sans espaces ni caracteres supplementaires).
   - Le compte PAL est actif et approvisionne.
   - Les cles n'ont pas expire.
   - Contactez votre prestataire PAL si le probleme persiste.

## Activer PAL par module

1. Dans la page **Paiements PAL**, section **Modules actifs**.
2. Pour chaque module, activez ou desactivez l'utilisation de PAL :
   - **Facturation** : encaissement des factures par Mobile Money.
   - **Paie** : paiement des salaires par Mobile Money.
   - **POS** : encaissement au point de vente par Mobile Money.
   - **Abonnement** : paiement de l'abonnement OwoDesk.
3. Cliquez sur **Enregistrer** pour chaque module.

## Consulter le solde du compte PAL

1. Dans la page **Paiements PAL**, section **Solde**.
2. Le solde actuel de votre compte PAL s'affiche.
3. Vous pouvez voir l'**historique des transactions** (encaissements et decaissements).
4. Cliquez sur **Approvisionner** si vous devez ajouter des fonds sur votre compte PAL.

<DocImage src="/img/guides/administration/paiements-pal-solde.png" alt="Solde du compte PAL" />

## Bon a savoir

- Les paiements PAL necessitent une connexion Internet active.
- Les frais de transaction PAL sont appliques conformement aux conditions de votre prestataire.
- En cas d'echec de transaction, le client n'est pas debite et la transaction apparait en echec dans l'historique.
- Conservez vos cles PAL en lieu sur. Ne les communiquez jamais par email ou messagerie.
