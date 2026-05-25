const polygonCentroid = (points) => {
    if (!Array.isArray(points) || points.length < 3) {
        throw new TypeError("polygonCentroid expects at least three points.");
    }

    let area = 0;
    let centroidX = 0;
    let centroidY = 0;

    for (let index = 0; index < points.length; index += 1) {
        const current = points[index];
        const next = points[(index + 1) % points.length];
        const factor = (current.x * next.y) - (next.x * current.y);
        area += factor;
        centroidX += (current.x + next.x) * factor;
        centroidY += (current.y + next.y) * factor;
    }

    area *= 0.5;

    return {
        x: centroidX / (6 * area),
        y: centroidY / (6 * area),
    };
};

module.exports = polygonCentroid;
