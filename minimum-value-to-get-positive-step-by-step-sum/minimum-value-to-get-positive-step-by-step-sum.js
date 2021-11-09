/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    var maxLess = nums[0];
    const sum = nums.reduce((acc, num) => {
        if ( acc + num < maxLess ) { maxLess = acc + num }
        return acc + num })
    if (maxLess < 1) { return Math.abs(maxLess) + 1}
    else { return 1}
};
