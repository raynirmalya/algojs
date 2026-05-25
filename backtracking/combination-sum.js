const combinationSum = (candidates, target) => {
    if (!Array.isArray(candidates) || typeof target !== "number") {
        throw new TypeError("combinationSum expects an array of candidates and a numeric target.");
    }

    const sorted = candidates.slice().sort((first, second) => first - second);
    const combinations = [];
    const current = [];

    const backtrack = (start, remaining) => {
        if (remaining === 0) {
            combinations.push(current.slice());
            return;
        }

        for (let index = start; index < sorted.length; index += 1) {
            const value = sorted[index];

            if (value > remaining) {
                break;
            }

            current.push(value);
            backtrack(index, remaining - value);
            current.pop();
        }
    };

    backtrack(0, target);
    return combinations;
};

module.exports = combinationSum;
