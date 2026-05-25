const maximumSubarrayCircular = (values) => {
    if (!Array.isArray(values) || values.length === 0) {
        throw new TypeError("maximumSubarrayCircular expects a non-empty array.");
    }

    let total = 0;
    let bestMax = values[0];
    let currentMax = 0;
    let bestMin = values[0];
    let currentMin = 0;

    values.forEach((value) => {
        currentMax = Math.max(value, currentMax + value);
        bestMax = Math.max(bestMax, currentMax);
        currentMin = Math.min(value, currentMin + value);
        bestMin = Math.min(bestMin, currentMin);
        total += value;
    });

    return bestMax < 0 ? bestMax : Math.max(bestMax, total - bestMin);
};

module.exports = maximumSubarrayCircular;
