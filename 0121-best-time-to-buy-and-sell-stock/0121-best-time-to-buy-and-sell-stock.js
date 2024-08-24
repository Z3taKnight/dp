/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices == null || prices.length == 0) return 0;
    let profit = 0, min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return profit;
};