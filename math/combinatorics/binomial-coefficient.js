const binomialCoefficient = (n, k) => {
    if (!Number.isInteger(n) || !Number.isInteger(k) || n < 0 || k < 0 || k > n) {
        throw new TypeError("binomialCoefficient expects integers with 0 <= k <= n.");
    }

    const target = Math.min(k, n - k);
    let result = 1;

    for (let index = 1; index <= target; index += 1) {
        result = (result * (n - target + index)) / index;
    }

    return Math.round(result);
};

module.exports = binomialCoefficient;
