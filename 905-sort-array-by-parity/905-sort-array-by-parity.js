/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const result = [];
    
    for(var i = 0; i<nums.length; i++) {
        nums[i]%2 === 0 ? result.unshift(nums[i]) : result.push(nums[i])
    }
    return result
    // nums.forEach(num => {
    //     num%2 === 0 ? result.unshift(num) : result.push(num)
    // })
    // return result
    
    // return nums.reduce((acc, num) => {
    //     if(num % 2 === 0) { acc[0].push(num); } 
    //     else { acc[1].push(num); }
    //     return acc;
    // }, [[], []] ).flat();
};