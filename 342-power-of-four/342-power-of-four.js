/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let nLog = Math.log(n),
        mLog = Math.log(4);
    return nLog / mLog % 1 === 0;
};