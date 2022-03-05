/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
   var [short, long] = nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1];
    return short.reduce((acc, elem) => {
        var idx = long.indexOf(elem);
        if(idx !== -1) { 
            long.splice(idx,1)
            acc.push(elem)
        }
        return acc
    },[])
};
