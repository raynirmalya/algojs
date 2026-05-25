const subsetSumCount = (values, target) => {
    if (!Array.isArray(values) || !Number.isInteger(target) || target < 0) {
        throw new TypeError("subsetSumCount expects an array and a non-negative integer target.");
    }

    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    values.forEach((value) => {
        for (let sum = target; sum >= value; sum -= 1) {
            dp[sum] += dp[sum - value];
        }
    });

    return dp[target];
};

module.exports = subsetSumCount;
