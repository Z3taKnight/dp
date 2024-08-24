/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let str = s.split("");
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] != "*") newStr.push(str[i]);
        else newStr.pop();
    }
    return newStr.join("");
};