/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var length = nums.length;
    var result = [];
    while(length) {
        if(!nums.includes(length)) {
            console.log("found do something")
            result.push(length)
        } 
        length--;
    }
    return result.sort()
};
