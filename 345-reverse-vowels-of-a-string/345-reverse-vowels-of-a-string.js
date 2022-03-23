/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vows = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var i = 0,
        j = s.length,
        letters = s.split('');
    while(i<j) {
        while(!vows.includes(letters[i]) && i<j) { i++; }
        while(!vows.includes(letters[j]) && i<j) { j--; }
        [letters[i], letters[j]] = [letters[j], letters[i]];
        i++;
        j--;
    }
    return letters.join('')
};
