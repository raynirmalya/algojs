const maximalSquare = (matrix) => {
    if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
        throw new TypeError("maximalSquare expects a non-empty matrix.");
    }

    const rows = matrix.length;
    const columns = matrix[0].length;
    const dp = Array.from({ length: rows + 1 }, () => new Array(columns + 1).fill(0));
    let best = 0;

    for (let row = 1; row <= rows; row += 1) {
        for (let column = 1; column <= columns; column += 1) {
            if (Number(matrix[row - 1][column - 1]) === 1) {
                dp[row][column] = Math.min(dp[row - 1][column], dp[row][column - 1], dp[row - 1][column - 1]) + 1;
                best = Math.max(best, dp[row][column]);
            }
        }
    }

    return best * best;
};

module.exports = maximalSquare;
