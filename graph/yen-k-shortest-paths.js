const PriorityQueue = require("../collections/priority-queue");
const { normalizeWeightedNeighbors, assertGraph } = require("./utils");

const shortestPath = (graph, startVertex, goalVertex, bannedEdges, bannedVertices) => {
    const distances = new Map();
    const previous = new Map();
    const queue = new PriorityQueue();

    graph.vertices().forEach((vertex) => {
        distances.set(vertex, Infinity);
        previous.set(vertex, null);
    });

    distances.set(startVertex, 0);
    queue.enqueue(startVertex, 0);

    while (!queue.isEmpty()) {
        const current = queue.dequeue().value;

        if (current === goalVertex) {
            break;
        }

        normalizeWeightedNeighbors(graph.neighbors(current)).forEach(({ vertex, weight }) => {
            if (bannedVertices.has(vertex) || bannedEdges.has(`${current}->${vertex}`)) {
                return;
            }

            const nextDistance = distances.get(current) + weight;

            if (nextDistance < distances.get(vertex)) {
                distances.set(vertex, nextDistance);
                previous.set(vertex, current);
                queue.enqueue(vertex, nextDistance);
            }
        });
    }

    if (distances.get(goalVertex) === Infinity) {
        return null;
    }

    const path = [];
    let current = goalVertex;

    while (current !== null) {
        path.push(current);
        current = previous.get(current);
    }

    path.reverse();

    return {
        cost: distances.get(goalVertex),
        path,
    };
};

const pathCost = (graph, path) => {
    let cost = 0;

    for (let index = 0; index < path.length - 1; index += 1) {
        cost += graph.getWeight(path[index], path[index + 1]);
    }

    return cost;
};

const yenKShortestPaths = (graph, startVertex, goalVertex, limit) => {
    assertGraph(graph, "yenKShortestPaths");

    const firstPath = shortestPath(graph, startVertex, goalVertex, new Set(), new Set());

    if (!firstPath || !Number.isInteger(limit) || limit <= 0) {
        return [];
    }

    const accepted = [firstPath];
    const candidates = new PriorityQueue((first, second) => first.cost - second.cost);
    const seen = new Set([firstPath.path.join("->")]);

    for (let pathIndex = 1; pathIndex < limit; pathIndex += 1) {
        const previousPath = accepted[pathIndex - 1];

        for (let spurIndex = 0; spurIndex < previousPath.path.length - 1; spurIndex += 1) {
            const rootPath = previousPath.path.slice(0, spurIndex + 1);
            const spurNode = rootPath[rootPath.length - 1];
            const bannedEdges = new Set();
            const bannedVertices = new Set(rootPath.slice(0, -1));

            accepted.forEach((candidate) => {
                const samePrefix = rootPath.every((vertex, index) => candidate.path[index] === vertex);

                if (samePrefix && candidate.path[spurIndex + 1] !== undefined) {
                    bannedEdges.add(`${candidate.path[spurIndex]}->${candidate.path[spurIndex + 1]}`);
                }
            });

            const spurPath = shortestPath(graph, spurNode, goalVertex, bannedEdges, bannedVertices);

            if (!spurPath) {
                continue;
            }

            const totalPath = rootPath.slice(0, -1).concat(spurPath.path);
            const key = totalPath.join("->");

            if (seen.has(key)) {
                continue;
            }

            seen.add(key);
            candidates.enqueue(
                {
                    path: totalPath,
                    cost: pathCost(graph, totalPath),
                },
                pathCost(graph, totalPath)
            );
        }

        if (candidates.isEmpty()) {
            break;
        }

        accepted.push(candidates.dequeue().value);
    }

    return accepted;
};

module.exports = yenKShortestPaths;
