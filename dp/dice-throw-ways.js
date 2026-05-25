const diceThrowWays = (diceCount, faces, target) => {
    if (!Number.isInteger(diceCount) || !Number.isInteger(faces) || !Number.isInteger(target)) {
        throw new TypeError("diceThrowWays expects integer dice count, face count, and target.");
    }

    const dp = Array.from({ length: diceCount + 1 }, () => new Array(target + 1).fill(0));
    dp[0][0] = 1;

    for (let dice = 1; dice <= diceCount; dice += 1) {
        for (let sum = 1; sum <= target; sum += 1) {
            for (let face = 1; face <= faces && face <= sum; face += 1) {
                dp[dice][sum] += dp[dice - 1][sum - face];
            }
        }
    }

    return dp[diceCount][target];
};

module.exports = diceThrowWays;
