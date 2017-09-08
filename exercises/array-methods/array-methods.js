var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  



vegetables.pop();
console.log("vegetables: ", vegetables);  

fruit.shift();
console.log("fruit: ", fruit);

var orangeIndex = fruit.indexOf("Orange");

fruit.push(orangeIndex);
console.log("fruit: ", fruit);

console.log(vegetables.length);

vegetables.push(vegetables.length);
console.log("vegetables: ", vegetables);  

var food = fruit.concat(vegetables);
//var food = [...fruit ...vegetables];

food.splice(4, 2);

food.reverse();
console.log("food: ", food);

//food.join(" ");
console.log("food: ", food.join(", "));