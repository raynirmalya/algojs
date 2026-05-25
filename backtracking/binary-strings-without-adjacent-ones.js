const binaryStringsWithoutAdjacentOnes = (length) => {
    if (!Number.isInteger(length) || length < 0) {
        throw new TypeError("binaryStringsWithoutAdjacentOnes expects a non-negative integer length.");
    }

    const results = [];

    const backtrack = (current, last) => {
        if (current.length === length) {
            results.push(current);
            return;
        }

        backtrack(`${current}0`, "0");

        if (last !== "1") {
            backtrack(`${current}1`, "1");
        }
    };

    backtrack("", "0");
    return results;
};

module.exports = binaryStringsWithoutAdjacentOnes;
