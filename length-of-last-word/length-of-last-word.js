/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.split(' ');
    var result = arr.pop().length;
    while(!result) {
        result = arr.pop().length
    }
    return result
};