const endroits = [
    {
        id: 1,
        titre: "Seychelles",
        contenu: "Îles paradisiaques parfaites pour glander, ne rien faire ou encore procrastiner.",
        image: "media/241210-praslin-seychelles.jpg",
        alt: "île plage cocotier"
    },
    {
        id: 2,
        titre: "Baie de Ha Long",
        contenu: "Paysages à perte de vue à vous déboîter la mâchoire.",
        image: "media/viet-nam.jpg",
        alt: "bateaux sur la baie de Ha Long"
    }
];

function creerBloc(objetArticles){
    const divBloc = document.createElement("div");
    divBloc.setAttribute("class", "bloc");

    const img = document.createElement("img");
    img.setAttribute("src", objetArticles.image);
    img.setAttribute("alt", objetArticles.alt);
    img.setAttribute("class", "photo");

    divBloc.appendChild(img);
    
    const divDescrip = document.createElement("div");
    divDescrip.setAttribute("class", "descrip");

    divBloc.appendChild(divDescrip);

    const h2 = document.createElement("h2");
    h2.textContent = objetArticles.titre;

    divDescrip.appendChild(h2);

    const parag = document.createElement("p");
    parag.textContent = objetArticles.contenu;
    divDescrip.appendChild(parag);

    return divBloc;
}

const feed = document.querySelector("#feed-container");
feed.innerHTML = "";

for (let i=0; i<endroits.length; i++) {
    const bloc = creerBloc(endroits[i]);
    feed.appendChild(bloc);
}
