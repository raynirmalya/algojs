const bitapSearch = (text, pattern) => {
    if (typeof text !== "string" || typeof pattern !== "string") {
        throw new TypeError("bitapSearch expects string inputs.");
    }

    if (pattern.length === 0 || pattern.length > text.length) {
        return [];
    }

    const masks = new Map();

    for (let index = 0; index < pattern.length; index += 1) {
        const character = pattern[index];
        const mask = masks.get(character) || 0n;
        masks.set(character, mask | (1n << BigInt(index)));
    }

    const matches = [];
    const targetBit = 1n << BigInt(pattern.length - 1);
    let state = 0n;

    for (let index = 0; index < text.length; index += 1) {
        const mask = masks.get(text[index]) || 0n;
        state = ((state << 1n) | 1n) & mask;

        if (state & targetBit) {
            matches.push(index - pattern.length + 1);
        }
    }

    return matches;
};

module.exports = bitapSearch;
