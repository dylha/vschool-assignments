var cars = ["truck", "van", "sedan"];

var cars = [  
   {make: "Ford", model: "E150", price: 10000, year: 2010},
    {make: "Chevy", model: "Camaro", price: 20010, year: 2001},
    {make: "Toyota", model: "Tacoma", price: 30900, year: 2006},
    {make: "Ford", model: "Explorer", price: 9000, year: 2003},
    {make: "Ford", model: "F250", price: 2400, year: 2015}
]

//for (var i = 0; i < cars.length; i++) {  
//    console.log(`${cars[i]} goes vroom`);
//}
//
// FOR EACH
//
//cars.forEach(function(car) {
//    console.log(car + "goes vroom")
//});
//
//console.log(cars);




//var angryCars = [];
//
//for (var i = 0; i < cars.length; i++) {  
//    angryCars.push(cars[i].toUpperCase());
//}
//
// MAP
//
//var angryCars = cars.map(function(car) {
//    return car.toUpperCase();
//});
//
//console.log(angryCars);



//var newCars = [];
//
//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].year > 2005){
//    newCars.push(cars[i]);
//  }
//}
//
// FILTER
//
//var newCars = cars.filter(function(car) {
//    return car.year > 2005;
//});
//
//console.log(newCars);



//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].make === "E150"){
//    var coolVan = cars[i];
//    break;
//  }
//}
//
// FIND
//
//var coolVan = cars.find(function(car) {
//    return car.model === "E150";
//});
//
//console.log(coolVan);



//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].make === "E150"){
//    console.log("There is one or more E150s");
//    break;
//  }
//}
//
// SOME
//
//var coolVan = cars.some(function(car) {
//    if (car.model === "E150") {
//    console.log("There is one or more E150s");
//    }
//});



//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].make != "E150"){
//    console.log("Not every car is an E150");
//    break;
//  }
//}
//
// EVERY
//
//var uncoolVan = cars.every(function(car) {
//    if (car.model != "E150") {
//    console.log("Not every care is an E150");
//    }
//});
//
//console.log(uncoolVan);



//var numberOfFords = 0;  
//var numberOfChevys = 0;
//
//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].model === "Ford"){
//    numberOfFords ++;
//  }
//  if (cars[i].model === "Chevy"){
//    numberOfChevys ++;
//  }
//}
//
//var carTotals = { numberOfFords: numberOfFords, numberOfChevys: numberOfChevys }  
//
// REDUCE
//
