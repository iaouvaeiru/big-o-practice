function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    if (num1.length !== num2.length){
        return false;
    }
    let number1 = {};
    let number2 = {};
    for (let digit of num1.toString()){
        number1[digit] = (number1[digit] || 0) + 1;
    }
    for (let digit of num2.toString()){
        number2[digit] = (number2[digit] || 0) + 1;
    }
    console.log(number1)
    console.log(number2)
    for (let key in number1){
        if(number1[key] !== number2[key]){
            return false;
        }
    }
    return true;
}

//console.log(sameFrequency(123123, 321321))

function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    let frequecyCounter = {}
    for(let val of args){
        frequecyCounter[val] = (frequecyCounter[val] || 0) + 1
        if (frequecyCounter[val] > 1){
            return true
        }
    }
    return false
  }

//console.log(areThereDuplicates(1,1,1,2))


function averagePair(arr, num){
    if (arr.length < num){
        return false
    }
    let left = 0
    let right = (arr.length - 1)
    while(left < right){
        let sum = arr[left] + arr[right]
        if (sum === (num*2)) {
            return true
        } else if (sum - (num*2) > 0) {
            right --
        } else {
            left ++
        }
    }
    return false
  }
//console.log(averagePair([1,2,3,11,], 7))

function maxSubarraySum(arr, num){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length < num){
        return null;
    }
    let maxSum = 0;
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum + arr[i] - arr[i - num];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

//console.log(maxSubarraySum([1,2,3,4,6], 2))

