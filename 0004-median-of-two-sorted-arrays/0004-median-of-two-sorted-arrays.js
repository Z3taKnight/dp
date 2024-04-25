/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let median;
    let i = 0,
        j = 0,
        arr = [];

    if ((m + n) % 2 == 0) median = (m + n) / 2 + 1;
    else median = Math.floor((m + n) / 2) + 1;

    while (i + j < median && i < m && j < n) {
        if (nums1[i] > nums2[j]) arr.push(nums2[j++]);
        else if (nums1[i] < nums2[j]) arr.push(nums1[i++]);
        else arr.push(nums1[i++]);
    }
    if (arr.length < median) {
        if (j == n) {
            arr.push(...nums1.slice(i, i + median - arr.length));
        } else if (i == m) {
            arr.push(...nums2.slice(j, j + median - arr.length));
        }
    }
    if ((m + n) % 2 == 0) return (arr[arr.length - 1] + arr[arr.length - 2]) / 2;
    else return arr[arr.length - 1];
};