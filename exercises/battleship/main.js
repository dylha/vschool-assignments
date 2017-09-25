var readline = require("readline-sync");

function makeGrid(x, y) {
    var grid = [];
    for (var i = 0; i < x; i++) { // runs 3 times
        var zeros = [];
        for (var j = 0; j < y; j++) { // runs 3 times every time i runs
            zeros.push(0);
        }
        grid.push(zeros);
    }
    return grid;
}

console.log(makeGrid(10, 10));

