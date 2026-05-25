const prefixFunction = require("./prefix-function");

const shortestPalindrome = (text) => {
    if (typeof text !== "string") {
        throw new TypeError("shortestPalindrome expects a string.");
    }

    const reversed = text.split("").reverse().join("");
    const combined = `${text}#${reversed}`;
    const prefix = prefixFunction(combined);
    const overlap = prefix[prefix.length - 1];
    return reversed.slice(0, text.length - overlap) + text;
};

module.exports = shortestPalindrome;
