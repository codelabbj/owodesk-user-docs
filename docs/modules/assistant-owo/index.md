---
sidebar_position: 1
---

# Assistant Owo

**Owo** est l’assistant IA intégré à OwoDesk. Dans l’application connectée, il répond en langage courant en s’appuyant sur le **contexte de votre organisation**.

## Comment l’ouvrir

| Surface | Accès |
|---------|--------|
| **Panneau flottant** (principal) | Bouton robot en bas à droite (tooltip / aria **Owo**) |
| **Page dédiée** | `/app/assistant` (pas dans le menu latéral) |

Il n’y a **pas** d’entrée « Assistant » dans le menu latéral.

## Ce qu’il sait faire

- Répondre à des questions sur l’usage de l’app et vos processus ;
- S’appuyer sur les données de l’organisation (côté serveur) ;
- Garder un **historique** de discussions (plusieurs fils) ;
- Questions de suivi dans le même fil.

## Ce qu’il ne fait pas (UI actuelle)

- Pas de réponse affichée **lettre par lettre** dans l’app (message **L'assistant réfléchit**, puis réponse complète) ;
- Pas de liens cliquables garantis vers les écrans dans les bulles ;
- Pas de compteur de crédits dans le chat ;
- Pas de widget à installer sur **votre** site client.

## Crédits

Les requêtes IA consomment des crédits (canal **IA**). Consultez **Abonnement → Crédits** : le chat n’affiche pas le solde.

## Hors ligne

L’assistant nécessite une connexion (WebSocket + API). Voir aussi [Mode hors ligne](/premiers-pas/mode-hors-ligne).

## Sur le site public OwoDesk

Un widget **Demander à Owo** existe sur la **landing** OwoDesk (questions produit / tarifs, limite de session). Ce n’est pas le même chat que l’app connectée. Détails dans [Poser une question](/modules/assistant-owo/poser-une-question).
