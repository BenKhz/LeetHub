/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var count = 1;
    var result = [];
    while(count <= n){
        switch (true) {
            case (!(count % 5) && !(count%3)) : result.push("FizzBuzz"); break;
            case (!(count%5)): result.push("Buzz"); break;
            case (!(count%3)): result.push("Fizz"); break;
            default: result.push(`${count}`); break;
        }
        count++;
    }
    return result;
};