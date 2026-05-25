const bellNumber = (n) => {
    if (!Number.isInteger(n) || n < 0) {
        throw new TypeError("bellNumber expects a non-negative integer.");
    }

    const triangle = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
    triangle[0][0] = 1;

    for (let row = 1; row <= n; row += 1) {
        triangle[row][0] = triangle[row - 1][row - 1];
        for (let column = 1; column <= row; column += 1) {
            triangle[row][column] = triangle[row - 1][column - 1] + triangle[row][column - 1];
        }
    }

    return triangle[n][0];
};

module.exports = bellNumber;
