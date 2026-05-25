const wildcardMatching = (text, pattern) => {
    if (typeof text !== "string" || typeof pattern !== "string") {
        throw new TypeError("wildcardMatching expects string inputs.");
    }

    const rows = text.length + 1;
    const columns = pattern.length + 1;
    const dp = Array.from({ length: rows }, () => new Array(columns).fill(false));

    dp[0][0] = true;

    for (let column = 1; column < columns; column += 1) {
        dp[0][column] = dp[0][column - 1] && pattern[column - 1] === "*";
    }

    for (let row = 1; row < rows; row += 1) {
        for (let column = 1; column < columns; column += 1) {
            if (pattern[column - 1] === "*") {
                dp[row][column] = dp[row][column - 1] || dp[row - 1][column];
            } else if (pattern[column - 1] === "?" || pattern[column - 1] === text[row - 1]) {
                dp[row][column] = dp[row - 1][column - 1];
            }
        }
    }

    return dp[text.length][pattern.length];
};

module.exports = wildcardMatching;
