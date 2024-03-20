/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let arr = [];
  let temp = [];

  function tracking(num, sum) {
    if (sum === 0 && temp.length === k) {
      arr.push([...temp]);
      return;
    }

    if (num > 9 || num > sum || temp.length > k) {
      return;
    }

    temp.push(num);

    tracking(num + 1, sum - num);
    temp.pop();
    tracking(num + 1, sum);
  }

  tracking(1, n);
  return arr;
};

console.log(combinationSum3(3, 9));
