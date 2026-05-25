const naiveStringSearch = (text, pattern) => {
    if (typeof text !== "string" || typeof pattern !== "string") {
        throw new TypeError("naiveStringSearch expects string inputs.");
    }

    if (pattern.length === 0 || pattern.length > text.length) {
        return [];
    }

    const matches = [];

    for (let start = 0; start <= text.length - pattern.length; start += 1) {
        let matchesPattern = true;

        for (let offset = 0; offset < pattern.length; offset += 1) {
            if (text[start + offset] !== pattern[offset]) {
                matchesPattern = false;
                break;
            }
        }

        if (matchesPattern) {
            matches.push(start);
        }
    }

    return matches;
};

module.exports = naiveStringSearch;
