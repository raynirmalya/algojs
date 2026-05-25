const PriorityQueue = require("../collections/priority-queue");
const { normalizeWeightedNeighbors, assertGraph } = require("./utils");

const widestPath = (graph, startVertex) => {
    assertGraph(graph, "widestPath");

    const capacity = new Map();
    const previous = new Map();
    const queue = new PriorityQueue((first, second) => second.priority - first.priority);

    graph.vertices().forEach((vertex) => {
        capacity.set(vertex, Number.NEGATIVE_INFINITY);
        previous.set(vertex, null);
    });

    if (!graph.hasVertex(startVertex)) {
        return {
            capacities: capacity,
            previous,
        };
    }

    capacity.set(startVertex, Infinity);
    queue.enqueue(startVertex, Infinity);

    while (!queue.isEmpty()) {
        const current = queue.dequeue().value;

        normalizeWeightedNeighbors(graph.neighbors(current)).forEach(({ vertex, weight }) => {
            const candidate = Math.min(capacity.get(current), weight);

            if (candidate > capacity.get(vertex)) {
                capacity.set(vertex, candidate);
                previous.set(vertex, current);
                queue.enqueue(vertex, candidate);
            }
        });
    }

    return {
        capacities: capacity,
        previous,
    };
};

module.exports = widestPath;
