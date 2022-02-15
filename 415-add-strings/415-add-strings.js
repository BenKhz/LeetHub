/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // why not just convert.... le sigh... ok here we go
    // split the string, then reverse to start adding from least significant digit
    var [num1, num2] = [num1.split('').reverse(), num2.split('').reverse()]
    
    var longest = num1.length > num2.length ? num1.length : num2.length;
    var result = [];
    var carry = 0;
    for(var i=0; i<longest; i++) {
        var n1 = Number(num1[i]) || 0;
        var n2 = Number(num2[i]) || 0;
        var sum = n1 + n2;
        if(carry) { 
            sum += 1;
            carry--; };
        if(sum > 9) {
            sum -= 10;
            carry++;
        }
        result.unshift(sum)
    }
    if(carry) { result.unshift('1') }
    return result.join('')
};

