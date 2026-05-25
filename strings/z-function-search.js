const zAlgorithm = require("./z-algorithm");

const zFunctionSearch = (text, pattern) => {
    if (typeof text !== "string" || typeof pattern !== "string") {
        throw new TypeError("zFunctionSearch expects string inputs.");
    }

    if (pattern.length === 0 || pattern.length > text.length) {
        return [];
    }

    const combined = `${pattern}$${text}`;
    const z = zAlgorithm(combined);
    const matches = [];

    for (let index = pattern.length + 1; index < combined.length; index += 1) {
        if (z[index] === pattern.length) {
            matches.push(index - pattern.length - 1);
        }
    }

    return matches;
};

module.exports = zFunctionSearch;
