const fastModularExponentiation = require("./fast-modular-exponentiation");
const modularInverse = require("./modular-inverse");

const babyStepGiantStep = (base, target, modulus) => {
    if (!Number.isInteger(base) || !Number.isInteger(target) || !Number.isInteger(modulus) || modulus <= 1) {
        throw new TypeError("babyStepGiantStep expects integer base, target, and modulus.");
    }

    const m = Math.ceil(Math.sqrt(modulus));
    const babies = new Map();
    let value = 1 % modulus;

    for (let step = 0; step < m; step += 1) {
        if (!babies.has(value)) {
            babies.set(value, step);
        }

        value = (value * base) % modulus;
    }

    const factorInverse = modularInverse(fastModularExponentiation(base, m, modulus), modulus);

    if (factorInverse === null) {
        return null;
    }

    let giant = target % modulus;

    for (let step = 0; step <= m; step += 1) {
        if (babies.has(giant)) {
            return (step * m) + babies.get(giant);
        }

        giant = (giant * factorInverse) % modulus;
    }

    return null;
};

module.exports = babyStepGiantStep;
