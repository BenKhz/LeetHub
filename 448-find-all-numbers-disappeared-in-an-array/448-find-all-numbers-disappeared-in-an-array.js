/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var length = nums.length;
    var count = 1;
    var result = [];
    while( count <=length) {
        if(!nums.includes(count)) {
            result.push(count)
        } 
        count++;
    }
    return result
};
