const fastModularExponentiation = (base, exponent, modulus) => {
    if (!Number.isInteger(base) || !Number.isInteger(exponent) || !Number.isInteger(modulus)) {
        throw new TypeError("fastModularExponentiation expects integer inputs.");
    }

    if (modulus === 0) {
        throw new RangeError("Modulus must not be zero.");
    }

    if (exponent < 0) {
        throw new RangeError("Exponent must be non-negative.");
    }

    let result = 1 % modulus;
    let currentBase = ((base % modulus) + modulus) % modulus;
    let currentExponent = exponent;

    while (currentExponent > 0) {
        if (currentExponent % 2 === 1) {
            result = (result * currentBase) % modulus;
        }

        currentBase = (currentBase * currentBase) % modulus;
        currentExponent = Math.floor(currentExponent / 2);
    }

    return result;
};

module.exports = fastModularExponentiation;
