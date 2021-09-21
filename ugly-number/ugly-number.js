/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    const uglyNums = [2, 3, 5];
    if( n <= 0 ) { return false }
    if( n <= 5 ) { return true }
    else {
        for(num of uglyNums) {
            while( n % num === 0 ) {
               return isUgly(n / num)
            }
        }
    }
    return false;
    
};