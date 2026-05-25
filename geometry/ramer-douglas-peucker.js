const perpendicularDistance = (point, start, end) => {
    const area = Math.abs(
        (start.x * end.y) +
        (end.x * point.y) +
        (point.x * start.y) -
        (end.x * start.y) -
        (point.x * end.y) -
        (start.x * point.y)
    );
    const length = Math.hypot(end.x - start.x, end.y - start.y);
    return length === 0 ? Math.hypot(point.x - start.x, point.y - start.y) : area / length;
};

const ramerDouglasPeucker = (points, epsilon) => {
    if (!Array.isArray(points) || points.length < 2 || typeof epsilon !== "number") {
        throw new TypeError("ramerDouglasPeucker expects at least two points and a numeric epsilon.");
    }

    let bestDistance = 0;
    let bestIndex = -1;

    for (let index = 1; index < points.length - 1; index += 1) {
        const currentDistance = perpendicularDistance(points[index], points[0], points[points.length - 1]);

        if (currentDistance > bestDistance) {
            bestDistance = currentDistance;
            bestIndex = index;
        }
    }

    if (bestDistance > epsilon) {
        const left = ramerDouglasPeucker(points.slice(0, bestIndex + 1), epsilon);
        const right = ramerDouglasPeucker(points.slice(bestIndex), epsilon);
        return left.slice(0, -1).concat(right);
    }

    return [points[0], points[points.length - 1]];
};

module.exports = ramerDouglasPeucker;
