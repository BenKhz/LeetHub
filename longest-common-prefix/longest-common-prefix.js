/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var test = strs[0];
    var result = "";
    for(var i=1; i<=strs[0].length; i++){
        result = strs.every(string => string.slice(0,i) === test.slice(0,i)) ? test.slice(0,i): result;
    }
    return result
};

