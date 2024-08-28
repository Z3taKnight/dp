/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let arr = [-1, -1]
    let found = false
    nums.forEach((item, index) => {
        if (item == target) {
            if (!found) {
                arr[0] = index
                arr[1] = index
                found = true
            }
            else {
                arr[1] = index
            }
        }
    })
    return arr
};