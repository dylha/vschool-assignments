var box = document.getElementById("box")

box.addEventListener("dblclick", function() {
    box.style.backgroundColor = "#55ff88"
});

document.getElementById("orange").addEventListener("onscroll", function() {
    box.style.backgroundColor = "#ffcc33"
});

//document.getElementById("green").addEventListener("keydown", function(event) {
//    var blue = document.getElementById("green").style.backgroundColor = "#55bfed"
//    function makeBlue() {
//        
//    }
//}