/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    let dp = new Array(n + 1).fill(0).map(() => new Array(3).fill(0));
    dp[1][0] = 1;
    dp[2][0] = 2;
    dp[2][1] = 1;
    dp[2][2] = 1;
    let kmod = 1e9 + 7;
    for (let i = 3; i <= n; i++) {
        dp[i][0] =
            (dp[i - 1][0] + dp[i - 2][0] + dp[i - 1][1] + dp[i - 1][2]) % kmod;
        dp[i][1] = (dp[i - 2][0] + dp[i - 1][2]) % kmod;
        dp[i][2] = (dp[i - 2][0] + dp[i - 1][1]) % kmod;
    }
    return dp[n][0];
};