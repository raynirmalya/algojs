const trapezoidalRule = (fn, start, end, intervals) => {
    if (typeof fn !== "function" || typeof start !== "number" || typeof end !== "number") {
        throw new TypeError("trapezoidalRule expects a function and numeric bounds.");
    }

    const count = Number.isInteger(intervals) && intervals > 0 ? intervals : 1000;
    const width = (end - start) / count;
    let sum = (fn(start) + fn(end)) / 2;

    for (let index = 1; index < count; index += 1) {
        sum += fn(start + index * width);
    }

    return sum * width;
};

module.exports = trapezoidalRule;
