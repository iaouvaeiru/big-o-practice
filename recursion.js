// powerOf function takes a number and the exponent as arguments
function power(number, powerOf){
    let ans = 1
    if (powerOf === 0){
        return ans
    }
    ans = number * power(number, powerOf -1)
    return ans
}

// factorial function does n!
function factorial(n){
    let ans = 1;
    // base case is 0
    if (n === 0){
        return 1;
    }
    ans = n * factorial(n - 1);
    return ans;
}

// product of array function
// returns value at index 0 * value of index 1.
//splice mutates array so each recursion the value of index 1 is different
function productOfArray(array){
    if (array.length === 0){
        return 1
    }
    return array[0] * productOfArray(array.splice(1))
}
console.log(productOfArray([1,2,3,4]))

