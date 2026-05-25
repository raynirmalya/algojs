const derangements = (n) => {
    if (!Number.isInteger(n) || n < 0) {
        throw new TypeError("derangements expects a non-negative integer.");
    }

    if (n === 0) {
        return 1;
    }

    if (n === 1) {
        return 0;
    }

    let previousTwo = 1;
    let previousOne = 0;

    for (let value = 2; value <= n; value += 1) {
        const current = (value - 1) * (previousOne + previousTwo);
        previousTwo = previousOne;
        previousOne = current;
    }

    return previousOne;
};

module.exports = derangements;
