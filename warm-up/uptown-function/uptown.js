var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function uptown(arr) {
//    for (var i = 0; i < lyrics.length; i++) {
    console.log(arr.join(" "));
    }

uptown(lyrics);

//function funk(arr) {
//    for (var i = arr.length -1; i >= 0; i--) {
//        console.log(arr[i]);
//    }
//}

function funk(arr) {
    console.log(arr.reverse().join(" "));
}

funk(lyrics);

function youUp(arr) {
    var everyOtherLyric = [];
    
    for (var i = 0; i < arr.length; i+= 2) {
        everyOtherLyric.push(arr[i]);
    }
    
    console.log(everyOtherLyric.join(" "));
}

youUp(lyrics);