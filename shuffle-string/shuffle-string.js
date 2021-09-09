/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    var result = new Array(s.length);
    indices.forEach((ind, index) => {
        result[ind] = s[index]  
    })
    return result.join('')
};