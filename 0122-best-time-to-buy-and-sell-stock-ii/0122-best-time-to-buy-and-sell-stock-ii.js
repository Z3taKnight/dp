/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length == 0 || prices.length == 1) return 0;
    let maxNum = prices[0],
        minNum = prices[0];
    let count = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxNum = prices[i];
        } else if (prices[i] < prices[i - 1]) {
            count = count + maxNum - minNum;
            maxNum = prices[i];
            minNum = prices[i];
        }
    }
    count = count + maxNum - minNum;
    return count;
};