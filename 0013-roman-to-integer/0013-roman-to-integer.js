/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let count = 0
    const romanValue = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    for (let i = 0; i < s.length; i++) {
        if (i == 0) {
            count = romanValue[s[i]]
        }
        else {
            if (romanValue[s[i]] > romanValue[s[i - 1]]) {
                count = count + romanValue[s[i]] - 2 * romanValue[s[i - 1]]
            }
            else {
                count = count + romanValue[s[i]]
            }
        }
    }
    return count
};