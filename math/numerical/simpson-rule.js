const simpsonRule = (fn, start, end, intervals) => {
    if (typeof fn !== "function" || typeof start !== "number" || typeof end !== "number") {
        throw new TypeError("simpsonRule expects a function and numeric bounds.");
    }

    let count = Number.isInteger(intervals) && intervals > 0 ? intervals : 1000;

    if (count % 2 === 1) {
        count += 1;
    }

    const width = (end - start) / count;
    let sum = fn(start) + fn(end);

    for (let index = 1; index < count; index += 1) {
        sum += fn(start + index * width) * (index % 2 === 0 ? 2 : 4);
    }

    return (sum * width) / 3;
};

module.exports = simpsonRule;
