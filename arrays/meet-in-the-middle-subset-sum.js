const subsetSums = (values) => {
    const sums = [];
    const total = 1 << values.length;

    for (let mask = 0; mask < total; mask += 1) {
        let sum = 0;
        const subset = [];

        for (let bit = 0; bit < values.length; bit += 1) {
            if (mask & (1 << bit)) {
                sum += values[bit];
                subset.push(values[bit]);
            }
        }

        sums.push({ sum, subset });
    }

    return sums;
};

const meetInTheMiddleSubsetSum = (values, target) => {
    if (!Array.isArray(values) || typeof target !== "number") {
        throw new TypeError("meetInTheMiddleSubsetSum expects an array and numeric target.");
    }

    const middle = Math.floor(values.length / 2);
    const left = subsetSums(values.slice(0, middle));
    const right = subsetSums(values.slice(middle)).sort((first, second) => first.sum - second.sum);

    let best = {
        possible: false,
        sum: Number.NEGATIVE_INFINITY,
        subset: [],
    };

    left.forEach((entry) => {
        let low = 0;
        let high = right.length - 1;
        let bestIndex = -1;

        while (low <= high) {
            const middleIndex = Math.floor((low + high) / 2);

            if (entry.sum + right[middleIndex].sum <= target) {
                bestIndex = middleIndex;
                low = middleIndex + 1;
            } else {
                high = middleIndex - 1;
            }
        }

        if (bestIndex === -1) {
            return;
        }

        const total = entry.sum + right[bestIndex].sum;

        if (total > best.sum) {
            best = {
                possible: total === target,
                sum: total,
                subset: entry.subset.concat(right[bestIndex].subset),
            };
        }
    });

    return best;
};

module.exports = meetInTheMiddleSubsetSum;
