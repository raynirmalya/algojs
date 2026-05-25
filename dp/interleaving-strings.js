const interleavingStrings = (firstText, secondText, targetText) => {
    if (firstText.length + secondText.length !== targetText.length) {
        return false;
    }

    const rows = firstText.length + 1;
    const columns = secondText.length + 1;
    const dp = Array.from({ length: rows }, () => new Array(columns).fill(false));
    dp[0][0] = true;

    for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
            const index = row + column;

            if (row > 0 && firstText[row - 1] === targetText[index - 1]) {
                dp[row][column] = dp[row][column] || dp[row - 1][column];
            }

            if (column > 0 && secondText[column - 1] === targetText[index - 1]) {
                dp[row][column] = dp[row][column] || dp[row][column - 1];
            }
        }
    }

    return dp[firstText.length][secondText.length];
};

module.exports = interleavingStrings;
