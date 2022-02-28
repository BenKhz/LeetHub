/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    [s1, s2] = [s1.split(' '), s2.split(' ')]
    const key = {};
    for(word1 of s1) {
        if(key[word1]) {key[word1]++;}
        if(!key[word1]) { key[word1] = 1;}
    }
    for(word2 of s2) {
        if(key[word2]) {key[word2]++;}
        if(!key[word2]) { key[word2] = 1;}
    }
    return Object.keys(key)
        .filter(each => key[each] === 1);
};