var readline = require("readline-sync");
console.log("");
console.log("");
console.log("");
console.log("");



// User's name.
var name = readline.question(" What is your name? ");

console.log("  Nice to meet you, " + name.toUpperCase() + ".");
console.log("");



// User's age.
var age = parseInt(readline.questionInt(" How old are you? "));

console.log("  You're " + age + " years old? Me too!");
console.log("");



// String combo.
console.log(" So far I know that: \n  You are " + age + " and that your name is " + name.toUpperCase() + ".")
console.log("");



// User's favorite color.
var color = readline.question(" What is your favorite color? ");

console.log("  " + color.toUpperCase() + " is nice.");
console.log("");



// For literally anything they type I will tell them the length of what they typed. Even if they don't care.
var length = readline.question(" I'll tell you the length of what you say next! ");

console.log("  That was " + length.length + " characters long. Nice!");
console.log("");



// "Long" message. Any input will repeat the message, but only half.
var longMessage = readline.question(" I have a bad memory. Tell me about yourself so I can test myself. ");
console.log("");

console.log("  Fantastic! Here's what I remember: ");
console.log("");

console.log("   " + longMessage.slice(13));
console.log("");



// "Long" message. User decides how much is repeated.
var decideLength = readline.questionInt(" I can try to remember more. What do you want to know? Choose a number between, 0 and " + longMessage.length + " ");
console.log("");

console.log(" Is this right?");
console.log("");

console.log("" + longMessage.slice(decideLength));
console.log("");




