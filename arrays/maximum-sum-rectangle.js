const maximumSumRectangle = (matrix) => {
    if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
        throw new TypeError("maximumSumRectangle expects a non-empty matrix.");
    }

    const rows = matrix.length;
    const columns = matrix[0].length;
    let best = Number.NEGATIVE_INFINITY;

    for (let left = 0; left < columns; left += 1) {
        const compressed = new Array(rows).fill(0);

        for (let right = left; right < columns; right += 1) {
            for (let row = 0; row < rows; row += 1) {
                compressed[row] += matrix[row][right];
            }

            let current = 0;
            compressed.forEach((value) => {
                current = Math.max(value, current + value);
                best = Math.max(best, current);
            });
        }
    }

    return best;
};

module.exports = maximumSumRectangle;
