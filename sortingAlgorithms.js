// bubble sort. O(n^2) not efficient
function bubbleSort(arr){
    let noSwap
    for(let i = arr.length; i > 0; i--){
        noSwap = true
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j + 1])
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
                noSwap = false
            }
        }
        console.log('completed one pass')
        if(noSwap){
            break
        }
    }
    return arr
}

console.log(bubbleSort([4,3,6,32,77]))