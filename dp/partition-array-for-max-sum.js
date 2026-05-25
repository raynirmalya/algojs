const partitionArrayForMaxSum = (values, partitionSize) => {
    if (!Array.isArray(values) || !Number.isInteger(partitionSize) || partitionSize <= 0) {
        throw new TypeError("partitionArrayForMaxSum expects an array and a positive partition size.");
    }

    const dp = new Array(values.length + 1).fill(0);

    for (let end = 1; end <= values.length; end += 1) {
        let currentMax = 0;

        for (let length = 1; length <= partitionSize && end - length >= 0; length += 1) {
            currentMax = Math.max(currentMax, values[end - length]);
            dp[end] = Math.max(dp[end], dp[end - length] + (currentMax * length));
        }
    }

    return dp[values.length];
};

module.exports = partitionArrayForMaxSum;
