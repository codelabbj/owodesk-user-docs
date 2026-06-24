# Types de documents MECeF

Lors de la certification, OwoDesk envoie à e-MECeF un **type de document** qui détermine le traitement fiscal.

## Correspondance OwoDesk → MECeF

| Type dans OwoDesk | Code MECeF | Signification |
|-------------------|------------|---------------|
| **Vente** (`sale`) | **FV** | Facture de vente standard |
| **Avoir** (`credit_note`) | **FA** | Facture d'avoir (annulation / remboursement) |
| **Export** (`export_sale`) | **EV** | Vente à l'export (TVA à 0) |
| **Avoir export** (`export_credit_note`) | **EA** | Avoir sur vente export |

Les **devis** ne sont pas transmis à e-MECeF.

## Vente (FV)

Cas le plus courant : facture client ou ticket POS pour une vente locale.

- Montants positifs
- TVA selon les groupes de taxe des lignes (A, B, C…)
- Stock décrémenté à la finalisation (facture ou POS)

## Avoir (FA)

Pour corriger ou annuler une vente **déjà certifiée**.

Obligations dans OwoDesk :

1. Choisir le type **Avoir vente** à la création de la facture
2. Renseigner la **référence fiscale originale** (ex. `NIM-43` — celle de la facture normalisée d'origine)
3. Saisir les montants en **négatif** ou via le flux avoir prévu
4. Finaliser en **Normalisée**

Sans référence fiscale d'origine, OwoDesk refuse la finalisation d'un avoir.

La machine MCF traite les avoirs avec le code **RT** (retour) et la référence de la facture initiale.

## Export (EV)

Pour les ventes **à l'exportation** :

- TVA remise à **zéro** automatiquement à la finalisation
- Code MECeF **EV**

## Avoir export (EA)

Même logique que l'avoir FA, pour une facture d'export initiale.

---

## Tickets POS

Les ventes au comptoir utilisent le type **vente (FV)** par défaut. Il n'y a pas de type « ticket » séparé dans e-MECeF : le **ticket normalisé** est la preuve imprimée d'une vente FV certifiée via la caisse.

---

## Modes de paiement transmis

Lors de la certification, le mode de paiement est converti pour la DGI / MCF :

| Mode OwoDesk | Code MCF | Libellé courant |
|--------------|----------|-----------------|
| Espèces | E | Cash |
| Mobile money | M | MoMo |
| Carte | C | Carte bancaire |
| Virement | V | Banque |
| Chèque | D | Chèque |
| Crédit | A | À crédit |

Sur le **POS**, le mode choisi à l'encaissement est transmis automatiquement.

Retour : [Certification fiscale](/modules/facturation/parcours/certification-fiscale)
