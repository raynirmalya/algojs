const integerBreak = (value) => {
    if (!Number.isInteger(value) || value < 2) {
        throw new TypeError("integerBreak expects an integer greater than or equal to 2.");
    }

    const dp = new Array(value + 1).fill(0);
    dp[1] = 1;

    for (let current = 2; current <= value; current += 1) {
        for (let part = 1; part < current; part += 1) {
            dp[current] = Math.max(dp[current], part * Math.max(current - part, dp[current - part]));
        }
    }

    return dp[value];
};

module.exports = integerBreak;
