//function string(str) {
//    for (var i = 0; i < str.length; i++)
//        console.log(str[i])
//}
//
//string("hello")
//

function string(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (i === char) {
            break;
        }
    }
}

console.log(string("hello world", "w"))


//var arrayNum = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
//
//function numbers(arrayNum) {
//    for (var i = 0; i < 7; i++) {
//        console.log(arrayNum[i]);
//        }
//    }
//
//console.log(numbers(arrayNum));