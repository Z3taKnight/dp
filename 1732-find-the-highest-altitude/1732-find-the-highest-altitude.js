/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let ans = 0
    let newArr = [0]
    for (let i = 0; i < gain.length; i++) {
        let sum = gain[i] + newArr[i]
        newArr.push(sum)
        ans = Math.max(ans, sum)
    }
    return ans
};