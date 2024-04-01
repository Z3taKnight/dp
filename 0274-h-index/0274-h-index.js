/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    let count = 0;
    citations.sort((a, b) => b - a);
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            count += 1;
        }
    }
    return count;
};