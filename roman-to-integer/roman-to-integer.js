/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    var dict = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
        }
    // transform into arr of nums
    var result = s.split('').map(char => dict[char]) 
    // reverse, and then conditionally sum based off of previous num value.
    result = result.reverse().reduce((acc, num, ind) => {
        return (num < result[ind - 1]) ? acc - num : acc + num;
    })
    return result
};

const expect = (exp, res) => {
    return exp === res
}

