/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let i = 0,
        len = 0;
    while (i < chars.length) {
        let currChar = chars[i];
        chars[len++] = currChar;
        let count = 0;
        while (i < chars.length && currChar == chars[i]) {
            count++;
            i++;
        }
        if (count > 1) {
            for (let a of count.toString().split("")) chars[len++] = a;
        }
    }
    return len;
};