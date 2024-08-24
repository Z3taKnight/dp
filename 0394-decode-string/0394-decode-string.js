/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let ans = "";
    let stack = [];
    let count = 0;
    for (let cur of s) {
        if (/[0-9]/.test(cur)) {
            count = count * 10 + Number(cur);
        } else if (/[a-z]/.test(cur)) {
            ans += cur;
        } else if (cur == "[") {
            stack.push([ans, count]);
            ans = "";
            count = 0;
        } else {
            let [pre, count] = stack.pop();
            ans = pre + ans.repeat(count);
        }
    }
    return ans;
};
