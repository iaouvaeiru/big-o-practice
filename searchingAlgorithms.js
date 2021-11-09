// linear search. O(n)
function linearSearch(arr, value){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === value){
            return i
        }
    }
    return -1
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