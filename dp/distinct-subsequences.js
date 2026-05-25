const distinctSubsequences = (source, target) => {
    const rows = source.length + 1;
    const columns = target.length + 1;
    const dp = Array.from({ length: rows }, () => new Array(columns).fill(0));

    for (let row = 0; row < rows; row += 1) {
        dp[row][0] = 1;
    }

    for (let row = 1; row < rows; row += 1) {
        for (let column = 1; column < columns; column += 1) {
            dp[row][column] = dp[row - 1][column];

            if (source[row - 1] === target[column - 1]) {
                dp[row][column] += dp[row - 1][column - 1];
            }
        }
    }

    return dp[source.length][target.length];
};

module.exports = distinctSubsequences;
