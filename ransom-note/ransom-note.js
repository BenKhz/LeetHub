/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var letters = ransomNote.split('');
    var sourceLetters = magazine.split('');
    var index;
    for ( letter of letters ) {
        index = sourceLetters.indexOf(letter);
        if( index !== -1 ) {
            sourceLetters.splice(index,1)
            console.log(sourceLetters)
        } else {
            return false;
        }
    }
    return true;
};