/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(" ");
    arr = arr.filter((ele) => ele);
    return arr.reverse().join(" ");
};