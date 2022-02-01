/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length < 2) { return nums }
    for(var i =0, j=0 ; i<nums.length; i++) {
        if(nums[i]) {
            [nums[j++], nums[i]] = [nums[i], nums[j]]
        }
    }
};
