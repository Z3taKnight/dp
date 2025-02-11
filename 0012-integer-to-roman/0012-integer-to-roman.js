/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const romanObj = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };

    const keys = Object.keys(romanObj).reverse();
    let res = '';

    for (let key of keys) {
        while (num >= key) {
            res += romanObj[key];
            num -= key;
        }
    }

    return res;
};