const twoSum = (values, target) => {
    if (!Array.isArray(values)) {
        throw new TypeError("twoSum expects an array.");
    }

    const seen = new Map();

    for (let index = 0; index < values.length; index += 1) {
        const complement = target - values[index];

        if (seen.has(complement)) {
            return [seen.get(complement), index];
        }

        seen.set(values[index], index);
    }

    return [];
};

module.exports = twoSum;
