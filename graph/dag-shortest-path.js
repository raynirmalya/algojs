const topologicalSort = require("./topological-sort");
const { assertGraph, normalizeWeightedNeighbors } = require("./utils");

const dagShortestPath = (graph, startVertex) => {
    assertGraph(graph, "dagShortestPath");

    const order = topologicalSort(graph);
    const distances = new Map(graph.vertices().map((vertex) => [vertex, Infinity]));
    const previous = new Map(graph.vertices().map((vertex) => [vertex, null]));

    if (!graph.hasVertex(startVertex)) {
        return { distances, previous };
    }

    distances.set(startVertex, 0);

    order.forEach((vertex) => {
        const currentDistance = distances.get(vertex);

        if (currentDistance === Infinity) {
            return;
        }

        normalizeWeightedNeighbors(graph.neighbors(vertex)).forEach(({ vertex: neighbor, weight }) => {
            const candidate = currentDistance + weight;

            if (candidate < distances.get(neighbor)) {
                distances.set(neighbor, candidate);
                previous.set(neighbor, vertex);
            }
        });
    });

    return {
        distances,
        previous,
    };
};

module.exports = dagShortestPath;
