/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    var result = nums.reduce((acc, num) => {
        if(num % 2 === 0) { 
            acc[0].push(num);
        } else { 
            acc[1].push(num);
        }
        return acc;
    }, [[], []] ).flat();
    return result;
};