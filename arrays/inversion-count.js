const mergeAndCount = (values) => {
    if (values.length <= 1) {
        return {
            sorted: values.slice(),
            count: 0,
        };
    }

    const middle = Math.floor(values.length / 2);
    const left = mergeAndCount(values.slice(0, middle));
    const right = mergeAndCount(values.slice(middle));
    const merged = [];
    let count = left.count + right.count;
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.sorted.length && rightIndex < right.sorted.length) {
        if (left.sorted[leftIndex] <= right.sorted[rightIndex]) {
            merged.push(left.sorted[leftIndex]);
            leftIndex += 1;
        } else {
            merged.push(right.sorted[rightIndex]);
            count += left.sorted.length - leftIndex;
            rightIndex += 1;
        }
    }

    return {
        sorted: merged.concat(left.sorted.slice(leftIndex), right.sorted.slice(rightIndex)),
        count,
    };
};

const inversionCount = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("inversionCount expects an array.");
    }

    return mergeAndCount(values).count;
};

module.exports = inversionCount;
