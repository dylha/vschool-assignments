//function duplicates(str) {
//    var unique = "";
//    for (var i = 0; i < str.length; i++) {
//        if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
//            unique += str[i];
//        } 
//    }
//    return unique;
//};
//
//console.log(duplicates("racecar"));


function noDupes(str) {
    var strArray = str.split("");
    var extras = [];
    for (var i = 0; i < strArray.length; i++) {
        var curLetter = strArray[i];
        
        while (strArray.indexOf(curLetter) !== (strArray.lastIndexOf(curLetter))) {
            var lastIndex = strArray.lastIndexOf(curLetter);
            var extra = strArray.splice(lastIndex, 1);
            extras.push(extra[0]);
        }
    }
    console.log(strArray.join(""));
    console.log(extras.join(""));
}

noDupes("racecar");