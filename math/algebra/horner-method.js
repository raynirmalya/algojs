const hornerMethod = (coefficients, x) => {
    if (!Array.isArray(coefficients)) {
        throw new TypeError("hornerMethod expects a coefficients array.");
    }

    return coefficients.reduce((accumulator, coefficient) => (accumulator * x) + coefficient, 0);
};

module.exports = hornerMethod;
