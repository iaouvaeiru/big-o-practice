function validParentheses(str){
    let stack = [];
    if((str.length%2) !== 0){
        return false
    } 
    for(let i = 0; i < str.length; i++){
        if (str[i]==='(' || str[i]==='{' || str[i]==='['){
            stack.push(parenthesesConverter(str[i]));
        } else if(stack.length === 0 || stack.pop() !== str[i]){
            return false
        }
    }
    return stack.length === 0
}

function parenthesesConverter(char){
    if(char === '('){
        return ')'
    } else if (char === '['){
        return ']'
    } else if (char === '{'){
        return '}'
    }
}

console.log(validParentheses(''))