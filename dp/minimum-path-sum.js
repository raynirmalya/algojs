const minimumPathSum = (grid) => {
    if (!Array.isArray(grid) || grid.length === 0 || !Array.isArray(grid[0])) {
        throw new TypeError("minimumPathSum expects a non-empty grid.");
    }

    const rows = grid.length;
    const columns = grid[0].length;
    const dp = Array.from({ length: rows }, () => new Array(columns).fill(0));
    dp[0][0] = grid[0][0];

    for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
            if (row === 0 && column === 0) {
                continue;
            }

            const top = row > 0 ? dp[row - 1][column] : Infinity;
            const left = column > 0 ? dp[row][column - 1] : Infinity;
            dp[row][column] = Math.min(top, left) + grid[row][column];
        }
    }

    return dp[rows - 1][columns - 1];
};

module.exports = minimumPathSum;
