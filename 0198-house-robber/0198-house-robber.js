/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < nums.length; i++) {
        let newCost = Math.max(a + nums[i], b);
        a = b;
        b = newCost;
    }
    return b;
};