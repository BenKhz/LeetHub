/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
        count = 1;
    while ((count + 1)*(count + 1) <= num) {
        count++;
    }
    return count*count === num ? true:false;
};