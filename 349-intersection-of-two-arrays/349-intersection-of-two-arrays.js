/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var s = new Set(nums1);
    return nums2.filter(i => s.delete(i))
};