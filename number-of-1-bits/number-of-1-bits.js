/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = (n) => n.toString(2).split('').reduce((acc, item) => item === '1' ? acc += 1 : acc, 0);