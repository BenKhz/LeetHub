/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let oddCount=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] % 2 !== 0) { oddCount++;} else { oddCount = 0; }
        if(oddCount >= 3) { return true }
    }
    return false;
};