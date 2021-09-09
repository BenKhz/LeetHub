/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    var words = sentence.split(' ');
    var result = -1;
    for(var i = 0; i<words.length; i++){
        if (words[i].indexOf(searchWord) === 0) {
            result = i + 1;
            break;
        } 
    }
    return result
    
};