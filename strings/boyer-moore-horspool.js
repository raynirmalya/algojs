const buildShiftTable = (pattern) => {
    const table = new Map();
    const lastIndex = pattern.length - 1;

    for (let index = 0; index < lastIndex; index += 1) {
        table.set(pattern[index], lastIndex - index);
    }

    return table;
};

const boyerMooreHorspool = (text, pattern) => {
    if (typeof text !== "string" || typeof pattern !== "string") {
        throw new TypeError("boyerMooreHorspool expects string inputs.");
    }

    if (pattern.length === 0 || pattern.length > text.length) {
        return [];
    }

    const shiftTable = buildShiftTable(pattern);
    const matches = [];
    let offset = 0;

    while (offset <= text.length - pattern.length) {
        let patternIndex = pattern.length - 1;

        while (patternIndex >= 0 && pattern[patternIndex] === text[offset + patternIndex]) {
            patternIndex -= 1;
        }

        if (patternIndex < 0) {
            matches.push(offset);
            offset += 1;
            continue;
        }

        const tailCharacter = text[offset + pattern.length - 1];
        offset += shiftTable.get(tailCharacter) || pattern.length;
    }

    return matches;
};

module.exports = boyerMooreHorspool;
