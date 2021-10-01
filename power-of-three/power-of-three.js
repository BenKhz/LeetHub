/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n === 1) {
        return true;
    } if(n > 1) {
        n = n/3;
    }
    if(n < 1){
        return false;
    } else {
        return isPowerOfThree(n)
    }
};