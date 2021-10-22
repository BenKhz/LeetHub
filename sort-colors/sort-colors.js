/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var log = {
        "r" : 0,
        "w" : 0,
        "b" : 0
    }
    nums.reduce((acc, item) => {
        if(item === 0) { acc.r += 1;}
        if(item === 1) { acc.w += 1;}
        if(item === 2) { acc.b += 1;}
        return acc
    }, log)
    nums.forEach((item, ind) => {
        if(log.r > 0) { 
            nums[ind] = 0;
            log.r -= 1;
        } else if(log.w > 0) { 
            nums[ind] = 1;
            log.w -= 1;
        }else if(log.b > 0) { 
            nums[ind] = 2;
            log.b -= 1;
        }
    })
};