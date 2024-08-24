/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    if (nums.length < 3) return false;
    let first = Infinity;
    let second = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (current <= first) first = current;
        else if (current <= second) second = current;
        else return true;
    }
    return false;
};
