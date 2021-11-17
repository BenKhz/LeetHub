/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var pointer = 1;
    var current = nums[0]
    for(var i = 0; i<nums.length; i++){
        if(nums[i] > current) {
            current = nums[i]
            nums[pointer] = nums[i]
            pointer++;
        } if (nums[i] === nums[nums.length-1]) {
            for(var j=pointer; j<nums.length; j++) {
                delete nums[j];
            }
        }
    }
    return pointer
    
};
