const BinaryHeap = require("../collections/binary-heap");

const kWayMerge = (arrays) => {
    if (!Array.isArray(arrays)) {
        throw new TypeError("kWayMerge expects an array of sorted arrays.");
    }

    const heap = new BinaryHeap((first, second) => first.value - second.value);
    const merged = [];

    arrays.forEach((array, arrayIndex) => {
        if (array.length > 0) {
            heap.push({
                value: array[0],
                arrayIndex,
                valueIndex: 0,
            });
        }
    });

    while (!heap.isEmpty()) {
        const current = heap.pop();
        merged.push(current.value);

        const nextIndex = current.valueIndex + 1;
        const source = arrays[current.arrayIndex];

        if (nextIndex < source.length) {
            heap.push({
                value: source[nextIndex],
                arrayIndex: current.arrayIndex,
                valueIndex: nextIndex,
            });
        }
    }

    return merged;
};

module.exports = kWayMerge;
