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

const millerRabin = (value) => {
    const n = BigInt(value);

    if (n < 2n) {
        return false;
    }

    if (n === 2n || n === 3n) {
        return true;
    }

    if (n % 2n === 0n) {
        return false;
    }

    let d = n - 1n;
    let s = 0n;

    while ((d & 1n) === 0n) {
        d >>= 1n;
        s += 1n;
    }

    const bases = [2n, 3n, 5n, 7n, 11n, 13n, 17n];

    for (const base of bases) {
        if (base >= n) {
            continue;
        }

        let x = modPowBigInt(base, d, n);

        if (x === 1n || x === n - 1n) {
            continue;
        }

        let passed = false;

        for (let round = 1n; round < s; round += 1n) {
            x = (x * x) % n;

            if (x === n - 1n) {
                passed = true;
                break;
            }
        }

        if (!passed) {
            return false;
        }
    }

    return true;
};

module.exports = millerRabin;
