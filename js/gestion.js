document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault;
    // console.dir(e.target)
    const parent = document.querySelector("section.primary");
    console.log(parent);
    const contents = `Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has 
    a more-or-less normal distribution of letters, as opposed `;
    //template => Objet js
    let elements = document.createElement("ul");
    let addParent = parent.appendChild(elements);

    let title = document.querySelector("header h1");

    //méthode prompt() => window
    // prompt() default string | add parseInt ou parseFloat
    /*  const dialog = parseInt(prompt("Ajoutez un chiffre",""))
     console.log(typeof dialog)
     if(dialog){
         Swal.fire(
             'Bonne réponse!',
             'Cliquez!',
             'success'
         )
         title.innerText = dialog
     }   
     else{
         Swal.fire({
             icon: 'Error',
             title: 'Oops...',
             text: 'Saisir des chiffre!',
             footer: '<a href="">Why do I have this issue?</a>'
           })
         //location.reload()
     }
     
     Model => BDD
     Vue => html/css
     Controller => js
       */

    //objet js
    const Cover = {
        // image : '<img src="./asset/cover.jpg" alt="logo">',
        image: "./asset/cover.jpg",
        title: "HTML",
        content: contents
        /* dialog : window.prompt("Votre nom svp","") */
    };
    console.log(Object.values(Cover));
    console.log(Cover.image);

    for (index in Cover) {
        //condition ternaire
        let value = Cover[index];
        index == "image" ? addParent.innerHTML += `<li><img src="${value}" alt="logo"></li>` : addParent.innerHTML += `<li>${value}</li>`;
    }
});