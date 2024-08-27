/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums[0] > target && nums[nums.length - 1] < target) return -1
    if (target >= nums[0]) {
        let i = 0
        while (i < nums.length) {
            if (nums[i] == target) return i
            i += 1
        }
    }
    else {
        let i = nums.length - 1
        while (i > -1) {
            if (nums[i] == target) return i
            i -= 1
        }
    }
    return -1
};