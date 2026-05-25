const longestAlternatingSubsequence = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("longestAlternatingSubsequence expects an array.");
    }

    if (values.length === 0) {
        return { length: 0 };
    }

    let up = 1;
    let down = 1;

    for (let index = 1; index < values.length; index += 1) {
        if (values[index] > values[index - 1]) {
            up = down + 1;
        } else if (values[index] < values[index - 1]) {
            down = up + 1;
        }
    }

    return {
        length: Math.max(up, down),
    };
};

module.exports = longestAlternatingSubsequence;
