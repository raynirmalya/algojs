const suffixArray = require("./suffix-array");
const lcpArray = require("./lcp-array");

const longestRepeatedSubstring = (text) => {
    if (typeof text !== "string") {
        throw new TypeError("longestRepeatedSubstring expects a string.");
    }

    if (text.length === 0) {
        return {
            length: 0,
            substring: "",
        };
    }

    const suffixes = suffixArray(text);
    const lcp = lcpArray(text, suffixes);
    let bestLength = 0;
    let bestIndex = 0;

    lcp.forEach((value, index) => {
        if (value > bestLength) {
            bestLength = value;
            bestIndex = suffixes[index];
        }
    });

    return {
        length: bestLength,
        substring: text.slice(bestIndex, bestIndex + bestLength),
    };
};

module.exports = longestRepeatedSubstring;
