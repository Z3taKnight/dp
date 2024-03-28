/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let count = 0,
    minVal = prices[0];
  for (const elem of prices) {
    count = Math.max(count, elem - minVal);
    minVal = Math.min(minVal, elem);
  }
  return count;
};
