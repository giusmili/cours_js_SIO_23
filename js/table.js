/* 
tab_nombre EST UN TABLEAU D'ENTIER[] //vide
tab_nombre EST UN TABLEAU D'ENTIER[1,2,3] 
*/
document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    //initialisation d'un tableau => array
    el_main = document.querySelector("section");
    const tables = ["HTML", true, 2023];
    tables.push("CSS"); //ajouter un élément à la fin
    tables.pop(); // supprimer le dernier élément
    tables.shift(); //supprimer le 1er élément
    tables.unshift("html", "css"); // ajouter une série d'élément
    console.log(tables);
    let developer = ["Rasmus", "Heich", "Berners lee"];
    let big_table = ["java", ...developer, ...tables]; //spread operator
    //lenght compter les éléments d'un tableau, index des éléments
    console.log(big_table);
    //destructuring table
    let [a, b, c] = developer;
    console.log(c);
    tables.includes("xml") ? console.log("ok") : console.log("perdu");

    //objet
    const pictures = {
        //propriété d'objet clé et valeur
        first_name: "Jack Nicholson",
        image: "https://media.tenor.com/SohzwfaC-doAAAAd/jack-nicholson-nods.gif",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, labore!"
        /* for(let index in pictures){
            console.log(index+" "+pictures[index]+"\n")
        } */

    };let print_out = Object.values(pictures); //Object.keys(pictures)
    console.log(print_out);
    const objet_film = `<section>
                    <h2>${pictures.first_name}</h2>
                    <img src="${pictures.image}" alt="film Nicholson">
                    <p>${pictures.content}</p>
                    </section>
                    `;
    el_main.innerHTML += objet_film;

    //les itérations for, while, forEach, data, do while
    let i = 0;
    /* for(i = 0; i <= 10; i++){
        console.log(`passage de ${i}\n`)
    } 
    while( i <= 10){
         
        console.log(`passage de ${i}\n`)
        ++i
    }
     do{
        i = i + 1
        console.log(i)
    }while( i < 10);
    Pour le tableau
    for(i = 0; i < big_table.length; i++){
    console.log(i+" "+big_table[i]+"\n")
    for(i in big_table){
    let value = big_table[i]
    console.log(i+" "+value+"\n")
    }
    }
    */
});