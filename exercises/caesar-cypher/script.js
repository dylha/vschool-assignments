var readline = require("readline-sync");

var input = readline.question("What phrase would you like to encrypt? ").toLowerCase();  
var shift = parseInt(readline.questionInt("How many letters would you like to shift? "));
console.log("")
console.log("")

var alphabet = ["abcdefghijklmnopqrstuvwxyz"]

function caesar (str, shift) {
    for (var i = 0; i < alphabet.length; i++) {
        return alphabet[i]
    }
}

console.log(caesar(input, shift));



