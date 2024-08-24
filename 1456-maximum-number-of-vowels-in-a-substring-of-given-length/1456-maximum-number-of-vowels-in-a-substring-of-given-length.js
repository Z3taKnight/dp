/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let arr = s.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let i = 0; i < k; i++) {
        if (vowels.includes(arr[i])) count = count + 1
    }
    let prevCount = count
    for (let i = k; i < arr.length; i++) {
        let secondaryCount = prevCount
        if (vowels.includes(arr[i - k]))
            secondaryCount = secondaryCount - 1
        if (vowels.includes(arr[i]))
            secondaryCount = secondaryCount + 1
        count = Math.max(secondaryCount, count)
        prevCount = secondaryCount
    }
    return count
};