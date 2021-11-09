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
    // base case is 0
    if (n < 0){
        return undefined
    }
    if (n === 0){
        return 1;
    }
    return n * factorial(n - 1);
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

// recursive range function
// sums all the numbers from 0 to target number
function recursiveRange(number){
   // base case 0
   if (number === 0) {
       return 0
   }
   // number decreases with each recursion
   return number + recursiveRange(number - 1)
}

// fibbonacci sequence function
// returns the nth number of the fibbonacci sequence where n is the input
function fib(n){
    if (n <= 2){
        return 1
    }
    // this is just the fibbonacci equation
    // not much else to it but it works i suppose
    return fib(n-1) + fib(n-2)  
}

// takes a string and returns the string backwards
function reverse(string){
    if (string.length <= 1){
        return string
    }
    return reverse(string.slice(1)) + string[0]
}


function isPalindrome(){
    // add whatever parameters you deem necessary - good luck!
  }

