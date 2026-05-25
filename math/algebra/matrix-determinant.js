const matrixDeterminant = (matrix) => {
    if (!Array.isArray(matrix) || matrix.length === 0 || matrix.some((row) => !Array.isArray(row) || row.length !== matrix.length)) {
        throw new TypeError("matrixDeterminant expects a non-empty square matrix.");
    }

    const working = matrix.map((row) => row.slice());
    const size = working.length;
    let determinant = 1;

    for (let pivot = 0; pivot < size; pivot += 1) {
        let best = pivot;

        for (let row = pivot + 1; row < size; row += 1) {
            if (Math.abs(working[row][pivot]) > Math.abs(working[best][pivot])) {
                best = row;
            }
        }

        if (Math.abs(working[best][pivot]) < 1e-12) {
            return 0;
        }

        if (best !== pivot) {
            [working[pivot], working[best]] = [working[best], working[pivot]];
            determinant *= -1;
        }

        determinant *= working[pivot][pivot];

        for (let row = pivot + 1; row < size; row += 1) {
            const factor = working[row][pivot] / working[pivot][pivot];

            for (let column = pivot; column < size; column += 1) {
                working[row][column] -= factor * working[pivot][column];
            }
        }
    }

    return determinant;
};

module.exports = matrixDeterminant;
