const generateAbbreviations = (word) => {
    if (typeof word !== "string") {
        throw new TypeError("generateAbbreviations expects a string.");
    }

    const results = [];

    const backtrack = (index, current, count) => {
        if (index === word.length) {
            results.push(count > 0 ? `${current}${count}` : current);
            return;
        }

        backtrack(index + 1, current, count + 1);
        backtrack(index + 1, count > 0 ? `${current}${count}${word[index]}` : `${current}${word[index]}`, 0);
    };

    backtrack(0, "", 0);
    return results;
};

module.exports = generateAbbreviations;
