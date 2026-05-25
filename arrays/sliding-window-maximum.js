const MonotonicQueue = require("../collections/monotonic-queue");

const slidingWindowMaximum = (values, windowSize) => {
    if (!Array.isArray(values)) {
        throw new TypeError("slidingWindowMaximum expects an array of values.");
    }

    if (!Number.isInteger(windowSize) || windowSize < 1) {
        throw new RangeError("Window size must be a positive integer.");
    }

    if (windowSize > values.length) {
        return [];
    }

    const queue = new MonotonicQueue();
    const result = [];

    for (let index = 0; index < values.length; index += 1) {
        queue.push(values[index]);

        if (index >= windowSize - 1) {
            result.push(queue.peek());
            queue.pop(values[index - windowSize + 1]);
        }
    }

    return result;
};

module.exports = slidingWindowMaximum;
