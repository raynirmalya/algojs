const longestUniqueSubstring = (text) => {
    if (typeof text !== "string") {
        throw new TypeError("longestUniqueSubstring expects a string.");
    }

    const lastSeen = new Map();
    let left = 0;
    let bestStart = 0;
    let bestLength = 0;

    for (let right = 0; right < text.length; right += 1) {
        const character = text[right];

        if (lastSeen.has(character) && lastSeen.get(character) >= left) {
            left = lastSeen.get(character) + 1;
        }

        lastSeen.set(character, right);

        if (right - left + 1 > bestLength) {
            bestLength = right - left + 1;
            bestStart = left;
        }
    }

    return {
        length: bestLength,
        substring: text.slice(bestStart, bestStart + bestLength),
    };
};

module.exports = longestUniqueSubstring;
