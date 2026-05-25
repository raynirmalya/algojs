const goldenSectionSearch = (fn, left, right, options) => {
    if (typeof fn !== "function" || typeof left !== "number" || typeof right !== "number") {
        throw new TypeError("goldenSectionSearch expects a function and numeric bounds.");
    }

    const settings = options || {};
    const tolerance = settings.tolerance || 1e-8;
    const ratio = (Math.sqrt(5) - 1) / 2;
    let low = left;
    let high = right;
    let c = high - ratio * (high - low);
    let d = low + ratio * (high - low);

    while (Math.abs(high - low) > tolerance) {
        if (fn(c) < fn(d)) {
            high = d;
            d = c;
            c = high - ratio * (high - low);
        } else {
            low = c;
            c = d;
            d = low + ratio * (high - low);
        }
    }

    return (low + high) / 2;
};

module.exports = goldenSectionSearch;
