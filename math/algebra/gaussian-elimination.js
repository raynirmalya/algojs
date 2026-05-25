const gaussianElimination = (matrix, vector) => {
    if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
        throw new TypeError("gaussianElimination expects a non-empty matrix.");
    }

    const rowCount = matrix.length;
    const columnCount = matrix[0].length;
    const augmented = matrix.map((row, index) => {
        if (row.length !== columnCount) {
            throw new TypeError("All matrix rows must have the same length.");
        }

        return vector ? row.concat(vector[index]) : row.slice();
    });

    let pivotRow = 0;
    const pivotColumns = [];

    for (let column = 0; column < columnCount && pivotRow < rowCount; column += 1) {
        let bestRow = pivotRow;

        for (let row = pivotRow + 1; row < rowCount; row += 1) {
            if (Math.abs(augmented[row][column]) > Math.abs(augmented[bestRow][column])) {
                bestRow = row;
            }
        }

        if (Math.abs(augmented[bestRow][column]) < 1e-12) {
            continue;
        }

        if (bestRow !== pivotRow) {
            const temp = augmented[pivotRow];
            augmented[pivotRow] = augmented[bestRow];
            augmented[bestRow] = temp;
        }

        const pivot = augmented[pivotRow][column];

        for (let cell = column; cell < augmented[pivotRow].length; cell += 1) {
            augmented[pivotRow][cell] /= pivot;
        }

        for (let row = 0; row < rowCount; row += 1) {
            if (row === pivotRow) {
                continue;
            }

            const factor = augmented[row][column];

            if (Math.abs(factor) < 1e-12) {
                continue;
            }

            for (let cell = column; cell < augmented[row].length; cell += 1) {
                augmented[row][cell] -= factor * augmented[pivotRow][cell];
            }
        }

        pivotColumns.push(column);
        pivotRow += 1;
    }

    const result = {
        rowEchelonForm: augmented.map((row) =>
            row.map((value) => (Math.abs(value) < 1e-10 ? 0 : value))
        ),
    };

    if (vector) {
        const solution = new Array(columnCount).fill(0);

        for (let row = 0; row < pivotColumns.length; row += 1) {
            solution[pivotColumns[row]] = result.rowEchelonForm[row][columnCount];
        }

        result.solution = solution;
    }

    return result;
};

module.exports = gaussianElimination;
