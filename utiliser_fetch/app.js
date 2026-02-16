
let url = 'https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10';
let reponse = await fetch(url);
let liste = await reponse.json();

console.log(liste);




// function display(jokes) {

//     let divBloc;

//     for(let i=0; i<jokes.length; i++){
//         divBloc = document.createElement("div");
//         divBloc.setAttribute("class", "bloc");

//         const question = document.createElement("div");
//         question.setAttribute("class", "question");
//         question.textContent = jokes[i].setup;
//         divBloc.appendChild(question);

//         const answer = document.createElement("div");
//         answer.setAttribute("class", "answer");
//         answer.textContent = jokes[i].delivery;
//         divBloc.appendChild(answer);
//     }
    
//     return divBloc;
// }

// const feed = document.querySelector("#feed-container");
// feed.innerHTML = "";
// const retour = recup();
// const affichage = display(retour);
// feed.appendChild(affichage);


// for (let i = 0; i < retour.length; i++) {
//     const bloc = display(retour);
//     feed.appendChild(bloc);
// }