function callback(num) {
    return typeof num === "number"
}

function callback2(num) {
    return typeof num % 2 === 0
}

function every(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (f(current)) {
            return true
        }
    }
    return true
}

function some(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (f(current)) {
            return true
        }
    }
}
