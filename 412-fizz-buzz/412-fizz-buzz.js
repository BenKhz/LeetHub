/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var count = 1;
    var result = [];
    while(count <= n){
        if(!(count % 5) && !(count%3)) {
            result.push("FizzBuzz")
        } else if ( !(count%5) ) {
            result.push("Buzz")
        } else if (!(count%3)) {
            result.push("Fizz")
        } else {
            result.push(`${count}`)
        }
        count++;
    }
    return result;
};