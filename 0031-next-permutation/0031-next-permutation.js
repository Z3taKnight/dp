/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    const length = nums.length;
    let i = length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i >= 0) {
        for (let swapIndex = length - 1; swapIndex > i; swapIndex--) {
            if (nums[swapIndex] > nums[i]) {
                [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]];
                break;
            }
        }
    }
    let start = i + 1;
    let end = length - 1;
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
};