var readline = require("readline-sync");
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("Welcome to Game")
console.log("")

var name = readline.question("What is your name? ").toUpperCase();
console.log("")

var age = parseInt(readline.question("How old are you? "));
console.log("")

if (age < 13) {
    return console.log("You must be 13 years or older to play.");
} else {
    console.log("Welcome, " + name + ".");
}

console.log("")
console.log("")
console.log("")
console.log("")




console.log("You wake up in cabin 62 on Space Shuttle FORTNIGHT.")
console.log("CHoice")

var wake = ["Go back to sleep.", "Find out what's happening."]

index = readline.keyInSelect(wake)
console.log(wake[index]);
