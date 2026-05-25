const lerp = (first, second, t) => ({
    x: first.x + ((second.x - first.x) * t),
    y: first.y + ((second.y - first.y) * t),
});

const deCasteljauBezier = (controlPoints, t) => {
    if (!Array.isArray(controlPoints) || controlPoints.length === 0 || typeof t !== "number") {
        throw new TypeError("deCasteljauBezier expects control points and a numeric t.");
    }

    let points = controlPoints.map((point) => ({ x: point.x, y: point.y }));

    while (points.length > 1) {
        points = points.slice(0, -1).map((point, index) => lerp(point, points[index + 1], t));
    }

    return points[0];
};

module.exports = deCasteljauBezier;
