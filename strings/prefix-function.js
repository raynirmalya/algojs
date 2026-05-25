const prefixFunction = (pattern) => {
    const prefixTable = new Array(pattern.length).fill(0);
    let matchedLength = 0;

    for (let index = 1; index < pattern.length; index += 1) {
        while (matchedLength > 0 && pattern[index] !== pattern[matchedLength]) {
            matchedLength = prefixTable[matchedLength - 1];
        }

        if (pattern[index] === pattern[matchedLength]) {
            matchedLength += 1;
        }

        prefixTable[index] = matchedLength;
    }

    return prefixTable;
};

module.exports = prefixFunction;
