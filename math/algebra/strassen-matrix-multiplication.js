const add = (first, second) =>
    first.map((row, rowIndex) => row.map((value, columnIndex) => value + second[rowIndex][columnIndex]));

const subtract = (first, second) =>
    first.map((row, rowIndex) => row.map((value, columnIndex) => value - second[rowIndex][columnIndex]));

const standardMultiply = (first, second) => {
    const rows = first.length;
    const columns = second[0].length;
    const shared = second.length;
    const result = Array.from({ length: rows }, () => new Array(columns).fill(0));

    for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
            for (let index = 0; index < shared; index += 1) {
                result[row][column] += first[row][index] * second[index][column];
            }
        }
    }

    return result;
};

const nextPowerOfTwo = (value) => {
    let size = 1;

    while (size < value) {
        size <<= 1;
    }

    return size;
};

const split = (matrix) => {
    const half = matrix.length / 2;
    return [
        matrix.slice(0, half).map((row) => row.slice(0, half)),
        matrix.slice(0, half).map((row) => row.slice(half)),
        matrix.slice(half).map((row) => row.slice(0, half)),
        matrix.slice(half).map((row) => row.slice(half)),
    ];
};

const join = (a11, a12, a21, a22) => {
    const half = a11.length;
    const result = Array.from({ length: half * 2 }, () => new Array(half * 2).fill(0));

    for (let row = 0; row < half; row += 1) {
        for (let column = 0; column < half; column += 1) {
            result[row][column] = a11[row][column];
            result[row][column + half] = a12[row][column];
            result[row + half][column] = a21[row][column];
            result[row + half][column + half] = a22[row][column];
        }
    }

    return result;
};

const strassen = (first, second) => {
    const size = first.length;

    if (size <= 2) {
        return standardMultiply(first, second);
    }

    const [a11, a12, a21, a22] = split(first);
    const [b11, b12, b21, b22] = split(second);
    const m1 = strassen(add(a11, a22), add(b11, b22));
    const m2 = strassen(add(a21, a22), b11);
    const m3 = strassen(a11, subtract(b12, b22));
    const m4 = strassen(a22, subtract(b21, b11));
    const m5 = strassen(add(a11, a12), b22);
    const m6 = strassen(subtract(a21, a11), add(b11, b12));
    const m7 = strassen(subtract(a12, a22), add(b21, b22));

    return join(
        add(subtract(add(m1, m4), m5), m7),
        add(m3, m5),
        add(m2, m4),
        add(subtract(add(m1, m3), m2), m6)
    );
};

const padMatrix = (matrix, size) => {
    const padded = Array.from({ length: size }, () => new Array(size).fill(0));

    for (let row = 0; row < matrix.length; row += 1) {
        for (let column = 0; column < matrix[0].length; column += 1) {
            padded[row][column] = matrix[row][column];
        }
    }

    return padded;
};

const strassenMatrixMultiplication = (first, second) => {
    if (!Array.isArray(first) || !Array.isArray(second) || first.length === 0 || second.length === 0) {
        throw new TypeError("strassenMatrixMultiplication expects two non-empty matrices.");
    }

    const rows = first.length;
    const shared = first[0].length;
    const columns = second[0].length;

    if (shared !== second.length) {
        throw new Error("Matrix dimensions do not align for multiplication.");
    }

    const size = nextPowerOfTwo(Math.max(rows, shared, columns));
    const paddedFirst = padMatrix(first, size);
    const paddedSecond = padMatrix(second, size);
    const paddedResult = strassen(paddedFirst, paddedSecond);

    return paddedResult.slice(0, rows).map((row) => row.slice(0, columns));
};

module.exports = strassenMatrixMultiplication;
