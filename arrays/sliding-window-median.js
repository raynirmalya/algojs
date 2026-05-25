const lowerBound = (values, target) => {
    let left = 0;
    let right = values.length;

    while (left < right) {
        const middle = Math.floor((left + right) / 2);

        if (values[middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return left;
};

const removeValue = (values, target) => {
    const index = lowerBound(values, target);

    if (index < values.length && values[index] === target) {
        values.splice(index, 1);
    }
};

const medianOfSorted = (values) => {
    const middle = Math.floor(values.length / 2);

    if (values.length % 2 === 1) {
        return values[middle];
    }

    return (values[middle - 1] + values[middle]) / 2;
};

const slidingWindowMedian = (values, windowSize) => {
    if (!Array.isArray(values) || !Number.isInteger(windowSize) || windowSize <= 0 || windowSize > values.length) {
        throw new TypeError("slidingWindowMedian expects an array and a valid positive window size.");
    }

    const window = values.slice(0, windowSize).sort((first, second) => first - second);
    const medians = [medianOfSorted(window)];

    for (let index = windowSize; index < values.length; index += 1) {
        removeValue(window, values[index - windowSize]);
        const insertIndex = lowerBound(window, values[index]);
        window.splice(insertIndex, 0, values[index]);
        medians.push(medianOfSorted(window));
    }

    return medians;
};

module.exports = slidingWindowMedian;
