const newtonInterpolation = (points, x) => {
    if (!Array.isArray(points) || points.length === 0) {
        throw new TypeError("newtonInterpolation expects a non-empty list of points.");
    }

    const coefficients = points.map((point) => point.y);

    for (let order = 1; order < points.length; order += 1) {
        for (let index = points.length - 1; index >= order; index -= 1) {
            coefficients[index] =
                (coefficients[index] - coefficients[index - 1]) /
                (points[index].x - points[index - order].x);
        }
    }

    let result = coefficients[points.length - 1];

    for (let index = points.length - 2; index >= 0; index -= 1) {
        result = (result * (x - points[index].x)) + coefficients[index];
    }

    return result;
};

module.exports = newtonInterpolation;
