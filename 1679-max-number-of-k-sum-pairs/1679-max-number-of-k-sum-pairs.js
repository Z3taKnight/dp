/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let count = 0;
    let map = new Map();
    for (const i of nums) {
        let diff = k - i;
        if (map.has(diff) && map.get(diff) > 0) {
            count += 1;
            map.set(diff, map.get(diff) - 1);
        } else {
            map.set(i, (map.get(i) || 0) + 1);
        }
    }
    return count;
};