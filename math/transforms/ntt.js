const fastModularExponentiation = require("../number-theory/fast-modular-exponentiation");
const modularInverse = require("../number-theory/modular-inverse");

const modMultiply = (first, second, modulus) =>
    Number((BigInt(first) * BigInt(second)) % BigInt(modulus));

const bitReversePermutation = (values) => {
    const size = values.length;
    let index = 0;

    for (let current = 1; current < size; current += 1) {
        let bit = size >> 1;

        while (index & bit) {
            index ^= bit;
            bit >>= 1;
        }

        index ^= bit;

        if (current < index) {
            [values[current], values[index]] = [values[index], values[current]];
        }
    }
};

const ntt = (values, invert, modulus, primitiveRoot) => {
    const mod = modulus || 998244353;
    const root = primitiveRoot || 3;
    const result = values.slice();
    bitReversePermutation(result);

    for (let length = 2; length <= result.length; length <<= 1) {
        const rootPower = fastModularExponentiation(root, (mod - 1) / length, mod);
        const wlen = invert ? modularInverse(rootPower, mod) : rootPower;

        for (let offset = 0; offset < result.length; offset += length) {
            let factor = 1;

            for (let index = 0; index < length / 2; index += 1) {
                const even = result[offset + index];
                const odd = modMultiply(result[offset + index + (length / 2)], factor, mod);
                result[offset + index] = (even + odd) % mod;
                result[offset + index + (length / 2)] = (even - odd + mod) % mod;
                factor = modMultiply(factor, wlen, mod);
            }
        }
    }

    if (invert) {
        const inverseLength = modularInverse(result.length, mod);
        return result.map((value) => modMultiply(value, inverseLength, mod));
    }

    return result;
};

module.exports = ntt;
