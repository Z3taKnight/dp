/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0, j = 0
    while (i < t.length) {
        if (t[i] === s[j]) j++
        i++
    }
    if (j == s.length) return true
    else return false
};