const fastModularExponentiation = require("./fast-modular-exponentiation");

const legendreSymbol = (a, prime) => fastModularExponentiation(a, (prime - 1) / 2, prime);

const tonelliShanks = (value, prime) => {
    if (!Number.isInteger(value) || !Number.isInteger(prime) || prime <= 2) {
        throw new TypeError("tonelliShanks expects an integer value and an odd prime.");
    }

    const normalized = ((value % prime) + prime) % prime;

    if (normalized === 0) {
        return 0;
    }

    if (prime === 2) {
        return normalized;
    }

    if (legendreSymbol(normalized, prime) !== 1) {
        return null;
    }

    if (prime % 4 === 3) {
        return fastModularExponentiation(normalized, (prime + 1) / 4, prime);
    }

    let q = prime - 1;
    let s = 0;

    while (q % 2 === 0) {
        q /= 2;
        s += 1;
    }

    let z = 2;
    while (legendreSymbol(z, prime) !== prime - 1) {
        z += 1;
    }

    let m = s;
    let c = fastModularExponentiation(z, q, prime);
    let t = fastModularExponentiation(normalized, q, prime);
    let root = fastModularExponentiation(normalized, (q + 1) / 2, prime);

    while (t !== 1) {
        let i = 1;
        let temp = (t * t) % prime;

        while (temp !== 1) {
            temp = (temp * temp) % prime;
            i += 1;
        }

        const exponent = 1 << (m - i - 1);
        const factor = fastModularExponentiation(c, exponent, prime);
        root = (root * factor) % prime;
        t = (t * factor * factor) % prime;
        c = (factor * factor) % prime;
        m = i;
    }

    return root;
};

module.exports = tonelliShanks;
