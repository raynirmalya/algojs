const normalizeCounts = (text) => {
    const counts = new Map();
    text.split("").forEach((character) => {
        counts.set(character, (counts.get(character) || 0) + 1);
    });
    return counts;
};

const sameCounts = (first, second) => {
    if (first.size !== second.size) {
        return false;
    }

    for (const [key, value] of first.entries()) {
        if (second.get(key) !== value) {
            return false;
        }
    }

    return true;
};

const anagramSearch = (text, pattern) => {
    if (typeof text !== "string" || typeof pattern !== "string") {
        throw new TypeError("anagramSearch expects string inputs.");
    }

    if (pattern.length === 0 || pattern.length > text.length) {
        return [];
    }

    const required = normalizeCounts(pattern);
    const window = normalizeCounts(text.slice(0, pattern.length));
    const matches = sameCounts(required, window) ? [0] : [];

    for (let index = pattern.length; index < text.length; index += 1) {
        const outgoing = text[index - pattern.length];
        const incoming = text[index];
        window.set(outgoing, window.get(outgoing) - 1);

        if (window.get(outgoing) === 0) {
            window.delete(outgoing);
        }

        window.set(incoming, (window.get(incoming) || 0) + 1);

        if (sameCounts(required, window)) {
            matches.push(index - pattern.length + 1);
        }
    }

    return matches;
};

module.exports = anagramSearch;
