//for (var i = 100; i >= 0; i--) {
//    if (i % 2 === 1) {
//        console.log(i);
//    }
//}

var powerRangers = ["Jason", "Kimberly", "Billy", "Kimberly", "Trini", "Zack", "Kimberly"];

var kimberlyArray = [];

for (var i = 0; i < powerRangers.length; i++) {
    if (powerRangers[i] === "Kimberly") {
        kimberlyArray.push(i);
    }
}

console.log(kimberlyArray);