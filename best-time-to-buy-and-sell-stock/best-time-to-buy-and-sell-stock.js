/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProf = 0
    var min = prices[0]
    prices.forEach(price => {
        min = price < min ? price : min;
        maxProf = price - min > maxProf ? price - min : maxProf;
        })
    return maxProf
};