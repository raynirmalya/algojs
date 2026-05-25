const targetSum = (values, target) => {
    const total = values.reduce((sum, value) => sum + value, 0);

    if (Math.abs(target) > total || (total + target) % 2 !== 0) {
        return 0;
    }

    const subsetTarget = (total + target) / 2;
    const dp = new Array(subsetTarget + 1).fill(0);
    dp[0] = 1;

    values.forEach((value) => {
        for (let sum = subsetTarget; sum >= value; sum -= 1) {
            dp[sum] += dp[sum - value];
        }
    });

    return dp[subsetTarget];
};

module.exports = targetSum;
