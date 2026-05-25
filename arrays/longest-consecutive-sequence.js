const longestConsecutiveSequence = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("longestConsecutiveSequence expects an array.");
    }

    const seen = new Set(values);
    let best = 0;

    seen.forEach((value) => {
        if (seen.has(value - 1)) {
            return;
        }

        let current = value;
        let length = 1;

        while (seen.has(current + 1)) {
            current += 1;
            length += 1;
        }

        best = Math.max(best, length);
    });

    return best;
};

module.exports = longestConsecutiveSequence;
