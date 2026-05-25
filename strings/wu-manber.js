const suffixesForPattern = (pattern, blockSize) => {
    const result = [];

    for (let index = 0; index <= pattern.length - blockSize; index += 1) {
        result.push(pattern.slice(index, index + blockSize));
    }

    return result;
};

const wuManber = (text, patterns, blockSize) => {
    if (typeof text !== "string" || !Array.isArray(patterns)) {
        throw new TypeError("wuManber expects a text string and an array of patterns.");
    }

    const filtered = patterns.filter((pattern) => typeof pattern === "string" && pattern.length > 0);

    if (filtered.length === 0) {
        return [];
    }

    const minLength = Math.min(...filtered.map((pattern) => pattern.length));
    const block = Math.max(1, Math.min(blockSize || 2, minLength));
    const shift = new Map();
    const candidates = new Map();

    filtered.forEach((pattern) => {
        for (let index = 0; index <= pattern.length - block; index += 1) {
            const suffix = pattern.slice(pattern.length - block - index, pattern.length - index);
            const distance = index;

            if (!shift.has(suffix) || distance < shift.get(suffix)) {
                shift.set(suffix, distance);
            }

            if (distance === 0) {
                if (!candidates.has(suffix)) {
                    candidates.set(suffix, []);
                }

                candidates.get(suffix).push(pattern);
            }
        }
    });

    const matches = [];
    let index = minLength - 1;

    while (index < text.length) {
        const blockText = text.slice(index - block + 1, index + 1);
        const move = shift.has(blockText) ? shift.get(blockText) : minLength - block + 1;

        if (move > 0) {
            index += move;
            continue;
        }

        (candidates.get(blockText) || []).forEach((pattern) => {
            const start = index - pattern.length + 1;

            if (start >= 0 && text.slice(start, start + pattern.length) === pattern) {
                matches.push({ pattern, index: start });
            }
        });

        index += 1;
    }

    return matches;
};

module.exports = wuManber;
