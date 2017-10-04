// find duplicates and push them to an array
let str = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

str = str.replace(/[^\w+\s]/gi, "");
console.log(str);
const arr = str.split(" ")

const dupes = [];

const findDupes = arr.filter(function(item, index, array) {
    if (index !== array.indexOf(item)) {
        dupes.push(item);
    }
});

const final = [];

const onlyOnce = dupes.filter(function(item, index, array) {
   if (index === array.indexOf(item)) {
       final.push(item);
   } 
});

console.log(final);