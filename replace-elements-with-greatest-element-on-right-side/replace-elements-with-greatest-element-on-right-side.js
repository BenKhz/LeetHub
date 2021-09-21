/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    
 let result = new Array(arr.length)
    // if only 1 element, always make final element -1
     result[result.length-1]  = -1
    // only necessary to compare values from end to start
     for(let i = arr.length-2; i>= 0; i--){
         result[i] = Math.max(arr[i+1] , result[i+1])
     }
    return result
};