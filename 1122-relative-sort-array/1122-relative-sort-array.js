/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const result = [];
    for(targ of arr2) {
        for(var i = 0; i<arr1.length; i++) {
            if(arr1[i] === targ) {
                result.push(arr1[i])
                arr1.splice(i,1)
                i--;
            }
        }
    }
    arr1.sort((a, b) => a-b);
    return result.concat(arr1);  
};