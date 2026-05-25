const manacher = (text) => {
    if (text.length === 0) {
        return {
            length: 0,
            substring: "",
            start: 0,
        };
    }

    const transformed = `^#${text.split("").join("#")}#$`;
    const radii = new Array(transformed.length).fill(0);
    let center = 0;
    let right = 0;
    let bestCenter = 0;
    let bestRadius = 0;

    for (let index = 1; index < transformed.length - 1; index += 1) {
        const mirror = (2 * center) - index;

        if (index < right) {
            radii[index] = Math.min(right - index, radii[mirror]);
        }

        while (transformed[index + 1 + radii[index]] === transformed[index - 1 - radii[index]]) {
            radii[index] += 1;
        }

        if (index + radii[index] > right) {
            center = index;
            right = index + radii[index];
        }

        if (radii[index] > bestRadius) {
            bestRadius = radii[index];
            bestCenter = index;
        }
    }

    const start = Math.floor((bestCenter - bestRadius) / 2);

    return {
        length: bestRadius,
        substring: text.slice(start, start + bestRadius),
        start,
        radii,
    };
};

module.exports = manacher;
