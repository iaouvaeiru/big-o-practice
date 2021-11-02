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
console.log(averagePair([1,2,3,11,], 7))