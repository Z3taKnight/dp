/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = s.match(/[aeiou]/ig)
    return s.replace(/[aeiou]/ig, element => vowels.pop())
};