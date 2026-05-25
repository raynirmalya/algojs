const inverseBurrowsWheelerTransform = (transformed, index) => {
    if (typeof transformed !== "string" || !Number.isInteger(index) || index < 0 || index >= transformed.length) {
        throw new TypeError("inverseBurrowsWheelerTransform expects a transformed string and a valid index.");
    }

    const table = new Array(transformed.length).fill("");

    for (let iteration = 0; iteration < transformed.length; iteration += 1) {
        for (let row = 0; row < transformed.length; row += 1) {
            table[row] = transformed[row] + table[row];
        }

        table.sort();
    }

    return table[index] || "";
};

module.exports = inverseBurrowsWheelerTransform;
