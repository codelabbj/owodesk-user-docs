# Configurer e-MECeF dans OwoDesk

Toute certification passe par la page **Facturation** → **Fiscal / e-facture**.

## Étape 1 — Mode de facturation

| Mode | Effet |
|------|--------|
| **Facture simple uniquement** | Pas de certification e-MECeF |
| **Facture normalisée uniquement** | Toutes les finalisations passent par e-MECeF |
| **Les deux** | Vous choisissez *Simple* ou *Normalisée* à chaque facture |

Ce réglage s'applique aussi aux **tickets POS** : en mode *Normalisée* ou *Les deux*, les ventes caisse peuvent être télécertifiées automatiquement.

## Étape 2 — Choisir l'adaptateur

### Option A — e-MECeF DGI Bénin (API)

Pour les entreprises qui certifient via le **portail / API DGI** sans machine physique sur chaque poste.

Champs à renseigner :

| Champ | Description |
|-------|-------------|
| **Token API DGI** | Clé fournie par la DGI (secret — à ressaisir si vous modifiez) |
| **NIM** | Numéro d'identification mécanographique de votre SFE |
| **IFU** | Identifiant fiscal du vendeur (souvent repris depuis **Paramètres** → **Entreprise**) |

Puis : **Enregistrer** → **Tester la connexion e-MECeF**.

<DocImage src="/img/guides/fiscal/config-mecef-api.png" alt="Configuration e-MECeF — API DGI Bénin" />

### Option B — e-MECeF Machine MCF (agent local)

Pour les commerces avec une **machine de certification fiscale (MCF)** branchée en USB/série sur le PC caisse.

1. **Créer un terminal** dans la section *Terminaux MCF* (ex. « Caisse 1 »)
2. **Copier le token de pairing** (affiché une seule fois) dans la configuration de l'agent sur le poste caisse
3. Démarrer l'**agent MCF** sur le PC connecté à la machine
4. Vérifier que le statut passe à **En ligne**
5. Renseigner :
   - **Terminal MCF** actif
   - **ID opérateur / caissier** (ex. `1`)
   - **Nom opérateur** (nom du caissier ou de l'entreprise)

Puis : **Enregistrer** → **Tester la liaison** sur le terminal.

<DocImage src="/img/guides/fiscal/config-mecef-mcf.png" alt="Configuration e-MECeF — Machine MCF et terminaux" />

:::tip
Un terminal par poste de caisse physique. Si plusieurs caisses, créez un terminal par machine MCF.
:::

## Étape 3 — Vérifier l'IFU entreprise

**Paramètres** → **Entreprise** → champ **IFU** (ou identifiant fiscal Bénin).

Il doit correspondre à celui enregistré auprès de la DGI et à celui utilisé dans l'adaptateur fiscal.

## Étape 4 — Test réussi

Le bandeau de statut doit indiquer que l'adaptateur est **configuré et vérifié**.

Ensuite :

- [Certifier une facture](/modules/facturation/parcours/certification-fiscale/factures)
- [Certifier un ticket POS](/modules/facturation/parcours/certification-fiscale/tickets-pos)

## Dépannage rapide

| Problème | Piste |
|----------|--------|
| *Fiscal non configuré* à la finalisation | Adaptateur non enregistré ou non vérifié |
| *Agent MCF non connecté* | Agent arrêté, mauvais token, ou machine éteinte |
| *Terminal MCF introuvable* | Sélectionnez le bon terminal dans les paramètres fiscaux |
| *Écart sous-total MCF* | Montants ERP ≠ total calculé par la machine — vérifiez lignes et TVA |

Retour : [Certification fiscale — vue d'ensemble](/modules/facturation/parcours/certification-fiscale)
