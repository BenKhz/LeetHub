/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var [low, mid, high] = [0, undefined, nums.length-1];
    if(target < nums[low] || target > nums[high]) { return -1 }
    while(low <= high) {
        mid = low + Math.floor((high-low)/2);
        if(nums[mid] === target) { return mid }
        else if(target > nums[mid]) {
            low = mid + 1 ;
        } else {
            high = mid -1 ;
        }
    }
    return -1;
}

