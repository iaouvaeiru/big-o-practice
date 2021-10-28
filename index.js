const {
    performance
  } = require('perf_hooks');

function addUpTo(n){
    let total = 0;
    for (let i = 0; i <= n; i++){
        total += i
    }
    return total
}

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

