const { normalizeNeighbors, assertGraph } = require("./utils");

const undirectedCycleDetection = (graph) => {
    assertGraph(graph, "undirectedCycleDetection");

    const visited = new Set();

    const visit = (vertex, parent) => {
        visited.add(vertex);

        for (const neighbor of normalizeNeighbors(graph.neighbors(vertex))) {
            if (!visited.has(neighbor)) {
                if (visit(neighbor, vertex)) {
                    return true;
                }
            } else if (neighbor !== parent) {
                return true;
            }
        }

        return false;
    };

    return graph.vertices().some((vertex) => !visited.has(vertex) && visit(vertex, null));
};

module.exports = undirectedCycleDetection;
