const longestCommonSubstring = (firstText, secondText) => {
    const rows = firstText.length + 1;
    const columns = secondText.length + 1;
    const dp = Array.from({ length: rows }, () => new Array(columns).fill(0));
    let bestLength = 0;
    let bestEnd = 0;

    for (let row = 1; row < rows; row += 1) {
        for (let column = 1; column < columns; column += 1) {
            if (firstText[row - 1] === secondText[column - 1]) {
                dp[row][column] = dp[row - 1][column - 1] + 1;

                if (dp[row][column] > bestLength) {
                    bestLength = dp[row][column];
                    bestEnd = row;
                }
            }
        }
    }

    return {
        length: bestLength,
        substring: firstText.slice(bestEnd - bestLength, bestEnd),
    };
};

module.exports = longestCommonSubstring;
