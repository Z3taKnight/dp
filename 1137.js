/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 1;
  let sum = 2;
  let arr = [0, 1, 1];
  n = n - 2;
  while (n > 0) {
    sum = arr[0] + arr[1] + arr[2];
    arr.shift();
    arr.push(sum);
    n -= 1;
  }
  return sum;
};
