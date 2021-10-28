const {
    performance
  } = require('perf_hooks');
  
// time complexity
// big O = O(n)  
function addUpTo(n){
    let total = 0;
    for (let i = 0; i <= n; i++){
        total += i
    }
    return total
}


// big O = O(1)
function fasterSum(n){
    return n * (n + 1) / 2;
}

// console.log(addUpTo(3))
// console.log(fasterSum(3))

let t1 = performance.now();
addUpTo(1000000000)
let t2 = performance.now();
console.log(`Time to run addUpTo function: ${(t2 - t1) / 1000} seconds`)

let t3 = performance.now();
fasterSum(1000000000)
let t4 = performance.now();
console.log(`Time to run fasterSum function: ${(t4 - t3) / 1000} seconds`)

//space complexity
// primitives (boolean, number, undefined, null) are constant space
// strings are O(n) space

//space complexity = O(1)
const sum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

//space complexity = O(n)
const doubleArray = (arr) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        newArray.push(arr[i] * 2);
    }
    return newArray;
}
let superArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sum(superArray))
console.log(doubleArray(superArray))


