const pascalTriangle = (rows) => {
    if (!Number.isInteger(rows) || rows < 0) {
        throw new TypeError("pascalTriangle expects a non-negative row count.");
    }

    const triangle = [];

    for (let row = 0; row < rows; row += 1) {
        const current = new Array(row + 1).fill(1);

        for (let column = 1; column < row; column += 1) {
            current[column] = triangle[row - 1][column - 1] + triangle[row - 1][column];
        }

        triangle.push(current);
    }

    return triangle;
};

module.exports = pascalTriangle;
