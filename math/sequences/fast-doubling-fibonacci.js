const fastDoubling = (n) => {
    if (n === 0n) {
        return [0n, 1n];
    }

    const [first, second] = fastDoubling(n >> 1n);
    const doubled = first * ((2n * second) - first);
    const next = (first * first) + (second * second);

    if (n & 1n) {
        return [next, doubled + next];
    }

    return [doubled, next];
};

const fastDoublingFibonacci = (n) => {
    if (!Number.isInteger(n) || n < 0) {
        throw new TypeError("fastDoublingFibonacci expects a non-negative integer.");
    }

    return fastDoubling(BigInt(n))[0];
};

module.exports = fastDoublingFibonacci;
