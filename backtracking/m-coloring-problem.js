const mColoringProblem = (graph, colorCount) => {
    if (!graph || typeof graph.vertices !== "function" || !Number.isInteger(colorCount) || colorCount <= 0) {
        throw new TypeError("mColoringProblem expects a graph-like object and a positive color count.");
    }

    const vertices = graph.vertices();
    const colors = new Map();

    const canColor = (vertex, color) =>
        graph.neighbors(vertex).every((neighbor) => colors.get(neighbor) !== color);

    const backtrack = (index) => {
        if (index === vertices.length) {
            return true;
        }

        const vertex = vertices[index];

        for (let color = 1; color <= colorCount; color += 1) {
            if (!canColor(vertex, color)) {
                continue;
            }

            colors.set(vertex, color);

            if (backtrack(index + 1)) {
                return true;
            }

            colors.delete(vertex);
        }

        return false;
    };

    return {
        possible: backtrack(0),
        colors,
    };
};

module.exports = mColoringProblem;
