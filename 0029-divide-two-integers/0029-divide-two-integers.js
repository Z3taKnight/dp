/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {

    let resultSign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;

    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
    let result = 0;
    while (absDividend >= absDivisor) {
        let shiftCount = 0;

        while (absDividend >= (absDivisor * Math.pow(2, shiftCount + 1))) {
            shiftCount++;
        }

        result += Math.pow(2, shiftCount);

        absDividend -= absDivisor * Math.pow(2, shiftCount);
    }

    result *= resultSign;

    if (result >= -(2 ** 31) && result <= (2 ** 31) - 1) {
        return Math.trunc(result);
    }
    return (2 ** 31) - 1;
};