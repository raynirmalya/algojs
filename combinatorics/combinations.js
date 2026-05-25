const combinations = (values, size) => {
    if (!Array.isArray(values) || !Number.isInteger(size) || size < 0) {
        throw new TypeError("combinations expects an array and a non-negative size.");
    }

    const result = [];
    const current = [];

    const backtrack = (start) => {
        if (current.length === size) {
            result.push(current.slice());
            return;
        }

        for (let index = start; index < values.length; index += 1) {
            current.push(values[index]);
            backtrack(index + 1);
            current.pop();
        }
    };

    backtrack(0);
    return result;
};

module.exports = combinations;
