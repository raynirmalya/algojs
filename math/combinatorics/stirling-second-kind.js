const stirlingSecondKind = (n, k) => {
    if (!Number.isInteger(n) || !Number.isInteger(k) || n < 0 || k < 0 || k > n) {
        throw new TypeError("stirlingSecondKind expects integers with 0 <= k <= n.");
    }

    const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(0));
    dp[0][0] = 1;

    for (let row = 1; row <= n; row += 1) {
        const limit = Math.min(row, k);
        for (let column = 1; column <= limit; column += 1) {
            dp[row][column] = dp[row - 1][column - 1] + (column * dp[row - 1][column]);
        }
    }

    return dp[n][k];
};

module.exports = stirlingSecondKind;
