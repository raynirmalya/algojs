const lagrangeInterpolation = (points, x) => {
    if (!Array.isArray(points) || points.length === 0) {
        throw new TypeError("lagrangeInterpolation expects a non-empty list of points.");
    }

    let value = 0;

    for (let index = 0; index < points.length; index += 1) {
        let term = points[index].y;

        for (let other = 0; other < points.length; other += 1) {
            if (index === other) {
                continue;
            }

            term *= (x - points[other].x) / (points[index].x - points[other].x);
        }

        value += term;
    }

    return value;
};

module.exports = lagrangeInterpolation;
