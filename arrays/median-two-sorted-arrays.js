const medianTwoSortedArrays = (first, second) => {
    if (!Array.isArray(first) || !Array.isArray(second)) {
        throw new TypeError("medianTwoSortedArrays expects two sorted arrays.");
    }

    let left = first;
    let right = second;

    if (left.length > right.length) {
        [left, right] = [right, left];
    }

    let low = 0;
    let high = left.length;
    const totalLeft = Math.floor((left.length + right.length + 1) / 2);

    while (low <= high) {
        const partitionLeft = Math.floor((low + high) / 2);
        const partitionRight = totalLeft - partitionLeft;
        const maxLeft = partitionLeft === 0 ? -Infinity : left[partitionLeft - 1];
        const minLeft = partitionLeft === left.length ? Infinity : left[partitionLeft];
        const maxRight = partitionRight === 0 ? -Infinity : right[partitionRight - 1];
        const minRight = partitionRight === right.length ? Infinity : right[partitionRight];

        if (maxLeft <= minRight && maxRight <= minLeft) {
            if ((left.length + right.length) % 2 === 1) {
                return Math.max(maxLeft, maxRight);
            }

            return (Math.max(maxLeft, maxRight) + Math.min(minLeft, minRight)) / 2;
        }

        if (maxLeft > minRight) {
            high = partitionLeft - 1;
        } else {
            low = partitionLeft + 1;
        }
    }

    throw new Error("Unable to compute median for the given arrays.");
};

module.exports = medianTwoSortedArrays;
