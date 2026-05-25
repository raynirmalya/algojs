const zeroOneKnapsack = (weights, values, capacity) => {
    if (!Array.isArray(weights) || !Array.isArray(values) || weights.length !== values.length) {
        throw new TypeError("zeroOneKnapsack expects weights and values arrays of equal length.");
    }

    const itemCount = weights.length;
    const dp = Array.from({ length: itemCount + 1 }, () => new Array(capacity + 1).fill(0));

    for (let item = 1; item <= itemCount; item += 1) {
        for (let currentCapacity = 0; currentCapacity <= capacity; currentCapacity += 1) {
            dp[item][currentCapacity] = dp[item - 1][currentCapacity];

            if (weights[item - 1] <= currentCapacity) {
                dp[item][currentCapacity] = Math.max(
                    dp[item][currentCapacity],
                    dp[item - 1][currentCapacity - weights[item - 1]] + values[item - 1]
                );
            }
        }
    }

    const selectedItems = [];
    let remainingCapacity = capacity;

    for (let item = itemCount; item > 0; item -= 1) {
        if (dp[item][remainingCapacity] !== dp[item - 1][remainingCapacity]) {
            selectedItems.push(item - 1);
            remainingCapacity -= weights[item - 1];
        }
    }

    selectedItems.reverse();

    return {
        maxValue: dp[itemCount][capacity],
        selectedItems,
    };
};

module.exports = zeroOneKnapsack;
