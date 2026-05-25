const maximalRectangle = (matrix) => {
    if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
        throw new TypeError("maximalRectangle expects a non-empty matrix.");
    }

    const heights = new Array(matrix[0].length).fill(0);
    let best = 0;

    const largestHistogram = (values) => {
        const stack = [];
        let area = 0;

        for (let index = 0; index <= values.length; index += 1) {
            const current = index === values.length ? 0 : values[index];

            while (stack.length > 0 && values[stack[stack.length - 1]] > current) {
                const height = values[stack.pop()];
                const width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
                area = Math.max(area, height * width);
            }

            stack.push(index);
        }

        return area;
    };

    matrix.forEach((row) => {
        row.forEach((value, index) => {
            heights[index] = Number(value) === 1 ? heights[index] + 1 : 0;
        });

        best = Math.max(best, largestHistogram(heights));
    });

    return best;
};

module.exports = maximalRectangle;
