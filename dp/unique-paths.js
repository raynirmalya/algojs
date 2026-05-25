const uniquePaths = (rows, columns) => {
    const dp = Array.from({ length: rows }, () => new Array(columns).fill(1));

    for (let row = 1; row < rows; row += 1) {
        for (let column = 1; column < columns; column += 1) {
            dp[row][column] = dp[row - 1][column] + dp[row][column - 1];
        }
    }

    return dp[rows - 1][columns - 1];
};

module.exports = uniquePaths;
