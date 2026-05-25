const bisectionMethod = (fn, left, right, options) => {
    if (typeof fn !== "function" || typeof left !== "number" || typeof right !== "number") {
        throw new TypeError("bisectionMethod expects a function and two numeric bounds.");
    }

    const settings = options || {};
    const tolerance = settings.tolerance || 1e-8;
    const maxIterations = settings.maxIterations || 100;
    let low = left;
    let high = right;

    for (let iteration = 0; iteration < maxIterations; iteration += 1) {
        const middle = (low + high) / 2;
        const value = fn(middle);

        if (Math.abs(value) <= tolerance || (high - low) / 2 <= tolerance) {
            return middle;
        }

        if (fn(low) * value < 0) {
            high = middle;
        } else {
            low = middle;
        }
    }

    return (low + high) / 2;
};

module.exports = bisectionMethod;
