/**
 * @param {string} s
 * @return {number}
 */
var countSegments = (s) => s.split(' ').reduce((acc, i) => i.length ? ++acc : acc , 0);
