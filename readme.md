# Starter Plugin Javascript
Ce paquet permet de démarrer rapidement un plugin javascript utilisable en module ou dans le navigateur (Génération ESM / UMD ). Basé sur rollup.js

## Pour bien débuter
1. Cloner le repository
2. Exécuter la commande `npm install --dev`
3. Mettre à jour le fichier package.json pour qu'il correspondent à votre plugin.
4. Mettre à jour le fichier build.config.json pour qu'il corresponde à votre plugin.
5. Utiliser les fichiers entry/* et src/index.js pour démarrer votre plugin.

## Configurations
Les configurations sont définis dans le fichier `build.config.json` <br />

| Configuration | Commentaire |
| ------------- |:-------------:|
| app : name                    | Nom de l'application (MonPluginJavascript) |
| app : input : complete        | Fichier d'entrée de l'application (complet) |
| app : input : modular         | Fichier d'entrée de l'application (module) |
| app : output : directory      | Dossier d'export des fichiers compilés |
| app : output : filename       | Nom des fichiers générés de l'application (mon-plugin-javascript) |
| licence                    | Lience de l'application (Affiché dans les commentaires) |

## Les commandes 
- `npm run build:esm` : Build les fichiers pour les import 
- `npm run build:umd` : Build les fichiers pour en umd (rend le plugin compatible pour navigateur)
- `npm run build:js` : Exécute les commandes `build:esm` et `build:umd`

## Informations complémentaires
Vous pouvez mettre à jour le fichier `build/banner.js` pour modifier les commentaires affiché dans les fichiers générés. 