var readline = require("readline-sync");

var input = readline.question("What phrase would you like to encrypt? ").toLowerCase();  
var shift = parseInt(readline.questionInt("How many letters would you like to shift? "));
console.log("")
console.log("")


function caesar (str, shift) {
    var alphabet = ["abcdefghijklmnopqrstuvwxyz"]
    var results = ""
    for (var i = 0; i < str.length; i++) {
        var currentLetter = str[i]
        var index = alphabet.indexOf(currentLetter);
        // if -1
            // results += currentLetter
        var newIndex = index + shift;
        results += alphabet[newIndex];
    }
    return results;
}

console.log(caesar(input, shift));
console.log("")
console.log("")


