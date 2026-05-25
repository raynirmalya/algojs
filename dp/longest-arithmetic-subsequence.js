const longestArithmeticSubsequence = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("longestArithmeticSubsequence expects an array.");
    }

    const dp = values.map(() => new Map());
    let best = values.length > 0 ? 1 : 0;

    for (let end = 0; end < values.length; end += 1) {
        for (let start = 0; start < end; start += 1) {
            const difference = values[end] - values[start];
            const length = (dp[start].get(difference) || 1) + 1;
            dp[end].set(difference, Math.max(dp[end].get(difference) || 0, length));
            best = Math.max(best, dp[end].get(difference));
        }
    }

    return best;
};

module.exports = longestArithmeticSubsequence;
