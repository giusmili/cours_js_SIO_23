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
> Afficher la page : [index](https://giusmili.github.io/cours_js_SIO_23/)

## Exemple de création d'Objet en JS
```js

// Your code here!
const Personne = ({
    //Your constructor
    constructor(nom){
        this.nom = nom;
        
    },
     print(){ //getter
            return `${this.nom}`
    }
})
//output
let user = Object.create(Personne)
user.nom = "Gius"
console.log(user.nom)

/* D'autres façons */

let User = function(nom){
    this.nom = nom;
}

const new_user = new User("Marc")
console.log(new_user.nom)

/* sans constructeur */

const Message = ({
    login :"barry",
    pwd : "123!full",
    output_f(){
        return `${this.login} : ${this.pwd}`
    }
})

let user_dial = Message.output_f()
console.log(user_dial)



```
## Particularité d'une fonction anonyme

```js
(()=>{
    // début de la fonction

    const User = ({
        login :"misteryman",
        psw : "xxxxx",
        out_put(){
            return `Login ${this.login} : MDP ${this.psw}`
        }
        
    })
    
    let test_out_put  =  User.out_put()
    let new_user = Object.create(User)
    new_user.login = "Damien"
    new_user.psw = "007"
    console.log(test_out_put)
    console.log(new_user.out_put())
   
   //fin de la fonction
})()

```
Toutes les instructions de la fonction ne seront pas visibles à l'extérieur d'elle même

## Cas pratique : calculer le prix de chaque produit HT et TTC
```js
    let prod_1 = 20
    let prod_2 = 10
    
```





