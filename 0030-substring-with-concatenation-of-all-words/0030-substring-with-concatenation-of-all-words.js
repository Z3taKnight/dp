/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    const count = new Map();
    for (const word of words) {
        count.set(word, (count.get(word) || 0) + 1);
    }
    const len = s.length;
    const arrLen = words.length;
    const wordLen = words[0].length;
    const indices = [];

    for (let i = 0; i < wordLen; ++i) {
        const tempCount = new Map();
        let left = i;
        let right = i;
        let match = 0;

        while (right + wordLen <= len) {
            const currentWord = s.slice(right, right + wordLen);
            right += wordLen;

            if (!count.has(currentWord)) {
                tempCount.clear();
                left = right;
                match = 0;
                continue;
            }

            tempCount.set(currentWord, (tempCount.get(currentWord) || 0) + 1);
            ++match;

            while (tempCount.get(currentWord) - count.get(currentWord) > 0) {
                const wordToLeft = s.slice(left, left + wordLen);
                tempCount.set(wordToLeft, tempCount.get(wordToLeft) - 1);
                left += wordLen;
                --match;
            }

            if (match === arrLen) {
                indices.push(left);
            }
        }
    }

    return indices;
};
