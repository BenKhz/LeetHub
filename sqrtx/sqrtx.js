/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var ans = 0;
    while(true) {
        ans += 1;
        if(ans * ans === x) {break}
        if(ans * ans > x) { ans -= 1; break;}
    }
 return ans;
};
