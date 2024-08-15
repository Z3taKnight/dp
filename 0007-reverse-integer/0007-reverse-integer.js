/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let isNegative = false
    if (x < 0) {
        x = x * -1
        isNegative = true
    }
    x = x.toString().split('').reverse().join('')
    if (isNegative) x = x * -1
    if (!is32BitInteger(x)) return 0
    return x
};

var is32BitInteger = function (num) {
    let n = 2 ** 31
    return num >= -(2 ** 31) && num <= (2 ** 31) - 1;
}