# Site pour le domaine de Beaune

## Mise en place

- Installer [Bun](https://bun.sh/)
- Installer les dépendences (`bun install`)
- Lancer le serveur de développement (`bun run dev`)
- Se connecter à [`localhost:3000`](http://localhost:3000)

## Fonctionnement

Le contenu est situé dans le dossier [`content/`](/content/) :

- [`content/presentation.md`](/content/presentation.md) contrôle le laius de présentation.
- [`content/articles`](/content/articles/) contient les nouvelles présentées en page d'accueil.

Les modifications dans ce dossier se reflètent en temps réel sur le serveur de déploiement.
Consultez la [documentation concernant les nouvelles](/content/articles/.instructions.md) pour plus d'information.

## Déploiement

Le site est automatiquement déployé dès qu'un nouveau _commit_ est poussé sur master.
Les changements apparaissent au bout d'une minute environ.

## Pour en savoir plus

- [Nuxt](https://nuxt.com), le framework utilisé pour le site
- [Nuxt Content](https://content.nuxt.com), qui transforme le contenu markdown
- Le [_workflow_ Github Actions](/.github/workflows/deploy.yml) qui réalise le déploiement du site
