/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = []
    let recursion = function (l, r, str) {
        if (l > n || r > n || r > l) {
            return
        }

        if (l == n && r == n) {
            res.push(str)
            return
        }

        recursion(l + 1, r, str + '(')
        recursion(l, r + 1, str + ')')
    }

    recursion(0, 0, '')

    return res
};