function ligne()
{
    const truc = document.getElementById("bloc_arbres");
    truc.classList.remove("bloc_arbres_colonne");
    truc.classList.add("bloc_arbres_ligne");
}

function colonne()
{
    const truc = document.getElementById("bloc_arbres");
    truc.classList.remove("bloc_arbres_ligne");
    truc.classList.add("bloc_arbres_colonne");
}

function ajouter()
{
    const ajout = prompt('Insérer l\'adresse URL de l\'image :');
    const new_div = document.createElement('div');
    // new_div.setAttribute('class', 'bloc_arbres_colonnes');
    const new_img = document.createElement('img');
    new_img.setAttribute('src', ajout);
    new_img.setAttribute('class', 'arbre');
    // new_img.setAttribute('id', ajout);

    const new_btn = document.createElement('button');
    // new_btn.addEventListener('click', document.getElementById('bloc_arbres').lastElementChild.remove());
    new_btn.addEventListener('click', () => document.getElementById('bloc_arbres').lastElementChild.remove());
    new_btn.innerText = '-';

    const bloc_img = document.getElementById('bloc_arbres');
    
    new_div.appendChild(new_img);
    new_div.appendChild(new_btn);

    bloc_img.appendChild(new_div);
    
}

// function retirer()
