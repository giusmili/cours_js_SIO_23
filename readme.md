# Cours Javascript - 2023
## Installation de Babel
```cmd
vérifier la version npm
puis npm init
npm install --save-dev babel-cli babel-preset-env

Ajouter dans le fichier jSon la ligne de code qui suit : "build": "babel --no-babelrc src -w -d js --preset=env"
Cibler le répertoire "SRC" et commande :npm run build

Nota bene : pour installer le CLI faire d'abord npm init pour le package.json
```