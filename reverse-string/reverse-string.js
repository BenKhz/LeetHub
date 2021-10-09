/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // built-ins are nice...
    // return s.reverse()
    
    // but let's be real here..
    // using dual traversal
    var start = 0;
    var end = s.length-1
    while(start < end ) {
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--; 
    }
};