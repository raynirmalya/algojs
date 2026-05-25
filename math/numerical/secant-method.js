const secantMethod = (fn, firstGuess, secondGuess, options) => {
    if (typeof fn !== "function" || typeof firstGuess !== "number" || typeof secondGuess !== "number") {
        throw new TypeError("secantMethod expects a function and two numeric guesses.");
    }

    const settings = options || {};
    const tolerance = settings.tolerance || 1e-8;
    const maxIterations = settings.maxIterations || 100;
    let previous = firstGuess;
    let current = secondGuess;

    for (let iteration = 0; iteration < maxIterations; iteration += 1) {
        const previousValue = fn(previous);
        const currentValue = fn(current);
        const denominator = currentValue - previousValue;

        if (Math.abs(denominator) < Number.EPSILON) {
            break;
        }

        const next = current - (currentValue * (current - previous)) / denominator;

        if (Math.abs(next - current) <= tolerance) {
            return next;
        }

        previous = current;
        current = next;
    }

    return current;
};

module.exports = secantMethod;
