// Given a string and a non-negative int n, we'll say that the "front" of the string
// is the first 3 chars, or whatever is there if the string is less than length 3.
// Return n copies of the "front"

const strCopies = (str, n) => {
    const front = str.substring(0, 3);
    return front.repeat(n)
    // let final = "";
    // for (let i = 0; i < n; i++) {
    //     final = final.concat(front);
    // }
    // return final;
}

console.log(strCopies("h3nlo", 3));

module.exports = strCopies;
