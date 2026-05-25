const maximumSumIncreasingSubsequence = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("maximumSumIncreasingSubsequence expects an array.");
    }

    if (values.length === 0) {
        return {
            maxSum: 0,
            sequence: [],
        };
    }

    const dp = values.slice();
    const previous = new Array(values.length).fill(-1);
    let bestIndex = 0;

    for (let end = 0; end < values.length; end += 1) {
        for (let start = 0; start < end; start += 1) {
            if (values[start] < values[end] && dp[start] + values[end] > dp[end]) {
                dp[end] = dp[start] + values[end];
                previous[end] = start;
            }
        }

        if (dp[end] > dp[bestIndex]) {
            bestIndex = end;
        }
    }

    const sequence = [];
    let current = bestIndex;

    while (current !== -1) {
        sequence.push(values[current]);
        current = previous[current];
    }

    return {
        maxSum: dp[bestIndex],
        sequence: sequence.reverse(),
    };
};

module.exports = maximumSumIncreasingSubsequence;
