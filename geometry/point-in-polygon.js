const pointInPolygon = (point, polygon) => {
    if (!point || !Array.isArray(polygon) || polygon.length < 3) {
        throw new TypeError("pointInPolygon expects a point and a polygon.");
    }

    let inside = false;

    for (let current = 0, previous = polygon.length - 1; current < polygon.length; previous = current, current += 1) {
        const first = polygon[current];
        const second = polygon[previous];
        const intersects =
            (first.y > point.y) !== (second.y > point.y) &&
            point.x < ((second.x - first.x) * (point.y - first.y)) / (second.y - first.y) + first.x;

        if (intersects) {
            inside = !inside;
        }
    }

    return inside;
};

module.exports = pointInPolygon;
