// you can write js here
console.log('hello from file');

let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?"); // demande à l'utilisateur d'entrer lui-même le nombre
let celsius = kelvins - 273; // convertit la température donnée en celsius
let fahrenheit = celsius * (9 / 5) + 32; // convertit la température donnée en fahrenheit
console.log(kelvins); // affiche sur la console la variable kelvins
console.log(celsius); // affiche sur la console la variable celsius
console.log(fahrenheit); // affiche sur la console la variable fahrenheit
console.log(Math.floor(fahrenheit)); // affiche sur la console la troncature de la variable fahrenheit

