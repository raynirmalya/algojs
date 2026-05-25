const minimumSubsetSumDifference = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("minimumSubsetSumDifference expects an array.");
    }

    const total = values.reduce((sum, value) => sum + value, 0);
    const target = Math.floor(total / 2);
    const reachable = new Array(target + 1).fill(false);
    reachable[0] = true;

    values.forEach((value) => {
        for (let sum = target; sum >= value; sum -= 1) {
            reachable[sum] = reachable[sum] || reachable[sum - value];
        }
    });

    for (let sum = target; sum >= 0; sum -= 1) {
        if (reachable[sum]) {
            return total - (2 * sum);
        }
    }

    return total;
};

module.exports = minimumSubsetSumDifference;
