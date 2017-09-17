//goomba
var goombaPrice = parseInt(document.getElementById("goomba-price").innerHTML);
var goombaCount = parseInt(document.getElementById("goomba-count").value);
var goombaTotal = goombaPrice * goombaCount;


document.getElementById("goomba-count").addEventListener("input", function () {
    var goombaCount = parseInt(document.getElementById("goomba-count").value);
    var goombaTotal = goombaPrice * goombaCount;
    document.getElementById("goomba-total").innerHTML = goombaTotal
});


//bobomb
var bobombPrice = parseInt(document.getElementById("bobomb-price").innerHTML);
var bobombCount = parseInt(document.getElementById("bobomb-count").value);
var bobombTotal = bobombPrice * bobombCount;

document.getElementById("bobomb-count").addEventListener("input", function () {
    var bobombCount = parseInt(document.getElementById("bobomb-count").value);
    var bobombTotal = bobombPrice * bobombCount;
    document.getElementById("bobomb-total").innerHTML = bobombTotal
});


//cheep-cheep
var cheepPrice = parseInt(document.getElementById("cheep-price").innerHTML);
var cheepCount = parseInt(document.getElementById("cheep-count").value);
var cheepTotal = cheepPrice * cheepCount;


document.getElementById("cheep-count").addEventListener("input", function () {
    var cheepCount = parseInt(document.getElementById("cheep-count").value);
    var cheepTotal = cheepPrice * cheepCount;
    document.getElementById("cheep-total").innerHTML = cheepTotal
});


var totalOwed = goombaTotal + bobombTotal + cheepTotal;

document.getElementById("button").addEventListener("click", function () {
    var goombaTotal = document.getElementById("goomba-total").innerHTML;
    var bobombTotal = document.getElementById("bobomb-total").innerHTML;
    var cheepTotal = document.getElementById("cheep-total").innerHTML;
    var totalOwed = parseInt(cheepTotal) + parseInt(bobombTotal) + parseInt(goombaTotal);
    document.getElementById("total-coins").innerHTML = totalOwed;
});