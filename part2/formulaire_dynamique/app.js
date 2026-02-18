let commentaires;

function formulaire() {
    const truc = document.getElementById("pikachu").value;
    const truc2 = document.getElementById("carapuce").value;
    
    commentaires.append({pseudo: pseudo, commentaire: texte});
    creerBloc(commentaires);

}

function creerBloc(objetCommentaire){
    
    const divBloc = document.createElement('div');
    divBloc.setAttribute('class', 'bloc');

    const parag1 = document.createElement('p');
    parag1.textContent = objetCommentaire.pseudo;
    divBloc.appendChild(parag1);

    const parag2 = document.createElement('p');
    parag2.textContent = objetCommentaire.commentaire;
    divBloc.appendChild(parag2);

    return divBloc;
}

const feed = document.querySelector("#feed-container");
feed.innerHTML = "";

const comm = formulaire();
feed.appendChild(comm);



