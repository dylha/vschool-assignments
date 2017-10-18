function threes(num) {
    let count = 0;
    while (num > 1) {
        if (num % 3 === 0) {
            count++;
            num = num / 3;
        } else if ((num - 1) % 3 === 0) {
            count++;
            num = (num - 1) / 3;
        } else if ((num + 1) % 3 === 0) {
            count++;
            num = (num + 1) / 3;
        }
    }
    return count;
}

console.log(threes(255));

module.exports = threes;
