const zAlgorithm = (text) => {
    const z = new Array(text.length).fill(0);
    let left = 0;
    let right = 0;

    for (let index = 1; index < text.length; index += 1) {
        if (index <= right) {
            z[index] = Math.min(right - index + 1, z[index - left]);
        }

        while (
            index + z[index] < text.length &&
            text[z[index]] === text[index + z[index]]
        ) {
            z[index] += 1;
        }

        if (index + z[index] - 1 > right) {
            left = index;
            right = index + z[index] - 1;
        }
    }

    return z;
};

module.exports = zAlgorithm;
