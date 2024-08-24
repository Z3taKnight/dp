/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let i = 0
    let ans = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === 0) k -= 1
        while (k < 0) {
            if (nums[i] === 0) k += 1
            i += 1
        }
        ans = Math.max(ans, j - i + 1)
    }
    return ans
};