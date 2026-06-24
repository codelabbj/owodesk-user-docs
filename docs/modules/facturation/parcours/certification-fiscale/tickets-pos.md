# Certifier un ticket de caisse (POS)

Au **point de vente**, la certification e-MECeF produit un **ticket normalisé** imprimable avec QR code — équivalent fiscal d'une vente au comptoir (type **FV**).

## Quand le ticket est-il certifié ?

La certification se déclenche **automatiquement** à l'**encaissement**, si :

1. Le mode entreprise est **Normalisée** ou **Les deux**, **ou** l'option fiscalité POS est activée pour l'organisation
2. La [configuration e-MECeF](/modules/facturation/parcours/certification-fiscale/configuration) est **complète et vérifiée**
3. Pour une machine MCF : le **terminal** du poste est **en ligne**

:::info
Si la certification échoue, la **vente est quand même enregistrée** et le **stock est décrémenté**. L'erreur est affichée sur le ticket ; vous pouvez relancer la normalisation.
:::

## Étapes côté caissier

### 1. Ouvrir la caisse

**POS** → **Sessions de caisse** → ouvrir une session sur l'entrepôt concerné.

<DocImage src="/img/guides/pos/session-ouverture.png" alt="Ouverture de session de caisse" />

Sans session ouverte, l'encaissement est bloqué.

### 2. Passer la vente

**POS** → **Encaissement** :

- Scanner ou ajouter les produits
- Choisir le **mode de paiement** (espèces, mobile money, carte…)
- Cliquer **Encaisser**

<DocImage src="/img/guides/pos/caisse-encaissement.png" alt="Écran d'encaissement POS" />

### 3. Ticket affiché

Une fenêtre **ticket** s'ouvre après paiement.

**Ticket certifié** — vous voyez :

- Bandeau **TICKET NORMALISÉ — MECeF**
- Référence fiscale (NIM)
- Numéro de transaction
- Date/heure de certification
- **QR code** fiscal
- Bouton **Imprimer**

<DocImage src="/img/guides/fiscal/ticket-pos-normalise.png" alt="Ticket POS certifié e-MECeF" />

**Ticket non certifié** — la vente est valide mais :

- Pas de bandeau MECeF
- Message d'**erreur fiscal** (ex. agent hors ligne, machine occupée)
- Bouton pour **relancer la normalisation**

### 4. Réimprimer plus tard

**POS** → **Réimpression** (ou équivalent dans le module) : retrouvez la vente par numéro et réimprimez le ticket avec les données fiscales déjà enregistrées.

---

## Adaptateur MCF vs API DGI

| Adaptateur | Comportement POS |
|------------|------------------|
| **Machine MCF** | Recommandé en magasin : l'agent dialogue avec la caisse physique sur le même PC |
| **API DGI** | Possible si configuré ; la vente est certifiée comme une facture FV via l'API |

En pratique, les **commerces avec terminal physique** utilisent l'adaptateur **Machine MCF** et un agent par poste.

---

## Lien avec la facturation

Si le mode est *Normalisée* ou *Les deux*, OwoDesk peut aussi **créer une facture** liée à la vente POS pour la traçabilité comptable. Le ticket reste le document remis au client au moment de l'achat.

---

## Dépannage ticket POS

| Symptôme | Cause probable | Action |
|----------|----------------|--------|
| Pas de QR sur le ticket | Fiscalité inactive ou échec silencieux | Vérifier mode *Normalisée* / config fiscale |
| *Agent MCF non connecté* | Service agent arrêté | Relancer l'agent sur le PC caisse |
| *Terminal hors ligne* | Token invalide ou réseau | Tester la liaison dans **Fiscal / e-facture** |
| Erreur montant | Total panier ≠ total MCF | Vérifier prix et quantités des lignes |
| Vente OK mais pas normalisée | Échec non bloquant | Ouvrir le ticket → **Relancer la normalisation** |

Retour : [Certification fiscale](/modules/facturation/parcours/certification-fiscale)
