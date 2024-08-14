/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1) return s
    let arr = Array.from({ length: s.length }, () => Array(s.length).fill(''))
    let res = ''
    if (numRows == 2) {
        for (let i = 0; i < s.length; i++) {
            arr[i % numRows][parseInt(i / numRows)] = s[i]
        }
        for (let i = 0; i < arr.length; i++) {
            res += arr[i].join('')
        }
        return res
    }
    else {
        s = s.split('')
        let temp = 0
        let newTemp = numRows - 2
        while (s.length > 0) {
            for (let i = 0; i < numRows; i++) {
                if (temp % (numRows - 1) == 0) {
                    arr[temp][i] = s.shift()
                }
                else {
                    if (newTemp == i) {
                        arr[temp][newTemp--] = s.shift()
                    }
                }
            }
            temp++
            if (newTemp == 0) newTemp = numRows - 2
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j][i] != undefined)
                    res += arr[j][i]
            }
        }
        return res
    }
};