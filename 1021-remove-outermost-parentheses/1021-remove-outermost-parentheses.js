/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    const arr=[];
    const result = [];
    for(letter of s){
        if(letter==='('){
            arr.push('(')
            if(arr.length>1) { result.push('(') } 
        }
        else {
            arr.pop()
            if(arr.length>=1) result.push(')')
        }
    }
    return result.join('')
};``