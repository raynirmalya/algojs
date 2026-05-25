const regularExpressionMatching = (text, pattern) => {
    if (typeof text !== "string" || typeof pattern !== "string") {
        throw new TypeError("regularExpressionMatching expects string inputs.");
    }

    const rows = text.length + 1;
    const columns = pattern.length + 1;
    const dp = Array.from({ length: rows }, () => new Array(columns).fill(false));

    dp[0][0] = true;

    for (let column = 2; column < columns; column += 1) {
        if (pattern[column - 1] === "*") {
            dp[0][column] = dp[0][column - 2];
        }
    }

    for (let row = 1; row < rows; row += 1) {
        for (let column = 1; column < columns; column += 1) {
            const patternCharacter = pattern[column - 1];

            if (patternCharacter === "." || patternCharacter === text[row - 1]) {
                dp[row][column] = dp[row - 1][column - 1];
                continue;
            }

            if (patternCharacter === "*") {
                dp[row][column] = dp[row][column - 2];

                const repeatedCharacter = pattern[column - 2];
                if (repeatedCharacter === "." || repeatedCharacter === text[row - 1]) {
                    dp[row][column] = dp[row][column] || dp[row - 1][column];
                }
            }
        }
    }

    return dp[text.length][pattern.length];
};

module.exports = regularExpressionMatching;
