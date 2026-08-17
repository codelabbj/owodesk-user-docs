---
sidebar_label: Fiscal / e-facture
sidebar_position: 8
---

# Fiscal / e-facture

La configuration fiscale se fait dans **Paramètres → Facturation** (`/app/settings?tab=billing`).

:::info Ancien onglet
L’ancien onglet **Fiscal / e-facture** du module Facturation (`/app/billing/fiscal`) **redirige** vers ces paramètres. Ce n’est plus un écran séparé dans le module.
:::

## Accéder à la page

1. Menu **Paramètres** (ou engrenage) ;
2. Onglet / section **Facturation**.

Vous y trouvez : mode de facturation, option TVA sur les lignes, pied de page / branding, et le panneau **Configuration e-MECeF / DGI**.

---

## Mode de facturation

| Mode | Effet |
|------|-------|
| **Facture simple uniquement** | Finalisation sans certification DGI |
| **Facture normalisée uniquement** | Certification obligatoire |
| **Les deux** | Choix Simple ou Normalisée à la finalisation |

En mode **simple uniquement**, aucune config e-MECeF n’est requise.

---

## Configuration e-MECeF / DGI

Visible si le mode est **normalisée** ou **les deux**.

### Adaptateur

| Adaptateur | Description |
|------------|-------------|
| **Aucun** | Pas de certification |
| **e-MECeF — DGI Bénin** | API directe (token, NIM, IFU) |
| **e-MECeF — Machine MCF** | Agent local / terminal MCF |

### Actions

| Bouton | Action |
|--------|--------|
| **Enregistrer la configuration** | Sauvegarde adaptateur et identifiants |
| **Tester la connexion e-MECeF** | Vérifie que le serveur / l’agent répond |

Pour l’API DGI : **Token API DGI (e-MECeF)**, **NIM**, **IFU** (souvent repris des paramètres entreprise).

Pour la machine MCF : sélection / création de **terminal**, opérateur, jumelage agent.

---

## Lien avec les factures

1. Configurez ici mode + adaptateur ;
2. Créez un brouillon ([unientrepôt](/modules/facturation/facture-unientrepot), [multi](/modules/facturation/facture-multientrepot) ou [service](/modules/facturation/facture-service)) ;
3. Sur le [détail](/modules/facturation/factures#detail-dune-facture), finalisez en **Normalisée** ;
4. Statuts : **En attente DGI** → **Normalisée** (QR, réf. MECeF) ou **Échec DGI** + **Réessayer la certification**.

Si la config est incomplete, l’app propose d’ouvrir **Paramètres → Facturation**.

## IFU vendeur

Renseignez aussi l’IFU dans **Paramètres → Entreprise** (section fiscale). Il est réutilisé pour e-MECeF.
