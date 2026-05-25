const minimumFallingPathSum = (matrix) => {
    if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
        throw new TypeError("minimumFallingPathSum expects a non-empty matrix.");
    }

    const dp = matrix.map((row) => row.slice());

    for (let row = 1; row < dp.length; row += 1) {
        for (let column = 0; column < dp[row].length; column += 1) {
            const above = dp[row - 1][column];
            const left = column > 0 ? dp[row - 1][column - 1] : Infinity;
            const right = column + 1 < dp[row].length ? dp[row - 1][column + 1] : Infinity;
            dp[row][column] += Math.min(above, left, right);
        }
    }

    return Math.min(...dp[dp.length - 1]);
};

module.exports = minimumFallingPathSum;
