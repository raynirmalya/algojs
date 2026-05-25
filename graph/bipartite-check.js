const { normalizeNeighbors, assertGraph } = require("./utils");

const bipartiteCheck = (graph) => {
    assertGraph(graph, "bipartiteCheck");

    const colors = new Map();

    for (const startVertex of graph.vertices()) {
        if (colors.has(startVertex)) {
            continue;
        }

        const queue = [startVertex];
        colors.set(startVertex, 0);

        for (let index = 0; index < queue.length; index += 1) {
            const vertex = queue[index];

            for (const neighbor of normalizeNeighbors(graph.neighbors(vertex))) {
                if (!colors.has(neighbor)) {
                    colors.set(neighbor, 1 - colors.get(vertex));
                    queue.push(neighbor);
                } else if (colors.get(neighbor) === colors.get(vertex)) {
                    return {
                        isBipartite: false,
                        colors,
                    };
                }
            }
        }
    }

    return {
        isBipartite: true,
        colors,
    };
};

module.exports = bipartiteCheck;
