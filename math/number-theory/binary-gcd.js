const binaryGCD = (firstValue, secondValue) => {
    if (!Number.isInteger(firstValue) || !Number.isInteger(secondValue)) {
        throw new TypeError("binaryGCD expects integer inputs.");
    }

    let a = Math.abs(firstValue);
    let b = Math.abs(secondValue);

    if (a === 0) {
        return b;
    }

    if (b === 0) {
        return a;
    }

    let shift = 0;

    while (((a | b) & 1) === 0) {
        a >>= 1;
        b >>= 1;
        shift += 1;
    }

    while ((a & 1) === 0) {
        a >>= 1;
    }

    while (b !== 0) {
        while ((b & 1) === 0) {
            b >>= 1;
        }

        if (a > b) {
            const temp = a;
            a = b;
            b = temp;
        }

        b -= a;
    }

    return a << shift;
};

module.exports = binaryGCD;
