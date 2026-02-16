// you can write js here
console.log('exo-2');

const myDate = new Date();
let joursemaine = myDate.getDay();
let heureH = myDate.getHours();
console.log(myDate);


let isTesting = new Boolean(true);

if (isTesting == true) {
    let annee = prompt("Entrez l'année de la date désirée :");
    let mois = (prompt("Entrez le mois (1 à 12) de la date désirée :") - 1) % 12;
    let jour = prompt("Entrez le jour de la date désirée :") % 32;
    let heure = prompt("Entrez l'heure de la date désirée :") % 24;

    datefictive = new Date(annee, mois, jour, heure);
    console.log("Date entrée : " + datefictive.getDate() + " " + (datefictive.getMonth() + 1) + " " + datefictive.getFullYear() + ". Il est " + datefictive.getHours() + " heure(s).");
    console.log(Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(datefictive));

    if (datefictive.getDay() == 6 || datefictive.getDay() == 0) {
        console.log("C'est le week-end ! (test 1)");
    }
    else {
        console.log("C'est la merde. (test 1)");
    }

    if (((datefictive.getDay() == 5 && heure >= 17) || datefictive.getDay() > 5) || ((datefictive.getDay() == 1 && heure <= 9) || datefictive.getDay() < 1)) {
        console.log("C'est le week-end ! (test 2)");
    }
    else {
        console.log("C'est la merde. (test 2)");
    }
}

else {
    if (joursemaine == 6 || joursemaine == 0) {
        console.log("C'est le week-end ! (test 1)");
    }
    else {
        console.log("C'est la merde. (test 1)");
    }

    if (((joursemaine == 5 && heureH >= 17) || joursemaine > 5) || ((joursemaine == 1 && heureH <= 9) || joursemaine < 1)) {
        console.log("C'est le week-end ! (test 2)");
    }
    else {
        console.log("C'est la merde. (test 2)");
    }
}

