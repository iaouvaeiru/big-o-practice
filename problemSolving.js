function validAnagram(str1, str2){
    let word1 = {}
    let word2 = {}
    if (str1.length !== str2.length){
        return false
    }
    for (let char of str1) {
        word1[char] = (word1[char] || 0) + 1
    }
    for (let char of str2) {
        word2[char] = (word2[char] || 0) + 1
    }
    console.log(word1)
    console.log(word2)
    for (let key in word1){
        if (word1[key] !== word2[key]){
            return false
        }
    }
    return true
}


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


console.log(validAnagram("werwe", "wweer"))
console.log(sameFrequency(123123, 321321))