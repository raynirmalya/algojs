const cross = (origin, first, second) =>
    (first.x - origin.x) * (second.y - origin.y) - (first.y - origin.y) * (second.x - origin.x);

const convexHullMonotoneChain = (points) => {
    if (!Array.isArray(points) || points.length < 2) {
        throw new TypeError("convexHullMonotoneChain expects at least two points.");
    }

    const sorted = points
        .map((point) => ({ x: point.x, y: point.y }))
        .sort((first, second) => first.x - second.x || first.y - second.y);

    const lower = [];

    sorted.forEach((point) => {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) {
            lower.pop();
        }

        lower.push(point);
    });

    const upper = [];

    for (let index = sorted.length - 1; index >= 0; index -= 1) {
        const point = sorted[index];

        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) {
            upper.pop();
        }

        upper.push(point);
    }

    lower.pop();
    upper.pop();
    return lower.concat(upper);
};

module.exports = convexHullMonotoneChain;
