const josephus = (count, step) => {
    if (!Number.isInteger(count) || !Number.isInteger(step) || count <= 0 || step <= 0) {
        throw new TypeError("josephus expects positive integer count and step.");
    }

    const circle = Array.from({ length: count }, (_, index) => index + 1);
    const eliminationOrder = [];
    let index = 0;

    while (circle.length > 1) {
        index = (index + step - 1) % circle.length;
        eliminationOrder.push(circle.splice(index, 1)[0]);
    }

    eliminationOrder.push(circle[0]);

    return {
        survivor: circle[0],
        eliminationOrder,
    };
};

module.exports = josephus;
