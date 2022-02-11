/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var count = 1;
    var result = [];
    while(count <= n){
        var isFizz = !(count%3),
            isBuzz = !(count%5)
        switch (true) {
            case (isFizz && isBuzz) : result.push("FizzBuzz"); break;
            case isBuzz: result.push("Buzz"); break;
            case isFizz: result.push("Fizz"); break;
            default: result.push(`${count}`); break;
        }
        count++;
    }
    return result;
};