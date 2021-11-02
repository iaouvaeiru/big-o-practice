function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    let frequecyCounter = {}
    for(let val of args){
        frequecyCounter[val] = (frequecyCounter[val] || 0) + 1
        if (frequecyCounter[val] > 1){
            return true
        }
    }
    return false
  }

console.log(areThereDuplicates(1,1,1,2))