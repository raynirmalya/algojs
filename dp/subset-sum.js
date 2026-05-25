const subsetSum = (values, target) => {
    if (!Array.isArray(values) || !Number.isInteger(target) || target < 0) {
        throw new TypeError("subsetSum expects a values array and a non-negative integer target.");
    }

    const reachable = new Array(target + 1).fill(false);
    const previous = new Array(target + 1).fill(-1);
    const usedIndex = new Array(target + 1).fill(-1);
    reachable[0] = true;

    for (let index = 0; index < values.length; index += 1) {
        const value = values[index];

        if (!Number.isInteger(value) || value < 0) {
            throw new TypeError("subsetSum currently supports only non-negative integer values.");
        }

        for (let sum = target; sum >= value; sum -= 1) {
            if (!reachable[sum] && reachable[sum - value]) {
                reachable[sum] = true;
                previous[sum] = sum - value;
                usedIndex[sum] = index;
            }
        }
    }

    if (!reachable[target]) {
        return {
            possible: false,
            subset: [],
        };
    }

    const subset = [];
    let current = target;

    while (current > 0) {
        const index = usedIndex[current];
        subset.push(values[index]);
        current = previous[current];
    }

    subset.reverse();

    return {
        possible: true,
        subset,
    };
};

module.exports = subsetSum;
