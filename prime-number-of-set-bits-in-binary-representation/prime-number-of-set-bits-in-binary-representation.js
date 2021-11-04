/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    var result = 0;
    const isPrime = (num) => {
        for(var i = 2; i<num; i++){
            if(num % i === 0) { return false }
        }
        return num > 1;
    }
   for ( var i = left; i <= right; i++ ) {
       var setBits = i.toString(2).split('').reduce((acc, bit) => {
           return Number(bit) ? acc + 1 : acc 
       }, 0);
       if (isPrime(setBits)) { result += 1; }
   }
    
    return result;
   };