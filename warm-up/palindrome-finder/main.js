//Write a function that accepts a string as an argument and returns true if the string is a palindrome (the string is the same forward and backward), or false if it is not.
//
//A string is still considered a palindrome despite letter capitalization, spaces, or punctuation.

// function isPalindrome(str)
    // for loop through str.length
    // if the first index matches the last index, continue
    // if the second index matches the second to last index, continue
    // etc
    // if the word is the same front to back, print
    // if it isn't, do not print
    // ignore capitalization (toLowerCase)
    // ignore punctuation
    // lol nevermind

function isPalindrome(str) {
    var toLower = str.toLowerCase();
    var noSpace = toLower.replace(" ", "");
    var letterArray = noSpace.split("");
    var reversed = letterArray.reverse();
    var final = reversed.join("");

    return str.toLowerCase() === final;
}

module.exports = isPalindrome;







//console.log(isPalindrome("racecar"));
//console.log(isPalindrome("building"));