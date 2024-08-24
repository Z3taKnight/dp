/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let newMap = new Map();
    let count = Number.MIN_VALUE,
        maxNum;
    nums.forEach((each) => {
        if (newMap.has(each)) {
            newMap.set(each, newMap.get(each) + 1);
            if (newMap.get(each) > count) {
                count = newMap.get(each);
                maxNum = each;
            }
        } else {
            newMap.set(each, 1);
            if (newMap.get(each) > count) {
                count = newMap.get(each);
                maxNum = each;
            }
        }
    });
    return maxNum
};