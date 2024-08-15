/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim();
    if (s.length === 0) return 0;

    let sign = 1;
    let index = 0;
    let result = 0;
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    // Handle sign
    if (s[index] === '-' || s[index] === '+') {
        sign = s[index] === '-' ? -1 : 1;
        index++;
    }

    // Parse digits
    while (index < s.length && s.charCodeAt(index) >= '0'.charCodeAt(0) && s.charCodeAt(index) <= '9'.charCodeAt(0)) {
        const digit = s.charCodeAt(index) - '0'.charCodeAt(0);
        if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        result = result * 10 + digit;
        index++;
    }

    return result * sign;
};
