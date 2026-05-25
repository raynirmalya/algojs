const partitionEqualSubsetSum = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("partitionEqualSubsetSum expects an array.");
    }

    const total = values.reduce((sum, value) => sum + value, 0);

    if (total % 2 !== 0) {
        return false;
    }

    const target = total / 2;
    const reachable = new Array(target + 1).fill(false);
    reachable[0] = true;

    values.forEach((value) => {
        for (let sum = target; sum >= value; sum -= 1) {
            reachable[sum] = reachable[sum] || reachable[sum - value];
        }
    });

    return reachable[target];
};

module.exports = partitionEqualSubsetSum;
