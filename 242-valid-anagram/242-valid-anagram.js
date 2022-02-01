/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var sLetters = s.split('').sort(),
        tLetters = t.split('').sort()
    if(tLetters.length !== sLetters.length){
        return false
    }
    for(var i=0; i<sLetters.length; i++) {
        if(sLetters[i] !== tLetters[i]){
            return false;
        }
    }
    return true
};