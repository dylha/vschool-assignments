

// truthy/falsey helper function. Returns true if uppercase, false if lowercase.
function isCaps(letter) {  
    return letter === letter.toUpperCase();
}

function antiCaps(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (isCaps(str[i])) {  
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}

console.log(antiCaps("hELLO wORLD!"))

//antiCaps('Hello') // hELLO  
//antiCaps('racEcar') // RACeCAR  
//antiCaps('bAnAnA') // BaNaNa  