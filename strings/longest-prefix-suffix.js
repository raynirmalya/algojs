const prefixFunction = require("./prefix-function");

const longestPrefixSuffix = (text) => {
    if (typeof text !== "string") {
        throw new TypeError("longestPrefixSuffix expects a string.");
    }

    if (text.length === 0) {
        return "";
    }

    const prefix = prefixFunction(text);
    const length = prefix[prefix.length - 1];
    return text.slice(0, length);
};

module.exports = longestPrefixSuffix;
