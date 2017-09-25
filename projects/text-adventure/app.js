var readline = require("readline-sync");

console.log("");
console.log("");
console.log("");
console.log("");
var name = readline.question("What is your name? ").toUpperCase();
console.log("")

var age = parseInt(readline.questionInt("How old are you? "));
console.log("")

if (age < 13) {
    console.log("You must be 13 years or older to play.");
    console.log("");
    return;
}

console.log("")
console.log("\n\n            ·._.··`¯´´·.¸¸.·` WELCOME TO V-SCAPE `·.¸¸.·´´¯`··._.·");
console.log("");
console.log("");
console.log("");
console.log("");




var openWorld = ["Walk", "Open Inventory"];

var hp = 100 + "hp";

var gp = 0 + "gp";

var inventory = [gp];

function rng(min, max) {
    return Math.floor((Math.random() * max) + min)
}

if (rng(1, 100) === 1) {
    console.log("\nYou trip and fall on...\n\n...You died.\n");
    return;
}
  
    index = readline.keyInSelect(openWorld, "What do you do? ");
    
    if (index === 0) {
        console.log("\nYou walk forward a few paces.\n")
        console.log("");
    } else if (index === 0 && rng(1, 4)) {
        console.log("\nA monster appears from nowhere!\n")
    } else if (index === 1) {
        console.log("\n" + name + "'S inventory: " + inventory + "\n");
    }








