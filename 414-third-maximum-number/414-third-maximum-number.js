/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    //O(n) attempt
    var [first, second, third] = [-Infinity, -Infinity, -Infinity];
    for(var num of nums) {
        if(num === first || num === second || num === third) { continue; }
        if(num > first) {
            [third, second, first] = [second, first, num];
        } else if ( num > second ) {
            [third, second] = [second, num];
        } else if ( num > third) {
            third = num;
        }
    }
     return third === -Infinity ? first : third;
    // Naive solution
    // const sortedNums = nums.sort((a,b)=>b-a);
    // var results = [];
    // for(var i=0; i<sortedNums.length; i++) {
    //     if(!results.includes(sortedNums[i])) { results.push(nums[i]) }
    //     if(results.length === 3) { return results[2] }
    // }
    // return results[0];
};
