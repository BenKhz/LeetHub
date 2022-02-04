/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s.length) { return true }
    var s = s.replace(/[^a-z|0-9]/gi, "").toLowerCase()
    for(var i=0, j=s.length-1; i<s.length; i++, j--) {
        if(s[i] !== s[j]) { return false }
    }
    return true;
}
