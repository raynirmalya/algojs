const gramSchmidt = require("./gram-schmidt");

const transpose = (matrix) => matrix[0].map((_, column) => matrix.map((row) => row[column]));
const dot = (first, second) => first.reduce((sum, value, index) => sum + (value * second[index]), 0);

const qrDecomposition = (matrix) => {
    if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
        throw new TypeError("qrDecomposition expects a non-empty matrix.");
    }

    const columns = transpose(matrix);
    const orthonormalColumns = gramSchmidt(columns);
    const q = transpose(orthonormalColumns);
    const r = orthonormalColumns.map((basis) =>
        columns.map((column) => dot(basis, column))
    );

    return {
        Q: q,
        R: r,
    };
};

module.exports = qrDecomposition;
