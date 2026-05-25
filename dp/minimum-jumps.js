const minimumJumps = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("minimumJumps expects an array.");
    }

    if (values.length <= 1) {
        return 0;
    }

    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let index = 0; index < values.length - 1; index += 1) {
        farthest = Math.max(farthest, index + values[index]);

        if (index === currentEnd) {
            jumps += 1;
            currentEnd = farthest;
        }
    }

    return currentEnd >= values.length - 1 ? jumps : Infinity;
};

module.exports = minimumJumps;
