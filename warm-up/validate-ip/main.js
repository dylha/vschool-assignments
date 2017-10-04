// Given a string, write a function that determines whether it is a valid IP address.
// EX/ 172.16.254.1

function validate(ip) {
    const arr = ip.split(".");
    
    if (arr.length !== 4) {
        return false;
    }
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 255 || arr[i] < 0 || (isNaN(Number(arr[i])))) {
            return false;
        }
        return true;
    }
}

console.log(validate("!.168.1.1"));
module.exports = validate;
