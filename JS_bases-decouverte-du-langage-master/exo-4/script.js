// you can write js here

console.log('exo-4');

const secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
console.log(secretMessage);

secretMessage.length = secretMessage.length - 1;
console.log(secretMessage);

secretMessage.push("to", "program");
console.log(secretMessage);

secretMessage[secretMessage.indexOf("easily")] = "right";
console.log(secretMessage);

const PremInd = secretMessage.shift();
console.log(PremInd);
console.log(secretMessage);

secretMessage.unshift("Programming");
console.log(secretMessage);

secretMessage.splice(secretMessage.indexOf("get"), (secretMessage.indexOf("time,") - secretMessage.indexOf("get")) + 1, "know,");
console.log(secretMessage);

console.log(secretMessage.join(" "));

