// you can write js here

console.log('exo-5');

let input = "Turpentine and turtles";
let vowels = ["a", "e", "i", "o", "u", "y"];
let resultArray = [];

function chercherVoyelle(phrase, cherche) {
    let resultat = [];
    let trouve;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < cherche.length; j++) {
            if (phrase.charAt(i) == cherche[j]) {
                trouve = input.charAt(i);
                resultat.push(trouve);
            }
        }
    }

    for (let k = 0; k < resultat.length; k++) {
        resultat[k] = resultat[k].toUpperCase();
    }
    return resultat;
}

resultArray = chercherVoyelle(input, vowels);
console.log(resultArray.join(""));


