/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;

    let longest = 0;
    let charMap = {};
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (char in charMap && charMap[char] >= left) {
            left = Math.max(left, charMap[char] + 1);
        }
        charMap[char] = right;
        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};