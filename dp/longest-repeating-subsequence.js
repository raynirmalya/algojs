const longestRepeatingSubsequence = (text) => {
    const length = text.length;
    const dp = Array.from({ length: length + 1 }, () => new Array(length + 1).fill(0));

    for (let first = 1; first <= length; first += 1) {
        for (let second = 1; second <= length; second += 1) {
            if (text[first - 1] === text[second - 1] && first !== second) {
                dp[first][second] = dp[first - 1][second - 1] + 1;
            } else {
                dp[first][second] = Math.max(dp[first - 1][second], dp[first][second - 1]);
            }
        }
    }

    return dp[length][length];
};

module.exports = longestRepeatingSubsequence;
