/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var s = s.split('').sort(),
        t = t.split('').sort();
    return t.filter((letter, index) => {
        if(letter !== s[index]){
            return letter;
        }
    })[0]
};