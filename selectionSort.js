function selectionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal
    }
    return arr;
}

console.log(selectionSort([1,43,2,55,3]))