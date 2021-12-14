function twoSumUsingSets(arr, val){
    let setObj = {}

    let set = new Set()
    let res = []
    for(let i = 0; i < arr.length; i++){
        setObj[arr[i]] = i
    }
    console.log(setObj)
    for(let i = 0; i < arr.length; i++){       
        let target = val - arr[i]
        console.log('target:', target)
        let otherIndex = setObj[target]
        if (otherIndex !== undefined && i !== otherIndex){
            if (!set.has(otherIndex) && !set.has(i)) {
                res.push([i, otherIndex])
                set.add(i)
                set.add(otherIndex)
            }
            
        }
        
    }
    return res
}

console.log(twoSumUsingSets([2,7,11,15], 9))
