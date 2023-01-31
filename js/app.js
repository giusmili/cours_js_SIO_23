document.addEventListener("DOMContentLoaded", e => {
    // la méthode de chargement du document
    console.log(e.target);
    console.log(document.childNodes[1].children[0].children[4]);
    //console.log(document.childNodes[1].children[1].parentNode)
    //window.alert("Bonjour") //BOM Broswer object
    //age EST UN ENTIER <- 24

    let age, element_title, x, y, content, element_article, dates_footer, new_element, last_article;

    element_title = document.querySelector("header h1"); //title
    const titre = `en ES6`;
    article_parent = document.querySelector("article");
    console.log(article_parent);
    element_article = document.querySelector("article p");
    dates_footer = document.querySelector("footer p time");
    element_title.innerText += ` ${titre}`;

    //créer un nouvel élément
    new_element = document.createElement("p");
    //on ajoute le nouvel élément à l'article
    article_parent.appendChild(new_element).innerHTML = `Suivre le lien : <a href="#">Voir le site</a>`;
    new_element.children[0].style.color = "#ff0000";
    /*
    =
    ==
    ===
    += ajouter valeur
    -=
    +
    % module
     */

    content = `HTML5 est la dernière révision majeure du HTML. Cette version a été finalisée le 28 octobre 2014. HTML5 spécifie deux syntaxes d'un modèle abstrait défini en termes de DOM : HTML5 et XHTML5. Le langage comprend également : une couche application avec de nombreuses API`;
    //on affiche l'article

    element_article.innerText = content;
    age = 30;
    etat = false;

    const version = new Date().getFullYear();
    dates_footer.innerText = version;
    x = 10;
    y = "10";

    console.log(`La veleur est : ${version}`); //affiche la valeur de la variable

    console.log(typeof content); //affiche le type de variable
    x === y ? console.log("vrai") : console.log("faux"); // on compare la valeur et le type
});