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

// selection sort. O(n^2) more efficient than bubble sort if trying to avoid writing to memory
// because there is only 1 swap per loop through rather than swapping each value until the biggest
// value reaches the end like in bubble sort.
// Otherwise its inefficient just like bubble sort
function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){
        let minValIndex = i
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[minValIndex]){
                minValIndex = j
            }
        }
        if (i !== lowest){
            let temp = arr[i];
            arr[i] = arr[minValIndex];
            arr[minValIndex] = temp
        }
    }
    return arr
}

// can write a separate swap function and call it in the sort functions instead of repeating it each time

console.log(selectionSort([3,2,5,1,6,0]))