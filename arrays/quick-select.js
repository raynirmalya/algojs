const defaultCompare = (a, b) => a - b;

const swap = (values, firstIndex, secondIndex) => {
    const temp = values[firstIndex];
    values[firstIndex] = values[secondIndex];
    values[secondIndex] = temp;
};

const partition = (values, left, right, pivotIndex, compare) => {
    const pivotValue = values[pivotIndex];
    swap(values, pivotIndex, right);
    let storeIndex = left;

    for (let index = left; index < right; index += 1) {
        if (compare(values[index], pivotValue) < 0) {
            swap(values, storeIndex, index);
            storeIndex += 1;
        }
    }

    swap(values, storeIndex, right);
    return storeIndex;
};

const quickSelect = (values, targetIndex, compare) => {
    if (!Array.isArray(values)) {
        throw new TypeError("quickSelect expects an array.");
    }

    if (!Number.isInteger(targetIndex) || targetIndex < 0 || targetIndex >= values.length) {
        throw new RangeError("quickSelect target index is out of bounds.");
    }

    const items = values.slice();
    const comparator = typeof compare === "function" ? compare : defaultCompare;
    let left = 0;
    let right = items.length - 1;

    while (left <= right) {
        const pivotIndex = left + Math.floor((right - left) / 2);
        const finalPivotIndex = partition(items, left, right, pivotIndex, comparator);

        if (finalPivotIndex === targetIndex) {
            return items[finalPivotIndex];
        }

        if (finalPivotIndex < targetIndex) {
            left = finalPivotIndex + 1;
        } else {
            right = finalPivotIndex - 1;
        }
    }

    return null;
};

module.exports = quickSelect;
