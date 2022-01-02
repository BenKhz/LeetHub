/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) { 
    return nums.reduce((acc, item) => {
        var total = acc[acc.length-1] || 0;
        acc.push(total + item);
        return acc;
    }, [])
};