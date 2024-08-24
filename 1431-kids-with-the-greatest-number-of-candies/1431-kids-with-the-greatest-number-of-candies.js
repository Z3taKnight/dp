/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const maxVal = Math.max(...candies);
    const result = new Array(candies.length);

    for (let i = 0; i < candies.length; i++) {
        result[i] = candies[i] + extraCandies >= maxVal;
    }

    return result;
};