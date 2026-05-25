const longestCommonPrefix = (words) => {
    if (!Array.isArray(words)) {
        throw new TypeError("longestCommonPrefix expects an array of strings.");
    }

    if (words.length === 0) {
        return "";
    }

    let prefix = words[0];

    for (let index = 1; index < words.length && prefix.length > 0; index += 1) {
        const word = words[index];
        let pointer = 0;

        while (pointer < prefix.length && pointer < word.length && prefix[pointer] === word[pointer]) {
            pointer += 1;
        }

        prefix = prefix.slice(0, pointer);
    }

    return prefix;
};

module.exports = longestCommonPrefix;
