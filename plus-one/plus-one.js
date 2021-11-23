/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(var i=digits.length-1; i>=0; i--) {
        if(digits[i] === 9) {
            digits[i] = 0;
            if( i === 0) {digits.unshift(1)}
        } else {
            digits[i] += 1;
            break
        }
    }
    return digits;
};
