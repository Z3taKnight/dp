/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let count = 0;
    for (const curr of nums) {
        if (count < 2 || curr !== nums[count - 2]) {
            nums[count] = curr;
            count++;
        }
    }
    return count;
};