/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // First Attempt using sorted arrays of chars compared by index.
//     var s = s.split('').sort(),
//         t = t.split('').sort();
//     return t.filter((letter, index) => {
//         if(letter !== s[index]){
//             return letter;
//         }
//     })[0];
    
  // More interesting solution using bitwise XOR of charCodes
    return String.fromCharCode([...s,...t].reduce((acc,c)=>{
       return acc^c.charCodeAt(0); 
    },0))   
};
