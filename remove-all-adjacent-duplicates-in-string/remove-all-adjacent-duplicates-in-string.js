/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(stack[stack.length - 1] !== s[i]) stack.push(s[i])
        else stack.pop()
    }
    return stack.join('')
    
    // alternative using splice and slice vs pop and last index by .length.
    // Below method tested faster than above. ... Leet code is weird.
    
//     var result = s.split('').reduce((letters, letter) => {
//         if(letters.slice(-1).join('') === letter) {
//             letters.splice(-1)
//         } else {
//             letters.push(letter) 
//         } return letters;
//     }, [])
//     return result.join('')
};
