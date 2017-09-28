var readline = require("readline-sync")

var wordResponse = "";
var definitionResponse = "";

var dictionary = {};

while (wordResponse !== "q" || definitionResponse !== "quit") {
    var wordResponse = readline.question("What word would you like to enter? ")
    if (wordResponse === "q") break;
    
    if (dictionary[wordResponse] === undefined) {
        var definitionResponse = readline.question("What is the definition of that word? ")
        dictionary[wordResponse] = definitionResponse
    } else {
        console.log("\nThat word is already in the dictionary. Here is the definition:\n");
        console.log(dictionary[wordResponse] + "\n");
    }    
}


