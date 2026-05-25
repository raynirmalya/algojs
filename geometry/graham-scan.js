const cross = (origin, first, second) =>
    (first.x - origin.x) * (second.y - origin.y) - (first.y - origin.y) * (second.x - origin.x);

const grahamScan = (points) => {
    if (!Array.isArray(points) || points.length < 2) {
        throw new TypeError("grahamScan expects at least two points.");
    }

    const sorted = points
        .map((point) => ({ x: point.x, y: point.y }))
        .sort((first, second) => first.y - second.y || first.x - second.x);
    const pivot = sorted[0];
    const ordered = [pivot].concat(
        sorted.slice(1).sort((first, second) => {
            const orientation = cross(pivot, first, second);

            if (orientation === 0) {
                return ((pivot.x - first.x) ** 2 + (pivot.y - first.y) ** 2)
                    - ((pivot.x - second.x) ** 2 + (pivot.y - second.y) ** 2);
            }

            return orientation > 0 ? -1 : 1;
        })
    );
    const hull = [];

    ordered.forEach((point) => {
        while (hull.length >= 2 && cross(hull[hull.length - 2], hull[hull.length - 1], point) <= 0) {
            hull.pop();
        }

        hull.push(point);
    });

    return hull;
};

module.exports = grahamScan;
