// you can write js here
console.log('exo-3');

function getPlayerChoice() {

    let playerInput = prompt("Papier, caillou ou ciseaux ?");
    playerInput = playerInput.toLowerCase();

    switch (playerInput) {
        case "papier":
            return playerInput;

        case "caillou":
            return playerInput;

        case "ciseaux":
            return playerInput;

        case "bombe":
            return playerInput;

        case "tarte à la crème":
            console.log("Pardon ? Qui êtes-vous ?");
            break;

        default:
            console.log("Erreur de saisie !");
            break;
    }
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (random) {
        case 0:
            computerChoice = "papier";
            break;
        case 1:
            computerChoice = "caillou";
            break;
        case 2:
            computerChoice = "ciseaux";
            break;
    }
    return computerChoice;
}

function findWinner(playerInput, computerChoice) {
    if (playerInput == "bombe") {
        console.log("T'as triché, mais t'as gagné !")
    }
    else if (playerInput == computerChoice) {
        console.log("Egalité !");
    }

    else {
        if (playerInput == "caillou") {
            if (computerChoice == "ciseaux") {
                console.log("T'as gagné !");
            }
            else {
                console.log("T'as perdu !");
            }
        }

        if (playerInput == "ciseaux") {
            if (computerChoice == "papier") {
                console.log("T'as gagné !");
            }
            else {
                console.log("T'as perdu !");
            }
        }

        if (playerInput == "papier") {
            if (computerChoice == "caillou") {
                console.log("T'as gagné !");
            }
            else {
                console.log("T'as perdu !");
            }
        }
    }
}

function playGame() {
    let uChoice = getPlayerChoice();
    let computerchoice = getComputerChoice();
    console.log("Choix du joueur : " + uChoice);
    console.log("Choix de l'ordinateur : " + computerchoice);

    findWinner(uChoice, computerchoice);
}

playGame();

