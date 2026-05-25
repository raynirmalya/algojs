const simpleLinearRegression = (points) => {
    if (!Array.isArray(points) || points.length === 0) {
        throw new TypeError("simpleLinearRegression expects a non-empty list of points.");
    }

    const count = points.length;
    const sumX = points.reduce((sum, point) => sum + point.x, 0);
    const sumY = points.reduce((sum, point) => sum + point.y, 0);
    const meanX = sumX / count;
    const meanY = sumY / count;
    let numerator = 0;
    let denominator = 0;

    points.forEach((point) => {
        numerator += (point.x - meanX) * (point.y - meanY);
        denominator += (point.x - meanX) ** 2;
    });

    const slope = numerator / denominator;
    const intercept = meanY - (slope * meanX);

    return {
        slope,
        intercept,
        predict: (x) => (slope * x) + intercept,
    };
};

module.exports = simpleLinearRegression;
