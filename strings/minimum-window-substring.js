const minimumWindowSubstring = (text, pattern) => {
    if (typeof text !== "string" || typeof pattern !== "string") {
        throw new TypeError("minimumWindowSubstring expects string inputs.");
    }

    if (pattern.length === 0 || pattern.length > text.length) {
        return "";
    }

    const required = new Map();
    pattern.split("").forEach((character) => {
        required.set(character, (required.get(character) || 0) + 1);
    });

    const window = new Map();
    let formed = 0;
    let left = 0;
    let best = [Infinity, 0, 0];

    for (let right = 0; right < text.length; right += 1) {
        const character = text[right];
        window.set(character, (window.get(character) || 0) + 1);

        if (required.has(character) && window.get(character) === required.get(character)) {
            formed += 1;
        }

        while (formed === required.size && left <= right) {
            if (right - left + 1 < best[0]) {
                best = [right - left + 1, left, right];
            }

            const outgoing = text[left];
            window.set(outgoing, window.get(outgoing) - 1);

            if (required.has(outgoing) && window.get(outgoing) < required.get(outgoing)) {
                formed -= 1;
            }

            left += 1;
        }
    }

    return best[0] === Infinity ? "" : text.slice(best[1], best[2] + 1);
};

module.exports = minimumWindowSubstring;
