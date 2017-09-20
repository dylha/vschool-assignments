var readline = require("readline-sync");

//
// define three choices
// allow user to choose from those options, each with a different response
//
//
// HOLE
// Death, exit game.
//
// KEY
// Unlock door
//
// DOOR
// Locked unless user has key.
//


console.log("\n\n·._.··`¯´´·.¸¸.·` WELCOME TO ROOMSCAPE `·.¸¸.·´´¯`··._.·");

console.log("\nYou wake up in a dark, locked room.");
console.log("After your eyes adjust you see a hole in the east wall  and a door to the north.");

var choice = ["Open the door", "Find the key", "Put your hand in the hole"]


var door = 0;

while (door === 0) {

    index = readline.keyInSelect(choice, "What do you do?");

    if (index === 0) {
        console.log("\nThe door is locked.")
    } else if (index === 1) {
        console.log("\nYou find the key already in the door...\n\n...You turn the key and hear a click.")
        var door = 1
    } else if (index === 2) {
        console.log("\nYou put your hand in the hole...\n\n...You died\n");
        return;
    } else {
        console.log("\nClosing Roomscape...\n");
        return;
    }

};

var choiceTwo = ["Open the door", "Put your hand in the hole"]

index = readline.keyInSelect(choiceTwo, "What do you do?");

if (index === 0) {
    console.log("\nThe door swings open and you leave.\n")
    console.log("·._.··`¯´´·.¸¸.·` YOU WIN! `·.¸¸.·´´¯`··._.·\n");
    return;
} else if (index === 1) {
    console.log("\nAlthough you know the door is unlocked now, you're curious.\n\nYou stick your hand in the hole...");
    console.log("\n...You died.\n");
    return;
} else {
    console.log("\nClosing Roomscape...\n");
    return;
}

// THE END