const editDistance = (firstText, secondText) => {
    const rows = firstText.length + 1;
    const columns = secondText.length + 1;
    const dp = Array.from({ length: rows }, () => new Array(columns).fill(0));

    for (let row = 0; row < rows; row += 1) {
        dp[row][0] = row;
    }

    for (let column = 0; column < columns; column += 1) {
        dp[0][column] = column;
    }

    for (let row = 1; row < rows; row += 1) {
        for (let column = 1; column < columns; column += 1) {
            if (firstText[row - 1] === secondText[column - 1]) {
                dp[row][column] = dp[row - 1][column - 1];
            } else {
                dp[row][column] =
                    Math.min(dp[row - 1][column], dp[row][column - 1], dp[row - 1][column - 1]) + 1;
            }
        }
    }

    return dp[firstText.length][secondText.length];
};

module.exports = editDistance;
