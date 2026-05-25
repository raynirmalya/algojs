const longestIncreasingSubsequence = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("longestIncreasingSubsequence expects an array.");
    }

    if (values.length === 0) {
        return {
            length: 0,
            sequence: [],
        };
    }

    const previousIndexes = new Array(values.length).fill(-1);
    const tailIndexes = [];

    for (let index = 0; index < values.length; index += 1) {
        let left = 0;
        let right = tailIndexes.length;

        while (left < right) {
            const middle = Math.floor((left + right) / 2);

            if (values[tailIndexes[middle]] < values[index]) {
                left = middle + 1;
            } else {
                right = middle;
            }
        }

        if (left > 0) {
            previousIndexes[index] = tailIndexes[left - 1];
        }

        tailIndexes[left] = index;
    }

    const sequence = [];
    let currentIndex = tailIndexes[tailIndexes.length - 1];

    while (currentIndex !== -1) {
        sequence.push(values[currentIndex]);
        currentIndex = previousIndexes[currentIndex];
    }

    sequence.reverse();

    return {
        length: sequence.length,
        sequence,
    };
};

module.exports = longestIncreasingSubsequence;
