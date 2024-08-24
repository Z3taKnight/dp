/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const length = nums.length
    const result = new Array(length)

    for (let i = 0, productToLeft = 1; i < length; i++) {
        result[i] = productToLeft
        productToLeft *= nums[i]
    }

    for (let i = length - 1, productToRight = 1; i >= 0; i--) {
        result[i] *= productToRight
        productToRight *= nums[i]
    }

    return result
};