const uniquePathsWithObstacles = (grid) => {
    const rows = grid.length;
    const columns = grid[0].length;
    const dp = Array.from({ length: rows }, () => new Array(columns).fill(0));
    dp[0][0] = grid[0][0] === 1 ? 0 : 1;

    for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
            if (grid[row][column] === 1) {
                dp[row][column] = 0;
                continue;
            }

            if (row > 0) {
                dp[row][column] += dp[row - 1][column];
            }

            if (column > 0) {
                dp[row][column] += dp[row][column - 1];
            }
        }
    }

    return dp[rows - 1][columns - 1];
};

module.exports = uniquePathsWithObstacles;
