---
sidebar_label: Mode hors ligne
sidebar_position: 7
---

# Mode hors ligne

OwoDesk peut fonctionner avec une connexion Internet limitee ou coupee, grace a l'**application de bureau** et au systeme de cache integre.

## Principe

1. L'application de bureau conserve en local les donnees recentes que vous avez consultees.
2. Lorsque la connexion Internet est perdue, OwoDesk bascule automatiquement en **mode hors ligne**.
3. Un bandeau d'information apparat en haut de l'ecran pour vous indiquer le mode degrade.
4. Les donnees deja chargees restent accessibles en lecture.
5. Les actions de creation ou de modification sont mises en file d'attente locale.

<DocImage src="/img/guides/premiers-pas/mode-hors-ligne.png" alt="Bandeau d'information mode hors ligne" />

## Fonctionnalites disponibles hors ligne

- Consultation des **contacts** et **entreprises** deja charges.
- Consultation des **produits** et **niveaux de stock** en cache.
- Visualisation des **factures** et **documents** deja ouverts.
- Navigation dans les menus et parametrages deja charges.

## Fonctionnalites non disponibles hors ligne

- Envoi de **factures certifiees** (e-MECeF, MCF).
- **Paiements Mobile Money** (PAL).
- Synchronisation en temps reel avec les autres collaborateurs.
- **Assistant Owo** (IA).
- Envoi d'emails et de notifications.
- Mise a jour des donnees partagees.

## Synchronisation a la reconnexion

1. Lorsque la connexion Internet est retablie, la synchronisation se lance automatiquement.
2. Les donnees creees ou modifiees hors ligne sont envoyees vers le serveur.
3. Les donnees mises a jour par d'autres collaborateurs sont telechargees.
4. La barre de progression dans le coin superieur droit indique l'etat de la synchronisation.
5. Une fois la synchronisation terminee, le bandeau de mode hors ligne disparait.

## Bon a savoir

- Le mode hors ligne necessite l'**application de bureau**. La version navigateur web ne dispose pas du cache local necessaire.
- La taille du cache est limitee. Les donnees les plus anciennes sont automatiquement purgees pour liberer de l'espace.
- En cas de conflit entre une modification hors ligne et une modification serveur, la version la plus recente est conservee.
