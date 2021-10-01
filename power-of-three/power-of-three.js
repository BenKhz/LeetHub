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

// Refactored from recursive to use base 3 and regex comparison! Fun stuff!

var isPowerOfThree = function(n) {
    if(n === 1) { return true }
    return n.toString(3).search(/1[0]+$/) === 0 ? true : false;
};
