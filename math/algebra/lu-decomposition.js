const luDecomposition = (matrix) => {
    if (!Array.isArray(matrix) || matrix.length === 0 || matrix.some((row) => !Array.isArray(row) || row.length !== matrix.length)) {
        throw new TypeError("luDecomposition expects a non-empty square matrix.");
    }

    const size = matrix.length;
    const lower = Array.from({ length: size }, (_, row) =>
        Array.from({ length: size }, (_, column) => (row === column ? 1 : 0))
    );
    const upper = Array.from({ length: size }, () => new Array(size).fill(0));

    for (let row = 0; row < size; row += 1) {
        for (let column = row; column < size; column += 1) {
            let sum = 0;

            for (let index = 0; index < row; index += 1) {
                sum += lower[row][index] * upper[index][column];
            }

            upper[row][column] = matrix[row][column] - sum;
        }

        for (let column = row + 1; column < size; column += 1) {
            let sum = 0;

            for (let index = 0; index < row; index += 1) {
                sum += lower[column][index] * upper[index][row];
            }

            lower[column][row] = (matrix[column][row] - sum) / upper[row][row];
        }
    }

    return { L: lower, U: upper };
};

module.exports = luDecomposition;
