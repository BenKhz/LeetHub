/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    return s.split(' ')
        .sort((a,b) => parseInt(a[a.length-1]) - parseInt(b[b.length-1]))
        .map(word => word.split('').slice(0, word.length-1).join(''))
        .join(' ');
};