const floodFill = (image, row, column, newColor) => {
    if (!Array.isArray(image) || image.length === 0 || !Array.isArray(image[0])) {
        throw new TypeError("floodFill expects a non-empty grid.");
    }

    const originalColor = image[row][column];

    if (originalColor === newColor) {
        return image.map((line) => line.slice());
    }

    const result = image.map((line) => line.slice());
    const stack = [[row, column]];

    while (stack.length > 0) {
        const [currentRow, currentColumn] = stack.pop();

        if (
            currentRow < 0 ||
            currentColumn < 0 ||
            currentRow >= result.length ||
            currentColumn >= result[0].length ||
            result[currentRow][currentColumn] !== originalColor
        ) {
            continue;
        }

        result[currentRow][currentColumn] = newColor;
        stack.push([currentRow + 1, currentColumn]);
        stack.push([currentRow - 1, currentColumn]);
        stack.push([currentRow, currentColumn + 1]);
        stack.push([currentRow, currentColumn - 1]);
    }

    return result;
};

module.exports = floodFill;
