/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    var result = 0;
    return nums.map(item => {
        return !(result = ((result * 2) + item) % 5)
    })
};