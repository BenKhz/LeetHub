/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    var result = [];
    var pairs =[];
    
    unzipToPairs = (array) => array.splice(0,2);
    
    while (nums.length) { pairs.push(unzipToPairs(nums)); }
    pairs.forEach(elem => { 
        while(elem[0] > 0) {
            result.push(elem[1])
            elem[0] -= 1;
        }
    })
    return result;
};