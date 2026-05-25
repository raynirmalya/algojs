const { normalizeWeightedNeighbors, assertGraph } = require("./utils");

const reconstructPath = (path) => path.map((step) => step.vertex);

const idaStar = (graph, startVertex, goalVertex, heuristic) => {
    assertGraph(graph, "idaStar");

    if (!graph.hasVertex(startVertex) || !graph.hasVertex(goalVertex)) {
        return {
            distance: Infinity,
            path: [],
        };
    }

    const estimate = typeof heuristic === "function" ? heuristic : () => 0;
    const path = [{ vertex: startVertex, cost: 0 }];

    const search = (gScore, bound) => {
        const current = path[path.length - 1].vertex;
        const fScore = gScore + estimate(current, goalVertex);

        if (fScore > bound) {
            return { found: false, bound: fScore };
        }

        if (current === goalVertex) {
            return { found: true, distance: gScore };
        }

        let minimum = Infinity;

        for (const { vertex, weight } of normalizeWeightedNeighbors(graph.neighbors(current))) {
            if (path.some((step) => step.vertex === vertex)) {
                continue;
            }

            path.push({ vertex, cost: weight });
            const result = search(gScore + weight, bound);

            if (result.found) {
                return result;
            }

            minimum = Math.min(minimum, result.bound);
            path.pop();
        }

        return { found: false, bound: minimum };
    };

    let bound = estimate(startVertex, goalVertex);

    while (bound < Infinity) {
        const result = search(0, bound);

        if (result.found) {
            return {
                distance: result.distance,
                path: reconstructPath(path),
            };
        }

        bound = result.bound;
    }

    return {
        distance: Infinity,
        path: [],
    };
};

module.exports = idaStar;
