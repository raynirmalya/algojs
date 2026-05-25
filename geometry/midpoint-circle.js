const midpointCircle = (radius) => {
    if (!Number.isInteger(radius) || radius < 0) {
        throw new TypeError("midpointCircle expects a non-negative integer radius.");
    }

    const points = [];
    const seen = new Set();
    let x = radius;
    let y = 0;
    let decision = 1 - radius;

    while (x >= y) {
        [
            { x, y }, { x: y, y: x }, { x: -y, y: x }, { x: -x, y },
            { x: -x, y: -y }, { x: -y, y: -x }, { x: y, y: -x }, { x, y: -y },
        ].forEach((point) => {
            const key = `${point.x},${point.y}`;

            if (!seen.has(key)) {
                seen.add(key);
                points.push(point);
            }
        });
        y += 1;

        if (decision <= 0) {
            decision += (2 * y) + 1;
        } else {
            x -= 1;
            decision += (2 * (y - x)) + 1;
        }
    }

    return points;
};

module.exports = midpointCircle;
