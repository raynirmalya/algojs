const PriorityQueue = require("../collections/priority-queue");

const optimalMergePattern = (lengths) => {
    if (!Array.isArray(lengths)) {
        throw new TypeError("optimalMergePattern expects an array of lengths.");
    }

    const queue = new PriorityQueue();
    lengths.forEach((length) => queue.enqueue(length, length));

    let totalCost = 0;

    while (queue.size() > 1) {
        const first = queue.dequeue().value;
        const second = queue.dequeue().value;
        const merged = first + second;

        totalCost += merged;
        queue.enqueue(merged, merged);
    }

    return totalCost;
};

module.exports = optimalMergePattern;
