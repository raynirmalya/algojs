const primeFactorization = require("./prime-factorization");

const eulerTotient = (value) => {
    if (!Number.isInteger(value) || value < 0) {
        throw new TypeError("eulerTotient expects a non-negative integer.");
    }

    if (value === 0) {
        return 0;
    }

    let result = value;

    primeFactorization(value).forEach(({ prime }) => {
        result -= result / prime;
    });

    return result;
};

module.exports = eulerTotient;
