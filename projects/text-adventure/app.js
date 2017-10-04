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
// ----------------------------------------------------------------------------



// DEV TOOLS ------------------------------------------------------------------
function rng(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function escape() {
    console.log("\n...You escaped!\n");
}
// ----------------------------------------------------------------------------



// ENEMIES --------------------------------------------------------------------
var enemies = [];

var skellington = {
    name: "Skellington",
    health: 10,
}
enemies.push(skellington);

var spook = {
    name: "Spook",
    health: 5,
}
enemies.push(spook);
// ----------------------------------------------------------------------------



// USER EQUIPMENT -------------------------------------------------------------
var gp = 20 + "gp";

var inventory = [gp];

var abilities = []
// ----------------------------------------------------------------------------



// ENEMY STATUS -------------------------------------------------------------
var hp = 10
// ----------------------------------------------------------------------------



// USER STATUS ----------------------------------------------------------------
var hp = 100

var fight = 0;

var invo = 0;

var overworld = 1;
// ----------------------------------------------------------------------------



// CHOICES --------------------------------------------------------------------
var openWorld = ["Walk forward", "Open Inventory"];

var inFight = ["Attack", "Abilities", "Open Inventory", "Run"];

var inInventory = ["Inspect Inventory", "Exit Inventory"];
// ----------------------------------------------------------------------------


// GAME START -----------------------------------------------------------------
console.log("\n\n\n            ·._.··`¯´´·.¸¸.·` WELCOME TO V-SCAPE `·.¸¸.·´´¯`··._.·");
console.log("");
console.log("");
console.log("");
console.log("");


console.log("You wake up on a green hill, the surrounding area deep in a forest.\nYou have no idea where you are, but you feel the strong urge to press forward.\nAfter brushing yourself off, you begin walking North. As you begin heading down\nthe hill you see a small town to the west, about 30 paces off.")



// OPEN WORLD -------------------------------------------------------------------
while (overworld === 1) {
    while (fight === 0) {
        while (invo === 0) {

            index = readline.keyInSelect(openWorld, "What do you do? ");

            if (index === 0) {
                console.log("\n\n...You walk forward two paces...");
                console.log("");
                if (rng(1, 4) === 1) {
                    console.log("\n\n**** A monster appears from nowhere! ****\n\n");
                    fight = 1;



                // FIGHT ---------------------------------------------------------------------
                while (fight === 1) {
                    while (spook.health > 0) {
                    console.log("\nIt's a " + spook.name + "!")

                    index = readline.keyInSelect(inFight, "What do you do? ");

                    if (index === 0) {
                        console.log("\nYou swing your weapon!\n\n");
                        (rng(1, 5))

                    // ATTACK  ODDS --------------------------------------
                        if (rng (0, 5) === 0) {
                            console.log("\n...You missed!\n")
                        } else if (rng (0, 5) === 1) {
                            console.log("\n...You dealt 1 damage!\n")
                            spook.health--
                        } else if (rng (0, 5) === 2) {
                            console.log("\n...You dealt 2 damage!\n")
                            spook.health-2
                        } else if (rng (0, 5) === 3) {
                            console.log("\n...You dealt 3 damage!\n")
                            spook.health-3
                        } else if (rng (0, 5) === 4) {
                            console.log("\n...You dealt 4 damage!\n")
                            spook.health-4
                        } else if (rng (0, 5) === 5) {
                            console.log("\n...You dealt 5 damage!\n")
                            spook.health-5
                        } else if (index === 1) {
                            console.log("\nExiting inventory...");
                            var invo = 0
                        } else {
                            console.log("\nExiting V-SCAPE...\n");
                            return;
                        }
                    // ---------------------------------------------------

                    } else if (index === 1) {
                        console.log("\nYou have no abilities!\n");

                    } else if (index === 2) {
                        var invo = 1
//                            // FIGHT INVENTORY ---------------------------------------------------------------
//                                while (invo === 1) {
//                                    while (fight === 0) {
//                                        console.log("\nYou look inside your backpack.")
//
//                                        index = readline.keyInSelect(inInventory, "What do you do? ");
//
//                                        if (index === 0) {
//                                            console.log("\nYour inventory:\n" + inventory);
//
//                                        } else if (index === 1) {
//                                            console.log("\nExiting inventory...");
//                                            var invo = 0
//                                            var fight = 1
//
//                                        } else {
//                                            console.log("\nExiting V-SCAPE...\n");
//                                            return;
//                                        }
//                                    }
//                                }
//                                // ---------------------------------------------------------------------------
                    } else if (index === 3) {
                        console.log("\nYou try to run...\n")
                        if (rng(1, 4) === 1) {
                            setTimeout(escape, 1000);
                            var fight = 0;
                        }

                    } else {
                        console.log("\nExiting V-SCAPE...\n");
                        return;
                    }
                    }
                    console.log("\n\n**** The " + spook.name + " has been slain! ****\n\n")
                    var fight = 0
                }
                // ---------------------------------------------------------------------------



                }
            } else if (index === 1) {
                var invo = 1



                // INVENTORY -----------------------------------------------------------------
                while (invo === 1) {
                    console.log("\nYou look inside your backpack.")

                    index = readline.keyInSelect(inInventory, "What do you do? ");

                    if (index === 0) {
                        console.log("\nYour inventory:\n" + inventory);

                    } else if (index === 1) {
                        console.log("\nExiting inventory...");
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
    }
}
// ---------------------------------------------------------------------------



console.log("As you enter the town, you see a sign that reads:/n/n townname...\n")
console.log("\n...Welcome to townname.")
