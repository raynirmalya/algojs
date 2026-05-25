const { assertGraph, normalizeNeighbors } = require("./utils");

const buildUndirectedAdjacency = (graph) => {
    const adjacency = new Map(graph.vertices().map((vertex) => [vertex, new Set()]));

    graph.vertices().forEach((vertex) => {
        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            adjacency.get(vertex).add(neighbor);
            if (!adjacency.has(neighbor)) {
                adjacency.set(neighbor, new Set());
            }
            adjacency.get(neighbor).add(vertex);
        });
    });

    return adjacency;
};

const eulerianPath = (graph) => {
    assertGraph(graph, "eulerianPath");

    if (graph.isDirected) {
        throw new Error("eulerianPath currently supports undirected graphs only.");
    }

    const adjacency = buildUndirectedAdjacency(graph);
    const oddVertices = Array.from(adjacency.entries())
        .filter(([, neighbors]) => neighbors.size % 2 === 1)
        .map(([vertex]) => vertex);

    if (oddVertices.length !== 0 && oddVertices.length !== 2) {
        return [];
    }

    const start = oddVertices[0] || graph.vertices().find((vertex) => adjacency.get(vertex).size > 0);

    if (start === undefined) {
        return graph.vertices().length > 0 ? [graph.vertices()[0]] : [];
    }

    const stack = [start];
    const path = [];

    while (stack.length > 0) {
        const vertex = stack[stack.length - 1];
        const neighbors = adjacency.get(vertex);

        if (neighbors.size === 0) {
            path.push(stack.pop());
            continue;
        }

        const neighbor = neighbors.values().next().value;
        neighbors.delete(neighbor);
        adjacency.get(neighbor).delete(vertex);
        stack.push(neighbor);
    }

    return path.reverse();
};

module.exports = eulerianPath;
