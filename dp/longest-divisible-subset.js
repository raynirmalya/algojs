const longestDivisibleSubset = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("longestDivisibleSubset expects an array.");
    }

    if (values.length === 0) {
        return [];
    }

    const sorted = values.slice().sort((first, second) => first - second);
    const dp = new Array(sorted.length).fill(1);
    const previous = new Array(sorted.length).fill(-1);
    let bestIndex = 0;

    for (let end = 0; end < sorted.length; end += 1) {
        for (let start = 0; start < end; start += 1) {
            if (sorted[end] % sorted[start] === 0 && dp[start] + 1 > dp[end]) {
                dp[end] = dp[start] + 1;
                previous[end] = start;
            }
        }

        if (dp[end] > dp[bestIndex]) {
            bestIndex = end;
        }
    }

    const subset = [];
    let current = bestIndex;

    while (current !== -1) {
        subset.push(sorted[current]);
        current = previous[current];
    }

    return subset.reverse();
};

module.exports = longestDivisibleSubset;
