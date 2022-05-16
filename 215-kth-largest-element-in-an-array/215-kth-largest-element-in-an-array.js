/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = (nums, k) => nums.sort((a,b) => a-b)[nums.length - k];
