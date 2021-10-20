/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    var result = s.split('').reduce((letters, letter) => {
        if(letters.slice(-1).join('') === letter) {
            letters.splice(-1)
        } else {
            letters.push(letter) 
        } return letters;
    }, [])
    return result.join('')
};