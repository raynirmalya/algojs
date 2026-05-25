const choleskyDecomposition = (matrix) => {
    if (!Array.isArray(matrix) || matrix.length === 0 || matrix.some((row) => !Array.isArray(row) || row.length !== matrix.length)) {
        throw new TypeError("choleskyDecomposition expects a non-empty square matrix.");
    }

    const size = matrix.length;
    const lower = Array.from({ length: size }, () => new Array(size).fill(0));

    for (let row = 0; row < size; row += 1) {
        for (let column = 0; column <= row; column += 1) {
            let sum = 0;

            for (let index = 0; index < column; index += 1) {
                sum += lower[row][index] * lower[column][index];
            }

            if (row === column) {
                const diagonal = matrix[row][row] - sum;
                if (diagonal <= 0) {
                    return null;
                }

                lower[row][column] = Math.sqrt(diagonal);
            } else {
                lower[row][column] = (matrix[row][column] - sum) / lower[column][column];
            }
        }
    }

    return lower;
};

module.exports = choleskyDecomposition;
