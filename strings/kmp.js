const prefixFunction = require("./prefix-function");

const kmpSearch = (text, pattern) => {
    if (pattern.length === 0) {
        return [0];
    }

    const prefixTable = prefixFunction(pattern);
    const matches = [];
    let matchedLength = 0;

    for (let index = 0; index < text.length; index += 1) {
        while (matchedLength > 0 && text[index] !== pattern[matchedLength]) {
            matchedLength = prefixTable[matchedLength - 1];
        }

        if (text[index] === pattern[matchedLength]) {
            matchedLength += 1;
        }

        if (matchedLength === pattern.length) {
            matches.push(index - pattern.length + 1);
            matchedLength = prefixTable[matchedLength - 1];
        }
    }

    return matches;
};

module.exports = kmpSearch;
