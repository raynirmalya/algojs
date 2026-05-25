const unboundedKnapsack = (weights, values, capacity) => {
    if (!Array.isArray(weights) || !Array.isArray(values) || weights.length !== values.length) {
        throw new TypeError("unboundedKnapsack expects weights and values arrays of equal length.");
    }

    const dp = new Array(capacity + 1).fill(0);
    const previousItem = new Array(capacity + 1).fill(-1);

    for (let currentCapacity = 0; currentCapacity <= capacity; currentCapacity += 1) {
        for (let item = 0; item < weights.length; item += 1) {
            if (weights[item] <= currentCapacity) {
                const candidate = dp[currentCapacity - weights[item]] + values[item];

                if (candidate > dp[currentCapacity]) {
                    dp[currentCapacity] = candidate;
                    previousItem[currentCapacity] = item;
                }
            }
        }
    }

    const selectedItems = [];
    let remainingCapacity = capacity;

    while (remainingCapacity > 0 && previousItem[remainingCapacity] !== -1) {
        const item = previousItem[remainingCapacity];
        selectedItems.push(item);
        remainingCapacity -= weights[item];
    }

    selectedItems.reverse();

    return {
        maxValue: dp[capacity],
        selectedItems,
    };
};

module.exports = unboundedKnapsack;
