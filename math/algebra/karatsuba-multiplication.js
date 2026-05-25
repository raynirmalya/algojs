const tenPow = (exponent) => 10n ** BigInt(exponent);

const digitLength = (value) => value.toString().length;

const karatsubaMultiply = (firstValue, secondValue) => {
    const a = BigInt(firstValue);
    const b = BigInt(secondValue);

    if (a < 10n || b < 10n) {
        return a * b;
    }

    const length = Math.max(digitLength(a), digitLength(b));
    const half = Math.floor(length / 2);
    const power = tenPow(half);

    const highA = a / power;
    const lowA = a % power;
    const highB = b / power;
    const lowB = b % power;

    const z0 = karatsubaMultiply(lowA, lowB);
    const z1 = karatsubaMultiply(lowA + highA, lowB + highB);
    const z2 = karatsubaMultiply(highA, highB);

    return (z2 * tenPow(half * 2)) + ((z1 - z2 - z0) * power) + z0;
};

module.exports = karatsubaMultiply;
