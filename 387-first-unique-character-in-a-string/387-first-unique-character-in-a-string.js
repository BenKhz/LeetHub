/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   var uniqs = {}
    for(var letter of s) {
        if(uniqs[letter]) { uniqs[letter]++ }
        else{uniqs[letter] = 1;}
    }
    for (var i = 0; i<s.length; i++) {
        if(uniqs[s[i]] === 1) {
            return i
        }
    }
    return -1;
};
