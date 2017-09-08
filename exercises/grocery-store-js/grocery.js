var shopper = {
    groceryCart: ["apples", "milk", "bananas", "eggs"],
    purchase: "Apples",
    numberOfApples: 6,
    isGoldenDelicious: true,
    function(a, b) {
        return a + b
    }
}

console.log(shopper.function("My cart has " + "apples."));