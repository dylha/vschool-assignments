// DOUBLE NUMBERS INTO NEW ARRAY
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
};

// TURN ARRAY OF NUMBERS INTO STRING ARRAY
function stringItUp(arr){
    return arr.map(num => num.toString());
};

// MAKE AN ARRAY OF STINGS OF THE NAMES
function namesOnly(arr){
    return arr.map(obj => obj.name);
};

// ARRAY OF STRINGS DETERMINING WHO CAN GO TO THE MATRIX
function thereIsNoSpoon(arr) {
    return arr.map(obj => {
        if (obj.age >= 18) {
            return `${obj.name} can go to The Matrix`
        } else {
            return `${obj.name} is underage!!`
        }
    });
};

// ARRAY OF H1s THAT ARE NAMES and H2s THAT ARE AGES
function readyToPutInTheDOM(arr){
    return arr.map(obj => `<h1>${obj.name}</h1><h2>${obj.age}</h2>`
)};

module.exports = {
    doubleNumbers,
    stringItUp,
    namesOnly,
    thereIsNoSpoon,
    readyToPutInTheDOM
}
