/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim();
    if (s.length === 0) return 0;

    let index = 0;
    let isNegative = false;

    if (s[index] === '-' || s[index] === '+') {
        isNegative = s[index] === '-';
        index++;
    }

    let num = 0;
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    while (index < s.length && isDigit(s[index])) {
        num = num * 10 + (s[index] - '0');

        if (!isNegative && num > INT_MAX) return INT_MAX;
        if (isNegative && -num < INT_MIN) return INT_MIN;

        index++;
    }

    return isNegative ? -num : num;
};

var isDigit = function (char) {
    return char >= '0' && char <= '9';
}