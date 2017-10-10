// Given a multi-dimensional array containing only primitive data types
// (strings, booleans, and numbers), write a function that returns whether EACH
// element within each subarray belongs to the same data type.

let multiD = [[1,2,3],["a","b","c"], [true, true, true]]
let multiD2 = [[true,false,true], [false,false,true]]

// FLATTEN ARRAY
function checkType(arr) {
    const result = [].concat(...arr);
    const type = typeof result[0];
    return result.every(item => type === typeof item);
}

// LOOP v1
// function checkType(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i ++) {
//         newArr = newArr.concat(arr[i]);
//     }
//     for (let i = 0; i < newArr.length - 1; i++) {
//         if (typeof newArr[i] !== typeof newArr[i+1]) {
//             return false;
//         }
//     }
//     return true;
// }

// REDUCE start
// function checkType(arr) {
//     const flat = arr.reduce((prev, curr) => {
//         return prev.concat(curr);
//     }, []);
//     console.log(flat);
// }

console.log(checkType(multiD));
console.log(checkType(multiD2));
