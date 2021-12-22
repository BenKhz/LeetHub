/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var result = nums.reduce((acc, item) => {
        acc[item] ? acc[item] += 1 : acc[item] = 1
        return acc;
    }, {})
    return Object.entries(result).sort((a,b) => b[1] - a[1])[0][0];
    
    
    
};