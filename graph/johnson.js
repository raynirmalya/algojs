const PriorityQueue = require("../collections/priority-queue");
const { assertGraph } = require("./utils");

const normalizeWeightedNeighbors = (graph, vertex) =>
    graph.neighbors(vertex).map((neighbor) =>
        neighbor && typeof neighbor === "object" && Object.prototype.hasOwnProperty.call(neighbor, "vertex")
            ? { vertex: neighbor.vertex, weight: neighbor.weight === undefined ? 1 : neighbor.weight }
            : { vertex: neighbor, weight: 1 }
    );

const johnsonShortestPaths = (graph) => {
    assertGraph(graph, "johnsonShortestPaths");

    const vertices = graph.vertices();
    const edges = [];

    vertices.forEach((vertex) => {
        normalizeWeightedNeighbors(graph, vertex).forEach((neighbor) => {
            edges.push({
                from: vertex,
                to: neighbor.vertex,
                weight: neighbor.weight,
            });
        });
    });

    const potentials = new Map(vertices.map((vertex) => [vertex, 0]));

    for (let iteration = 0; iteration < vertices.length - 1; iteration += 1) {
        let updated = false;

        edges.forEach(({ from, to, weight }) => {
            const nextDistance = potentials.get(from) + weight;

            if (nextDistance < potentials.get(to)) {
                potentials.set(to, nextDistance);
                updated = true;
            }
        });

        if (!updated) {
            break;
        }
    }

    const hasNegativeCycle = edges.some(
        ({ from, to, weight }) => potentials.get(from) + weight < potentials.get(to)
    );

    if (hasNegativeCycle) {
        return {
            distances: new Map(),
            hasNegativeCycle: true,
        };
    }

    const distances = new Map();

    vertices.forEach((source) => {
        const queue = new PriorityQueue();
        const sourceDistances = new Map(vertices.map((vertex) => [vertex, Infinity]));
        sourceDistances.set(source, 0);
        queue.enqueue(source, 0);

        while (!queue.isEmpty()) {
            const current = queue.dequeue();
            const currentVertex = current.value;
            const currentDistance = current.priority;

            if (currentDistance > sourceDistances.get(currentVertex)) {
                continue;
            }

            normalizeWeightedNeighbors(graph, currentVertex).forEach(({ vertex, weight }) => {
                const reweighted = weight + potentials.get(currentVertex) - potentials.get(vertex);
                const nextDistance = currentDistance + reweighted;

                if (nextDistance < sourceDistances.get(vertex)) {
                    sourceDistances.set(vertex, nextDistance);
                    queue.enqueue(vertex, nextDistance);
                }
            });
        }

        const actualDistances = new Map();

        sourceDistances.forEach((distance, vertex) => {
            if (distance === Infinity) {
                actualDistances.set(vertex, Infinity);
            } else {
                actualDistances.set(vertex, distance - potentials.get(source) + potentials.get(vertex));
            }
        });

        distances.set(source, actualDistances);
    });

    return {
        distances,
        hasNegativeCycle: false,
    };
};

module.exports = johnsonShortestPaths;
