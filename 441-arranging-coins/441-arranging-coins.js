/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let [sum , i] = [ 0, 0];
while(sum<=n){
    i++
    sum +=i;
}
    return i-1;
};