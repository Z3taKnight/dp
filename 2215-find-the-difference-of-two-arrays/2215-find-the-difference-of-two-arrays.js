/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let unique1 = new Set(nums1)
    let unique2 = new Set(nums2)
    for (let num of nums1) {
        unique2.delete(num)
    }
    for (let num of nums2) {
        unique1.delete(num)
    }
    return [Array.from(unique1), Array.from(unique2)]
};