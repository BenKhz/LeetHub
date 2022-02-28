/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const result = [];
    nums.forEach(num => {
        num%2 === 0 ? result.unshift(num) : result.push(num)
    })
    return result
    
    // return nums.reduce((acc, num) => {
    //     if(num % 2 === 0) { acc[0].push(num); } 
    //     else { acc[1].push(num); }
    //     return acc;
    // }, [[], []] ).flat();
};