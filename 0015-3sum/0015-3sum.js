/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    let len = nums.length;
    for (let i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let j = i + 1;
        let k = len - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum > 0) {
                k -= 1;
            } else if (sum < 0) {
                j += 1;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j += 1;
                k -= 1;
                while (j < k && nums[j] == nums[j - 1]) j += 1;
                while (j < k && nums[k] == nums[k + 1]) k -= 1;
            }
        }
    }
    return res;
}