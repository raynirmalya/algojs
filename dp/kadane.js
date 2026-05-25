const kadane = (values) => {
    if (!Array.isArray(values) || values.length === 0) {
        throw new TypeError("kadane expects a non-empty array.");
    }

    let bestSum = values[0];
    let currentSum = values[0];
    let bestStart = 0;
    let bestEnd = 0;
    let currentStart = 0;

    for (let index = 1; index < values.length; index += 1) {
        if (currentSum + values[index] < values[index]) {
            currentSum = values[index];
            currentStart = index;
        } else {
            currentSum += values[index];
        }

        if (currentSum > bestSum) {
            bestSum = currentSum;
            bestStart = currentStart;
            bestEnd = index;
        }
    }

    return {
        maxSum: bestSum,
        start: bestStart,
        end: bestEnd,
        subarray: values.slice(bestStart, bestEnd + 1),
    };
};

module.exports = kadane;
