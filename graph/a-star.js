const PriorityQueue = require("../collections/priority-queue");
const { assertGraph } = require("./utils");

const reconstructPath = (cameFrom, current) => {
    const path = [current];
    let node = current;

    while (cameFrom.get(node) !== null) {
        node = cameFrom.get(node);
        path.push(node);
    }

    return path.reverse();
};

const aStar = (graph, startVertex, goalVertex, heuristic) => {
    assertGraph(graph, "aStar");

    const estimate = typeof heuristic === "function" ? heuristic : () => 0;
    const openSet = new PriorityQueue();
    const cameFrom = new Map();
    const gScore = new Map();
    const fScore = new Map();

    graph.vertices().forEach((vertex) => {
        cameFrom.set(vertex, null);
        gScore.set(vertex, Infinity);
        fScore.set(vertex, Infinity);
    });

    if (!graph.hasVertex(startVertex) || !graph.hasVertex(goalVertex)) {
        return {
            distance: Infinity,
            path: [],
        };
    }

    gScore.set(startVertex, 0);
    fScore.set(startVertex, estimate(startVertex, goalVertex));
    openSet.enqueue(startVertex, fScore.get(startVertex));

    while (!openSet.isEmpty()) {
        const current = openSet.dequeue().value;

        if (current === goalVertex) {
            return {
                distance: gScore.get(current),
                path: reconstructPath(cameFrom, current),
            };
        }

        graph.neighbors(current).forEach(({ vertex, weight }) => {
            const tentativeScore = gScore.get(current) + weight;

            if (tentativeScore < gScore.get(vertex)) {
                cameFrom.set(vertex, current);
                gScore.set(vertex, tentativeScore);
                fScore.set(vertex, tentativeScore + estimate(vertex, goalVertex));
                openSet.enqueue(vertex, fScore.get(vertex));
            }
        });
    }

    return {
        distance: Infinity,
        path: [],
    };
};

module.exports = aStar;
