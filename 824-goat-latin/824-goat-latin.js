/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var arr = sentence.split(' ');
    for(var i= 0; i <arr.length; i++) {
        if(vowels.includes(arr[i][0].toLowerCase())) {
            arr[i] = arr[i] + 'ma' + 'a'.repeat(i+1)
        } else {
            arr[i] = arr[i].slice(1,arr[i].length) + arr[i][0] + 'ma' + 'a'.repeat(i+1);
        }
    }
    return arr.join(' ')
};