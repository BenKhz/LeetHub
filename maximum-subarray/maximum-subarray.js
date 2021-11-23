/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var ans = nums[0];
    var curr = ans;
    for(var i = 1; i<nums.length; i++) {
        curr = nums[i] > nums[i] + curr ? nums[i]: curr + nums[i];
        ans = Math.max(ans, curr)
    }
    return ans
};

