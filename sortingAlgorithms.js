function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j + 1])
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
        console.log('completed one pass')
    }
    return arr
}

console.log(bubbleSort([4,3,6,32,77]))