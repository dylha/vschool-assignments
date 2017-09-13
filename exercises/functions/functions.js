function numbers(a, b)  {
    return (a + b);
}

console.log(numbers(1, 2));

function largest(a, b, c) {
    if (a > b && a > c) {
        return console.log(a);
    } else if (b > a && b > c) {
        return console.log(b);
    } else {
        return console.log(c);
    }
}

largest(3, 2, 6);

function evenOdd(a) {
    if ((a % 2) === 0) {
        return console.log(a + " is even.");
    } else {
        return console.log(a + " is odd.");
    }
}

evenOdd(9);