const optimalBST = (keys, frequencies) => {
    if (!Array.isArray(keys) || !Array.isArray(frequencies) || keys.length !== frequencies.length) {
        throw new TypeError("optimalBST expects keys and frequencies arrays of equal length.");
    }

    const length = keys.length;
    const dp = Array.from({ length }, () => new Array(length).fill(0));
    const prefix = [0];

    for (let index = 0; index < length; index += 1) {
        prefix[index + 1] = prefix[index] + frequencies[index];
        dp[index][index] = frequencies[index];
    }

    const rangeSum = (left, right) => prefix[right + 1] - prefix[left];

    for (let size = 2; size <= length; size += 1) {
        for (let left = 0; left <= length - size; left += 1) {
            const right = left + size - 1;
            dp[left][right] = Infinity;

            for (let root = left; root <= right; root += 1) {
                const leftCost = root > left ? dp[left][root - 1] : 0;
                const rightCost = root < right ? dp[root + 1][right] : 0;
                dp[left][right] = Math.min(dp[left][right], leftCost + rightCost + rangeSum(left, right));
            }
        }
    }

    return {
        minCost: length === 0 ? 0 : dp[0][length - 1],
    };
};

module.exports = optimalBST;
