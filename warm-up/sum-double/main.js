function sumDouble(a, b) {
    if (a !== b) {
        return a + b;
    } else {
        return (a + b) * 2;
    }
}

console.log(sumDouble(1, 5))
console.log(sumDouble(5, 5))