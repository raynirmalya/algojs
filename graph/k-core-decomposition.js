const { normalizeNeighbors, assertGraph } = require("./utils");

const kCoreDecomposition = (graph) => {
    assertGraph(graph, "kCoreDecomposition");

    const vertices = graph.vertices();
    const degrees = new Map(vertices.map((vertex) => [vertex, normalizeNeighbors(graph.neighbors(vertex)).length]));
    const core = new Map();
    const remaining = new Set(vertices);
    let currentCore = 0;

    while (remaining.size > 0) {
        let removed = false;

        Array.from(remaining).forEach((vertex) => {
            if (degrees.get(vertex) <= currentCore) {
                remaining.delete(vertex);
                core.set(vertex, currentCore);
                removed = true;

                normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
                    if (remaining.has(neighbor)) {
                        degrees.set(neighbor, degrees.get(neighbor) - 1);
                    }
                });
            }
        });

        if (!removed) {
            currentCore += 1;
        }
    }

    return core;
};

module.exports = kCoreDecomposition;
