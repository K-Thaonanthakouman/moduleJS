// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo.garage);
console.log(joeInfo);

// ---------------------------------------

// Option 3
let team = {};

let players = [
    { firstName: "Machin", lastName: "Bidule", age: 22 },
    { firstName: "Coin", lastName: "Coin-Coin", age: 37 }
];

team.players = players;
team.score = 10;
team.trainer = "John Doe";

// Option 2
// let team = {};
// let players = [];

// let player1 = {
//     firstName: "Machin",
//     lastName: "Bidule",
//     age: 22,
// }

// let player2 = {
//     firstName: "Coin",
//     lastName: "Coin-Coin",
//     age: 37,
// }

// players.push(player1, player2);


// Option 1
// let team = {};
// let players = [];

// players.push({
//     firstName: "Machin",
//     lastName: "Bidule",
//     age: 22,
// })
// players.push({
//     firstName: "Coin",
//     lastName: "Coin-Coin",
//     age: 37,
// })


// Object.defineProperties(team, {
//     players: {},
//     games:{},
// })

// Object.defineProperties(players, {
//     joueur1: {
//         firstName: "Machin",
//         lastName: "Bidule",
//         age: 22,
// //     },
// //     joueur2: {
//         firstName: "Coin",
//         lastName: "Coin-Coin",
//         age: 37,
//     },
// });

// Object.defineProperties(games, {
//     adversaire1: "Pouêt",
//     teamPoints: 42,
//     adversairePoints: 27,
// })


console.log(players);
