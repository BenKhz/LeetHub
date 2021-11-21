/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0) { return 0 } // edge case with 0 length input
    var processed = haystack.split(needle);
    return processed[0].length < haystack.length ? processed[0].length : -1
}
