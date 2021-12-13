/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var res = nums.reduce((acc, item) => {
        acc[item] = !acc[item] ? 1 : acc[item] + 1;
        return acc;
    }, {})
    var out = Object.entries(res).filter( entry => entry[1] === 1 );
    return parseInt(out[0])
};