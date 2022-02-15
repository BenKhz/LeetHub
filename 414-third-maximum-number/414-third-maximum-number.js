/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const sortedNums = nums.sort((a,b)=>b-a);
    var results = [];
    for(var i=0; i<sortedNums.length; i++) {
        if(!results.includes(sortedNums[i])) { results.push(nums[i]) }
        if(results.length === 3) { return results[2] }
    }
    return results[0];
};
