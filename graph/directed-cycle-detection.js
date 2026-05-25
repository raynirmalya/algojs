const { normalizeNeighbors, assertGraph } = require("./utils");

const directedCycleDetection = (graph) => {
    assertGraph(graph, "directedCycleDetection");

    const visited = new Set();
    const inStack = new Set();

    const visit = (vertex) => {
        if (inStack.has(vertex)) {
            return true;
        }

        if (visited.has(vertex)) {
            return false;
        }

        visited.add(vertex);
        inStack.add(vertex);

        for (const neighbor of normalizeNeighbors(graph.neighbors(vertex))) {
            if (visit(neighbor)) {
                return true;
            }
        }

        inStack.delete(vertex);
        return false;
    };

    return graph.vertices().some((vertex) => visit(vertex));
};

module.exports = directedCycleDetection;
