//function string(str) {
//    for (var i = 0; i < str.length; i++)
//        console.log(str[i])
//}
//
//string("hello")


//function findLetter(str, letter) {
//    for (var i = 0; i < str.length; i++) {
//        if (str[i] === letter) {
//            return;
//        } 
//    }
//    console.log("You're an idiot.")
//    return;
//}
//
//findLetter("hi there", "z")


//function find42(arr) {
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i] === 42) {
//            console.log("We found 42 at index", i);
//            return
//        }
//    }
//    console.log("Didn't find 42 in this array");
//}
//
//find42([35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]);
//find42([35, 36, 37, 38, 39]);


var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1];

function loop4(arr) {
    var smallNum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < smallNum) {
            console.log("Smallest until now was: ", smallNum);
            smallNum = arr[i];
            console.log("New Smallest is: ", smallNum);
        }
    }
    console.log(smallNum);
}

loop4(arr)