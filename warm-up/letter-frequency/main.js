var phrase = 'slimy smelly solution';
var phraseArray = phrase.split("");
var letterCount = {};

phraseArray.forEach(function(letter) {
    if (letterCount[letter] === undefined) {
        letterCount[letter] = 1;
    } else {
        letterCount[letter]++;
    }
})

console.log(letterCount);

console.log(Object.keys(letterCount).join(""));

//
//var alpha = ["e", "i", "l", "m", "n", "s", "t", "u", "y"]
//
//function findFrequency(string) {
//
//    for (var i = 0; i < string.length; i++) {
//        var character = string.charAt;
//        
//        if (character === alpha.some) {
//            console.log(string[i] + ": ")
//        }
//    }
//    return;
//}
//
//console.log(findFrequency(phrase));
//console.log(alpha);
