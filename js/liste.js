document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault;
    let title_element, lang_element, title_header, date_footer, section; //global variable

    title_element = document.querySelector("title");
    lang_element = document.querySelector("html");
    title_header = document.querySelector("header h1");
    date_footer = document.querySelector("footer p");
    section = document.querySelector("section");
    console.log(lang_element);

    const list_props = { //objet + propriétés + valeurs
        title_main: "Le langage C",
        lang: "fr",
        footer: new Date().getFullYear()
    };
    //itération
    console.log(Object.values(list_props)); // Object.keys(list_props)
    for (let index in list_props) {
        //index = keys : list_props[index] = velus
        console.table(`${index} : ${list_props[index]}`);
    }

    //ajout des valeur
    title_element.innerText = `${list_props.title_main}`;
    title_header.innerText += ` : ${list_props.title_main}`;
    date_footer.innerText += ` ${list_props.footer}`;
    lang_element.setAttribute("lang", "fr"); //add value attribut
    let printout = lang_element.getAttribute("lang"); // récupérer
    console.log(printout);

    const lang_c = {
        logo: "./asset/logo.png",
        content: `C est un langage de programmation impératif généraliste, de bas niveau. 
        Inventé au début des années 1970 pour réécrire Unix, 
        C est devenu un des langages les plus utilisés, encore de nos jours. Wikipédia
        `,
        auteur: `Conçu Par : Dennis Ritchie`,
        date: `Date de première version : 1972`,
        developer: `Développeur : Dennis Ritchie et Kenneth Thompson, Bell Labs`,
        extention: `Extensions de fichiers : c,.h`,
        paradigme: `Paradigme : ${['Impératif', 'procédural', 'structuré']}`
    };

    for (let index in lang_c) {
        console.log(`${index} : ${lang_c[index]}`);
    }
    //template
    section.innerHTML += `<ul class="list-lang">
                            <li><img src="${lang_c.logo}" alt="logo"></li>
                            <li><p>${lang_c.content}</p></li>
                            <li>Auteur : ${lang_c.auteur}</li>
                            <li>Date : ${lang_c.date}</li>
                            <li>Déveloeppent : ${lang_c.developer}</li>
                            <li>Extention : ${lang_c.extention}</li>
                            <li>Paradigme : ${lang_c.paradigme}</li>
                         </ul>       
                         `;
});