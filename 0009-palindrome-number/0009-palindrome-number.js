/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let newNum = ''
    let oldNum = x
    if (x < 0) return false
    while (x != 0) {
        newNum += x % 10
        x = (parseInt(x / 10))
    }
    if (oldNum == Number(newNum)) return true
    return false
};