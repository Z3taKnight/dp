/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let i = 0
    let ans = 0
    let k = 1
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === 0) k -= 1
        while (k < 0) {
            if (nums[i] === 0) k += 1
            i += 1
        }
        ans = Math.max(ans, j - i)
    }
    return ans
};