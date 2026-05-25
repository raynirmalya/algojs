const identityMatrix = (size) =>
    Array.from({ length: size }, (_, row) =>
        Array.from({ length: size }, (_, column) => (row === column ? 1 : 0))
    );

const multiplyMatrices = (first, second) => {
    const size = first.length;
    const result = Array.from({ length: size }, () => new Array(size).fill(0));

    for (let row = 0; row < size; row += 1) {
        for (let column = 0; column < size; column += 1) {
            for (let index = 0; index < size; index += 1) {
                result[row][column] += first[row][index] * second[index][column];
            }
        }
    }

    return result;
};

const matrixExponentiation = (matrix, exponent) => {
    if (!Array.isArray(matrix) || matrix.length === 0 || matrix.some((row) => !Array.isArray(row) || row.length !== matrix.length)) {
        throw new TypeError("matrixExponentiation expects a non-empty square matrix.");
    }

    if (!Number.isInteger(exponent) || exponent < 0) {
        throw new TypeError("matrixExponentiation expects a non-negative integer exponent.");
    }

    let power = exponent;
    let result = identityMatrix(matrix.length);
    let base = matrix.map((row) => row.slice());

    while (power > 0) {
        if (power % 2 === 1) {
            result = multiplyMatrices(result, base);
        }

        base = multiplyMatrices(base, base);
        power = Math.floor(power / 2);
    }

    return result;
};

module.exports = matrixExponentiation;
