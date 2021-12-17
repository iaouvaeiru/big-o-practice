var permute = function(nums) {
    let answerArray = []
    let permutation = nums
    let temp = 0
    for(let i = 0; i < nums.length; i++){
        temp = permutation.pop()
        permutation = [...temp, permutation]
        answerArray.push(permutation)
    }
    return answerArray
};