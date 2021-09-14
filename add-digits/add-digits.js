/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while( num > 9 ) {
        num = num.toString()
            .split('')
            .reduce((acc, item) => { return acc + parseInt(item) }, 0)
        }
    return num
    }