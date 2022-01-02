/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    var x = 0;
    operations.forEach(item => { item.includes("-") ? x-- : x++; })
    return x;
};