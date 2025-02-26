/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let reachable = 0;
    for (let i = 0; i <= reachable && i < nums.length; i++) {
        reachable = Math.max(reachable, i + nums[i]);
    }
    return reachable >= nums.length - 1;
};