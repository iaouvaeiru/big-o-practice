// linear search. O(n)
function linearSearch(arr, value){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === value){
            return i
        }
    }
    return -1
}

function recursiveLinearSearch(arr, value){
    let index = 0
    function helper(index){
        if (index === arr.length){
            return -1
        } else if (arr[index] === value){
            return index
        }
        return helper(index + 1)
    }
    return helper(index)
}

//binary search.
function binarySearch(arr, value){
    let left = 0;
    let right = arr.length - 1;

    while (left <= right){
        let middle = Math.floor((left + right) / 2)

        if (arr[middle] < value){
            left = middle + 1
        } else if (arr[middle] > value){
            right = middle - 1
        } else {
            return middle
        }
    }
    return -1
}

//brute force string matching function
function naiveString(long, short){
    let count = 0
    for (let i = 0; i < long.length; i++){
        for (let j = 0; j < short.length; j++){
            if (short[j] !== long[i+j]){
                break
            }
            if (j === short.length - 1){
                count++
            }
        }
    }
    return count
}

console.log(recursiveLinearSearch([1,2,3,4,5,6,7,8,9,10,11,12], 13))
console.log(linearSearch([1,2,3,4,5,6,7,8,9,10,11,12], 13))