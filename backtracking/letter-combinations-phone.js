const mapping = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
};

const letterCombinationsPhone = (digits) => {
    if (typeof digits !== "string") {
        throw new TypeError("letterCombinationsPhone expects a string of digits.");
    }

    if (digits.length === 0) {
        return [];
    }

    const combinations = [];

    const backtrack = (index, current) => {
        if (index === digits.length) {
            combinations.push(current);
            return;
        }

        const letters = mapping[digits[index]];

        if (!letters) {
            backtrack(index + 1, current);
            return;
        }

        for (const letter of letters) {
            backtrack(index + 1, `${current}${letter}`);
        }
    };

    backtrack(0, "");
    return combinations;
};

module.exports = letterCombinationsPhone;
