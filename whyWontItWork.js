function efficientProductOfArray(array){
    let newArray = [...array];
    let ans = 1
    function multiply(array){
        if (array.length === 0){
            return 1
        } else {
            ans = ans * array.pop() * multiply(array)
            return ans
        }
    }
    console.log(multiply(newArray))
    multiply(newArray)
}