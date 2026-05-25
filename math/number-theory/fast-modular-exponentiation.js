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

    const modulusBigInt = BigInt(modulus);
    let result = 1n % modulusBigInt;
    let currentBase = BigInt(((base % modulus) + modulus) % modulus);
    let currentExponent = exponent;

    while (currentExponent > 0) {
        if (currentExponent % 2 === 1) {
            result = (result * currentBase) % modulusBigInt;
        }

        currentBase = (currentBase * currentBase) % modulusBigInt;
        currentExponent = Math.floor(currentExponent / 2);
    }

    return Number(result);
};

module.exports = fastModularExponentiation;
