/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let len = nums.length;
  let lastElems = nums.splice(nums.length - (k % nums.length), nums.length);
  nums.unshift(...lastElems);
  nums.length = len;
};
