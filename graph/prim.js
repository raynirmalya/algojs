const PriorityQueue = require("../collections/priority-queue");
const { assertGraph } = require("./utils");

const primMST = (graph, startVertex) => {
    assertGraph(graph, "primMST");

    const vertices = graph.vertices();

    if (vertices.length === 0) {
        return {
            edges: [],
            totalWeight: 0,
        };
    }

    const start = startVertex !== undefined ? startVertex : vertices[0];

    if (!graph.hasVertex(start)) {
        throw new Error("Starting vertex does not exist in the graph.");
    }

    const visited = new Set([start]);
    const queue = new PriorityQueue();
    const mstEdges = [];
    let totalWeight = 0;

    graph.neighbors(start).forEach(({ vertex, weight }) => {
        queue.enqueue({ from: start, to: vertex, weight }, weight);
    });

    while (!queue.isEmpty() && mstEdges.length < vertices.length - 1) {
        const edge = queue.dequeue().value;

        if (visited.has(edge.to)) {
            continue;
        }

        visited.add(edge.to);
        mstEdges.push(edge);
        totalWeight += edge.weight;

        graph.neighbors(edge.to).forEach(({ vertex, weight }) => {
            if (!visited.has(vertex)) {
                queue.enqueue({ from: edge.to, to: vertex, weight }, weight);
            }
        });
    }

    return {
        edges: mstEdges,
        totalWeight,
    };
};

module.exports = primMST;
