document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault;

    const main_title = document.querySelector("title");
    const header_h = document.querySelector("h1");
    let el_primary = document.getElementsByClassName("primary")[0];
    let footer = document.querySelector("footer p");
    let inner_title = `Cours js and Es 6`;

    main_title.innerText = inner_title;
    header_h.innerText = inner_title;
    let content = `Is a long established fact that a reader will
     be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
    distribution of letters, as opposed `;

    console.log(el_primary[0]);

    /*
    cover : {
        image : string,
        titre: string
        contenu : string
    }
     */

    const Cover = {
        image: "./asset/cover.jpg",
        title: "Html 5",
        contents: content
    };
    console.log(Object.keys(Cover));

    // créer la template
    /* 
    <img src="" alt="">
    <h2></h2>
    <p></p> 
    */

    const card_info = { //exemple 1
        cover: `<img src="${Cover.image}" alt="cover">`,
        new_title: `<h2>${Cover.title}</h2>`,
        new_content: `<p>${Cover.contents}</p> `,
        new_date: new Date().getFullYear() //2023


        //exemple 2
    };const inner_contents = `<img src="${Cover.image}" alt="cover">
                            <h2>${Cover.title}</h2>
                            <p>${Cover.contents}</p>`;

    el_primary.innerHTML += inner_contents;
    footer.innerText += ` ${card_info.new_date}`;
});