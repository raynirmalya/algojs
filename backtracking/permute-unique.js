const permuteUnique = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("permuteUnique expects an array.");
    }

    const sorted = values.slice().sort((first, second) => first - second);
    const used = new Array(sorted.length).fill(false);
    const permutations = [];
    const current = [];

    const backtrack = () => {
        if (current.length === sorted.length) {
            permutations.push(current.slice());
            return;
        }

        for (let index = 0; index < sorted.length; index += 1) {
            if (used[index] || (index > 0 && sorted[index] === sorted[index - 1] && !used[index - 1])) {
                continue;
            }

            used[index] = true;
            current.push(sorted[index]);
            backtrack();
            current.pop();
            used[index] = false;
        }
    };

    backtrack();
    return permutations;
};

module.exports = permuteUnique;
