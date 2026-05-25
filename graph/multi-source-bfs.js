const { normalizeNeighbors, assertGraph } = require("./utils");

const multiSourceBFS = (graph, sources) => {
    assertGraph(graph, "multiSourceBFS");

    const starts = Array.isArray(sources) ? sources.slice() : [sources];
    const distances = new Map();
    const parents = new Map();
    const order = [];
    const queue = [];

    starts.forEach((source) => {
        if (graph.hasVertex(source) && !distances.has(source)) {
            distances.set(source, 0);
            parents.set(source, null);
            queue.push(source);
        }
    });

    for (let index = 0; index < queue.length; index += 1) {
        const current = queue[index];
        order.push(current);

        normalizeNeighbors(graph.neighbors(current)).forEach((neighbor) => {
            if (!distances.has(neighbor)) {
                distances.set(neighbor, distances.get(current) + 1);
                parents.set(neighbor, current);
                queue.push(neighbor);
            }
        });
    }

    return {
        order,
        distances,
        parents,
    };
};

module.exports = multiSourceBFS;
