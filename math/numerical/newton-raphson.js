const newtonRaphson = (fn, derivative, initialGuess, options) => {
    if (typeof fn !== "function" || typeof derivative !== "function" || typeof initialGuess !== "number") {
        throw new TypeError("newtonRaphson expects a function, derivative, and initial guess.");
    }

    const settings = options || {};
    const tolerance = settings.tolerance || 1e-8;
    const maxIterations = settings.maxIterations || 100;
    let current = initialGuess;

    for (let iteration = 0; iteration < maxIterations; iteration += 1) {
        const slope = derivative(current);

        if (Math.abs(slope) < Number.EPSILON) {
            break;
        }

        const next = current - (fn(current) / slope);

        if (Math.abs(next - current) <= tolerance) {
            return next;
        }

        current = next;
    }

    return current;
};

module.exports = newtonRaphson;
