function validAnagram(str1, str2){
    let word1 = {}
    let word2 = {}
    if (str1.length !== str2.length){
        return false
    }
    for (let char of str1) {
        word1[char] = (word1[char] || 0) + 1
    }
    for (let char of str2) {
        word2[char] = (word2[char] || 0) + 1
    }
    console.log(word1)
    console.log(word2)
    for (let key in word1){
        if (word1[key] !== word2[key]){
            return false
        }
    }
    return true
}


console.log(validAnagram("werwe", "wweer"))