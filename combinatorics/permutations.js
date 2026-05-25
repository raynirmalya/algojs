const permutations = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("permutations expects an array.");
    }

    const result = [];
    const used = new Array(values.length).fill(false);
    const current = [];

    const backtrack = () => {
        if (current.length === values.length) {
            result.push(current.slice());
            return;
        }

        for (let index = 0; index < values.length; index += 1) {
            if (used[index]) {
                continue;
            }

            used[index] = true;
            current.push(values[index]);
            backtrack();
            current.pop();
            used[index] = false;
        }
    };

    backtrack();
    return result;
};

module.exports = permutations;
