const shoelaceArea = (points) => {
    if (!Array.isArray(points) || points.length < 3) {
        throw new TypeError("shoelaceArea expects at least three points.");
    }

    let area = 0;

    for (let index = 0; index < points.length; index += 1) {
        const current = points[index];
        const next = points[(index + 1) % points.length];
        area += current.x * next.y;
        area -= current.y * next.x;
    }

    return Math.abs(area) / 2;
};

module.exports = shoelaceArea;
