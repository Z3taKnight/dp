/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const countMap = new Map();

    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    const occurrenceSet = new Set(countMap.values());

    return occurrenceSet.size === countMap.size;
};