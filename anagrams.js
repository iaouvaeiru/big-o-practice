function validAnagram(str1, str2){
    if (str1.length !== str2.length){
        return false
    }
    let word1 = {}
    let word2 = {}
    for(i = 0; i < str1.length; i++) {
        word1[str1[i]] = (word1[str1[i]] || 0) + 1
    }
    for(i = 0; i < str2.length; i++){
        word2[str2[i]] = (word2[str2[i]] || 0) + 1
    }
    console.log('word1: ',word1)
    console.log('word2: ' ,word2)
    for (let key in word1){
        if (word1[key] !== word2[key]){
            return false
        }
    }
    return true
}

console.log(validAnagram('asdfasdaf', 'asdfasdaf'))