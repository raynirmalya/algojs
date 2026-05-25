const subsetsWithDup = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("subsetsWithDup expects an array.");
    }

    const sorted = values.slice().sort((first, second) => first - second);
    const subsets = [];
    const current = [];

    const backtrack = (start) => {
        subsets.push(current.slice());

        for (let index = start; index < sorted.length; index += 1) {
            if (index > start && sorted[index] === sorted[index - 1]) {
                continue;
            }

            current.push(sorted[index]);
            backtrack(index + 1);
            current.pop();
        }
    };

    backtrack(0);
    return subsets;
};

module.exports = subsetsWithDup;
