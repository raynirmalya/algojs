const matrixInverse = (matrix) => {
    if (!Array.isArray(matrix) || matrix.length === 0 || matrix.some((row) => !Array.isArray(row) || row.length !== matrix.length)) {
        throw new TypeError("matrixInverse expects a non-empty square matrix.");
    }

    const size = matrix.length;
    const augmented = matrix.map((row, rowIndex) =>
        row.slice().concat(Array.from({ length: size }, (_, columnIndex) => (rowIndex === columnIndex ? 1 : 0)))
    );

    for (let pivot = 0; pivot < size; pivot += 1) {
        let best = pivot;

        for (let row = pivot + 1; row < size; row += 1) {
            if (Math.abs(augmented[row][pivot]) > Math.abs(augmented[best][pivot])) {
                best = row;
            }
        }

        if (Math.abs(augmented[best][pivot]) < 1e-12) {
            return null;
        }

        if (best !== pivot) {
            [augmented[pivot], augmented[best]] = [augmented[best], augmented[pivot]];
        }

        const divisor = augmented[pivot][pivot];

        for (let column = 0; column < size * 2; column += 1) {
            augmented[pivot][column] /= divisor;
        }

        for (let row = 0; row < size; row += 1) {
            if (row === pivot) {
                continue;
            }

            const factor = augmented[row][pivot];

            for (let column = 0; column < size * 2; column += 1) {
                augmented[row][column] -= factor * augmented[pivot][column];
            }
        }
    }

    return augmented.map((row) => row.slice(size));
};

module.exports = matrixInverse;
