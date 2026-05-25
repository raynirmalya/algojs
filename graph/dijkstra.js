const PriorityQueue = require("../collections/priority-queue");

const dijkstra = (graph, startVertex) => {
    if (!graph || typeof graph.neighbors !== "function" || typeof graph.vertices !== "function") {
        throw new TypeError("dijkstra expects a weighted graph-like object.");
    }

    const distances = new Map();
    const previous = new Map();

    graph.vertices().forEach((vertex) => {
        distances.set(vertex, Infinity);
        previous.set(vertex, null);
    });

    if (!graph.hasVertex(startVertex)) {
        return { distances, previous };
    }

    const queue = new PriorityQueue();
    distances.set(startVertex, 0);
    queue.enqueue(startVertex, 0);

    while (!queue.isEmpty()) {
        const currentEntry = queue.dequeue();
        const currentVertex = currentEntry.value;
        const currentDistance = currentEntry.priority;

        if (currentDistance > distances.get(currentVertex)) {
            continue;
        }

        graph.neighbors(currentVertex).forEach(({ vertex, weight }) => {
            const candidateDistance = currentDistance + weight;

            if (candidateDistance < distances.get(vertex)) {
                distances.set(vertex, candidateDistance);
                previous.set(vertex, currentVertex);
                queue.enqueue(vertex, candidateDistance);
            }
        });
    }

    return {
        distances,
        previous,
    };
};

module.exports = dijkstra;
