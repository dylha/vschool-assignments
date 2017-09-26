var readline = require("readline-sync");

console.log("");
console.log("");
console.log("");
console.log("");

// USER DATA -----------------------------------------------------------------
var name = readline.question("What is your name? ").toUpperCase();
console.log("")

var age = parseInt(readline.questionInt("How old are you? "));
console.log("")

if (age <= 12) {
    console.log("You must be 13 years or older to play.");
    console.log("");
    return;
    
}
// ---------------------------------------------------------------------------



// TOOLS ---------------------------------------------------------------------
function rng(min, max) {
    return Math.floor((Math.random() * max) + min);
}

var inventory = [gp];
// ---------------------------------------------------------------------------



// USER STATUS ----------------------------------------------------------------
var hp = 100

var gp = 0 + "gp";

var fight = 0;

var invo = 0;

var townDistance = 30;
// ---------------------------------------------------------------------------



// CHOICES --------------------------------------------------------------------
var openWorld = ["Walk forward", "Open Inventory"];

var inInventory = ["Inspect Inventory", "Exit Inventory"];
// ---------------------------------------------------------------------------



// GAME START ----------------------------------------------------------------
console.log("\n\n\n            ·._.··`¯´´·.¸¸.·` WELCOME TO V-SCAPE `·.¸¸.·´´¯`··._.·");
console.log("");
console.log("");
console.log("");
console.log("");


console.log("You log-on on a green hill.\nThe surrounding area is deep in a forest\nYou see a small town down the hill, about 30 paces off.")



// PROGRESS ------------------------------------------------------------------
while (townDistance >= 1)
    while (fight === 0) {
        while (invo === 0) {

            index = readline.keyInSelect(openWorld, "What do you do? ");

            if (index === 0) {
                console.log("\n\n...You walk forward two paces...");
                console.log("");

            } else if (index === 0 && rng(1, 4)) {
                console.log("\nA monster appears from nowhere!\n");
                fight = 1;

            } else if (index === 1) {
                console.log("\n\n...Loading inventory...\n\n");
                var invo = 1



                    // INVENTORY -----------------------------------------------------------------
                    while (invo === 1) {
                        console.log("You look inside your backpack.")

                        index = readline.keyInSelect(inInventory, "What do you do? ");

                        if (index === 0) {
                            console.log("\n\nYour inventory:\n" + inventory);
                            console.log("");

                        } else if (index === 1) {
                            console.log("\n\n\nExiting inventory...\n\n");
                            var invo = 0

                        } else {
                            console.log("\nExiting V-SCAPE...\n");
                            return;
                        }
                    }
                    // ---------------------------------------------------------------------------



            } else {
                console.log("\nExiting V-SCAPE...\n");
                return;
            }
        }
        // ---------------------------------------------------------------------------
    }    



