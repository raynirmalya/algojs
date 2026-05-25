const defaultCompare = (a, b) => a - b;

const sortGroup = (group, compare) => group.slice().sort(compare);

const select = (values, targetIndex, compare) => {
    if (values.length <= 5) {
        return sortGroup(values, compare)[targetIndex];
    }

    const medians = [];

    for (let index = 0; index < values.length; index += 5) {
        const group = sortGroup(values.slice(index, index + 5), compare);
        medians.push(group[Math.floor(group.length / 2)]);
    }

    const pivot = select(medians, Math.floor(medians.length / 2), compare);
    const lows = [];
    const highs = [];
    const equals = [];

    values.forEach((value) => {
        const comparison = compare(value, pivot);

        if (comparison < 0) {
            lows.push(value);
        } else if (comparison > 0) {
            highs.push(value);
        } else {
            equals.push(value);
        }
    });

    if (targetIndex < lows.length) {
        return select(lows, targetIndex, compare);
    }

    if (targetIndex < lows.length + equals.length) {
        return pivot;
    }

    return select(highs, targetIndex - lows.length - equals.length, compare);
};

const medianOfMedians = (values, targetIndex, compare) => {
    if (!Array.isArray(values) || values.length === 0) {
        throw new TypeError("medianOfMedians expects a non-empty array.");
    }

    const index = targetIndex === undefined ? Math.floor(values.length / 2) : targetIndex;

    if (!Number.isInteger(index) || index < 0 || index >= values.length) {
        throw new RangeError("medianOfMedians target index is out of bounds.");
    }

    return select(values.slice(), index, typeof compare === "function" ? compare : defaultCompare);
};

module.exports = medianOfMedians;
