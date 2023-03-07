document.addEventListener("DOMContentLoaded", () => {
    console.log(document);
    let nom, prenom, age, ville, pays, table_user, parent_list, title_h2;
    parent_list = document.querySelector("ul");
    title_h2 = document.querySelector("section h2");
    nom = prompt("Votre nom?", "");
    prenom = prompt("Votre prénom?", "");
    age = parseInt(prompt("Votre age", ""));
    ville = prompt("Votre ville", "");
    pays = prompt("Votre pays", "");

    //condition vérification des champs

    if (nom && prenom && age && ville && pays) {
        Swal.fire('Bonne réponse!', 'Cliquez!', 'success');
    } else if (isNaN(age)) {
        Swal.fire({
            icon: 'Error',
            title: 'Oops...',
            text: 'Saisir des chiffres!',
            footer: '<a href="">Why do I have this issue?</a>'
        });
    } else {
        Swal.fire({
            icon: 'Error',
            title: 'Oops...',
            text: 'Saisir les champs!',
            footer: '<a href="">Why do I have this issue?</a>'
        });
    }
    //stocker cela dans un tableau
    /* table_user = []
    console.log(table_user)
    table_user.push(nom, prenom, age, ville, pays)
    console.table(table_user)
      for(let i = 0; i < table_user.length; i++){
        parent_list.innerHTML += `<li>${table_user[i]}</li>`
    } */

    // objet pour affecter les valeur de chaque champs
    const user_network = {
        Nom: nom,
        Prénom: prenom,
        Age: age,
        Ville: ville,
        Pays: pays
    };
    //console.log(user_network)
    for (let key in user_network) {
        let value = user_network[key];
        parent_list.innerHTML += `<li>${key} : ${value}</li>`;
    }

    localStorage.setItem("User", JSON.stringify(user_network)); // ajouter les valeur 
    let storage = localStorage.getItem("User"); // récupérer les valeurs 
    console.table(JSON.parse(storage).Nom);
    const myname = JSON.parse(storage).Nom; // L'analyse de données récupérées
    title_h2.innerText = `Hello ${myname} : voici vos données`;
    // item | object
    //localStorage
});