const modPowBigInt = (base, exponent, modulus) => {
    let result = 1n;
    let currentBase = ((base % modulus) + modulus) % modulus;
    let currentExponent = exponent;

    while (currentExponent > 0n) {
        if ((currentExponent & 1n) === 1n) {
            result = (result * currentBase) % modulus;
        }

        currentBase = (currentBase * currentBase) % modulus;
        currentExponent >>= 1n;
    }

    return result;
};

const fermatPrimalityTest = (value, iterations) => {
    const n = BigInt(value);
    const rounds = iterations === undefined ? 5 : iterations;

    if (n < 2n) {
        return false;
    }

    if (n === 2n || n === 3n) {
        return true;
    }

    if (n % 2n === 0n) {
        return false;
    }

    for (let round = 0; round < rounds; round += 1) {
        const base = 2n + BigInt(round % Number(n - 3n));

        if (modPowBigInt(base, n - 1n, n) !== 1n) {
            return false;
        }
    }

    return true;
};

module.exports = fermatPrimalityTest;
