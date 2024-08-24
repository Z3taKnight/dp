/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length > 1) {
        let i = 0;
        while (i < nums.length) {
            if (nums[i] == 0) {
                let j = i + 1;
                while (j < nums.length) {
                    if (nums[j] != 0) {
                        nums[i] = nums[j];
                        nums[j] = 0;
                        break;
                    }
                    j++;
                }
            }
            i++;
        }
    }
};