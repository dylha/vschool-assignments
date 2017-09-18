//1. Write a function that takes an array of numbers and returns the largest
//2. Write a function that takes an array of words and a character and return each word that has that char present
//3. Write a function that takes a num1 and num2 and returns whether num1 is
//divisible by num2
//
//function findLargest(arr) {
//    var largest = arr[0]
//    for (var i = 1; i < arr.length; i++) {
//        if (largest < arr[i]) {
//            largest = arr[i];
//        }
//    }
//    return largest;
//}
//
//console.log(findLargest([-50, 500, 20]))
//console.log(findLargest([-50, 50, 200]))
//
//function words(arr, char) {
//    var foundWord = [];
//    
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i].indexOf(char) !== -1) {
//            foundWord.push(arr[i]);
//        }
//    }
//    return foundWord;
//}
//
//console.log(words(["Hello", "World", "How", "Help"], "H"));


// LONGER
//function divide(num1, num2) {
//    if (num1 % num2 === 0 ) {
//        return true;
//    } else {
//        return false;
//    }
//}
//
//console.log(divide(10, ));
//console.log(divide(3, 10));

// SHORTER
//function divide(num1, num2) {
//    return num1 % num2 === 0
//}
//
//console.log(divide(10, 5));
//console.log(divide(3, 10));





// loneTeen - nodingbat
// We'll say that a number is 'teen' if it is in the range 13..19 inclusive.
// Given 2 int values, return true if one or the other is teen, but not both

function loneTeen(a, b) { 
    for (var i = 0; i < 20; i++) {
        if (i <= 13 && i >= 19) {
            return;
        }
    }
}

console.log(loneTeen(16, 18));










