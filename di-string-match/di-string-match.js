/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    var output = [],
        l = 0,
        h = s.length
    for(var i=0; i<=s.length; i++) {
        s.charAt(i) === 'D' ? output.push(h--) : output.push(l++);
    }
    return output
};