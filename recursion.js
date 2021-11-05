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

 function productOfArray(){
     
 }