/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var a = 0;
    var b = 1;
    var i = 0;
    while(i < n) {
        [a, b] = [b, a + b];
        i++;
    }
    return b;
};