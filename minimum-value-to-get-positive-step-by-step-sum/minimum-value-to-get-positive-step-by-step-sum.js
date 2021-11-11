/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    var maxLess = nums[0];
    const sum = nums.reduce((acc, num) => {
        if ( acc + num < maxLess ) { maxLess = acc + num }
        return acc + num })
    return maxLess < 1 ? Math.abs(maxLess) + 1 : 1;
};
