/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    // optimized for max O(n)
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > arr[i+1]) {
            return i
        }
    }
    // one line - O(n^2)
    // return arr.indexOf(Math.max(...arr));
};