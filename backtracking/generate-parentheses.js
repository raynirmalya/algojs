const generateParentheses = (pairs) => {
    if (!Number.isInteger(pairs) || pairs < 0) {
        throw new TypeError("generateParentheses expects a non-negative integer.");
    }

    const combinations = [];

    const backtrack = (current, open, close) => {
        if (current.length === pairs * 2) {
            combinations.push(current);
            return;
        }

        if (open < pairs) {
            backtrack(`${current}(`, open + 1, close);
        }

        if (close < open) {
            backtrack(`${current})`, open, close + 1);
        }
    };

    backtrack("", 0, 0);
    return combinations;
};

module.exports = generateParentheses;
