/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let mergedStr = '';
    let minLen = Math.min(word1.length, word2.length);

    for (let i = 0; i < minLen; i++) {
        mergedStr += word1[i] + word2[i];
    }

    if (word1.length > minLen) {
        mergedStr += word1.substring(minLen);
    }

    if (word2.length > minLen) {
        mergedStr += word2.substring(minLen);
    }

    return mergedStr;
};
