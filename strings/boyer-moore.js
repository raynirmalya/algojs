const buildLastOccurrence = (pattern) => {
    const table = new Map();

    for (let index = 0; index < pattern.length; index += 1) {
        table.set(pattern[index], index);
    }

    return table;
};

const boyerMoore = (text, pattern) => {
    if (pattern.length === 0) {
        return [0];
    }

    const lastOccurrence = buildLastOccurrence(pattern);
    const matches = [];
    let shift = 0;

    while (shift <= text.length - pattern.length) {
        let index = pattern.length - 1;

        while (index >= 0 && pattern[index] === text[shift + index]) {
            index -= 1;
        }

        if (index < 0) {
            matches.push(shift);

            if (shift + pattern.length < text.length) {
                const nextChar = text[shift + pattern.length];
                shift += pattern.length - (lastOccurrence.has(nextChar) ? lastOccurrence.get(nextChar) : -1);
            } else {
                shift += 1;
            }
        } else {
            const mismatchChar = text[shift + index];
            const lastIndex = lastOccurrence.has(mismatchChar) ? lastOccurrence.get(mismatchChar) : -1;
            shift += Math.max(1, index - lastIndex);
        }
    }

    return matches;
};

module.exports = boyerMoore;
