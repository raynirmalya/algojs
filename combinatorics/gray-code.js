const grayCode = (bits) => {
    if (!Number.isInteger(bits) || bits < 0) {
        throw new TypeError("grayCode expects a non-negative integer bit count.");
    }

    const limit = 1 << bits;
    const sequence = [];

    for (let value = 0; value < limit; value += 1) {
        sequence.push(value ^ (value >> 1));
    }

    return sequence;
};

module.exports = grayCode;
