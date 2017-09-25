var number = 0;

function countCode(str) {
    for (var i = 0; str.length; i++) {
        if (str[i] === "c" && str[i + 1] === "o" && str[i + 2] === "e") {
            return number++;
        }
    }
}

countCode("codeaaaacope");
console.log(number);


// loop through the string
// check for "c".
// no c, skip
// if c, check for o
// no o, skip and restart
// if o, check for any letter
// check for e
// no e, skip and restart
// e, push 1 to code
//
