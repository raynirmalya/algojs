const extendedEuclidean = require("./extended-euclidean");

const modularInverse = (value, modulus) => {
    if (!Number.isInteger(value) || !Number.isInteger(modulus) || modulus <= 0) {
        throw new TypeError("modularInverse expects an integer value and a positive modulus.");
    }

    const result = extendedEuclidean(value, modulus);

    if (result.gcd !== 1) {
        return null;
    }

    return ((result.x % modulus) + modulus) % modulus;
};

module.exports = modularInverse;
