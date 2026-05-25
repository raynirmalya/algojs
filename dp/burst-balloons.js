const burstBalloons = (values) => {
    const balloons = [1].concat(values, [1]);
    const length = balloons.length;
    const dp = Array.from({ length }, () => new Array(length).fill(0));

    for (let size = 2; size < length; size += 1) {
        for (let left = 0; left + size < length; left += 1) {
            const right = left + size;

            for (let middle = left + 1; middle < right; middle += 1) {
                dp[left][right] = Math.max(
                    dp[left][right],
                    dp[left][middle] +
                        dp[middle][right] +
                        (balloons[left] * balloons[middle] * balloons[right])
                );
            }
        }
    }

    return dp[0][length - 1];
};

module.exports = burstBalloons;
