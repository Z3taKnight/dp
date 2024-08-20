/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let char = []
    for (let c of s) {
        if (c == '(' || c == '[' || c == '{') {
            char.push(c)
        }
        else {
            if (c == ')' && char[char.length - 1] != '(') return false
            else if (c == ']' && char[char.length - 1] != '[') return false
            else if (c == '}' && char[char.length - 1] != '{') return false
            char.pop()
        }
    }
    if (char.length == 0) return true
    else return false
};