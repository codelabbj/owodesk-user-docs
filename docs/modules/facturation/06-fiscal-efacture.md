---
sidebar_label: Fiscal / e-facture
sidebar_position: 7
---

# Fiscal / e-facture

Onglet **Fiscal / e-facture** (`/app/billing/fiscal`). Configuration du mode de facturation et des identifiants pour la certification normalisee (e-MECeF Benin).

## Acceder a la page

Menu lateral **Facturation** > onglet **Fiscal / e-facture**.

---

## Mode de facturation

Liste deroulante (enregistrement automatique a la modification) :

| Mode | Effet |
|------|-------|
| **Facture simple uniquement** | Finalisation sans certification DGI |
| **Facture normalisee uniquement** | Certification obligatoire a chaque finalisation |
| **Les deux** | Choix Simple ou Normalisee au moment de finaliser |

Si le mode est **simple uniquement**, le panneau de configuration fiscale affiche un message informatif : pas de parametres e-MECeF requis.

---

## Configuration fiscale

Visible si le mode est **normalisee** ou **les deux**.

### Adaptateur fiscal

| Adaptateur | Description |
|------------|-------------|
| **Aucun** | Pas de certification (alerte si mode normalise) |
| **e-MECeF (API directe)** | Token, NIM, IFU |
| **e-MECeF via MCF (agent local)** | Terminal MCF, ID operateur, nom operateur |

Le choix de l'adaptateur determine les champs a renseigner.

### Champs e-MECeF (API directe)

| Champ | Description |
|-------|-------------|
| **Token** | Jeton d'API MECeF (mot de passe masque) |
| **NIM** | Numero d'identification du module de facturation |
| **IFU** | Identifiant fiscal du vendeur (pre-rempli depuis les parametres entreprise si disponible) |

### Champs MCF (agent local)

| Champ | Description |
|-------|-------------|
| **Terminal** | Selection d'un terminal MCF enregistre |
| **ID operateur** | Identifiant operateur |
| **Nom operateur** | Nom affiche (defaut : nom de l'entreprise) |

### Gestion des terminaux MCF

Panneau dedie pour l'adaptateur MCF :

- **Creer un terminal** : saisir un nom (ex. Caisse 1), obtenir un **token de jumelage** pour l'agent ;
- **Selectionner** un terminal existant (indicateur en ligne / hors ligne) ;
- **Tester** la connexion d'un terminal.

### Actions

| Bouton | Action |
|--------|--------|
| **Enregistrer** | Sauvegarde l'adaptateur et les identifiants |
| **Verifier la connexion** | Teste la liaison avec l'administration fiscale (actif si configuration complete) |

Un message de succes confirme la verification.

---

## Lien avec les factures

1. Configurez ici le mode et les identifiants.
2. Creez une facture en brouillon ([unientrepot](/modules/facturation/facture-unientrepot) ou [multientrepot](/modules/facturation/facture-multientrepot)).
3. Depuis le [detail](/modules/facturation/factures#detail-dune-facture), cliquez **Finaliser normalisee**.
4. Statuts possibles :
   - **En attente DGI** : certification en cours ;
   - **Normalisee** : QR code et reference MECeF affiches ;
   - **Echec DGI** : erreur + bouton **Reessayer**.

Si la configuration est incomplete au moment de finaliser, une fenetre propose d'ouvrir cette page.

## IFU vendeur

L'IFU doit aussi etre renseigne dans **Parametres** > **Entreprise** (section Fiscal). Il est reutilise automatiquement sur cette page.
