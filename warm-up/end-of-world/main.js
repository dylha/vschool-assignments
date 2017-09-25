var timer = document.getElementById("timer");
var time = 100000000;
// setInterval that updates the time every second

// function to set the time
    // subtract 1 from time
    // change the timer's innerHTML


function changeTime() {
    time--;
    timer.innerHTML = time;
    // if the time === 0
    if (time === 0) {
        clearInterval(myVar)
    }
}

myVar = setInterval(changeTime, 1);