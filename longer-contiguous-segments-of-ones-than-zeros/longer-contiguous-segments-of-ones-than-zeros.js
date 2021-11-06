/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
   var ones = s.match(/1*/g).reduce((acc, entry) => {
       return entry.length > acc.length ? entry : acc
   }, '').length
   var zeroes = s.match(/0*/g).reduce((acc, entry) => {
       return entry.length > acc.length ? entry : acc
   }, '').length
  return ones > zeroes;
};
