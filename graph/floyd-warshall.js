const { assertGraph } = require("./utils");

const floydWarshall = (graph) => {
    assertGraph(graph, "floydWarshall");

    const vertices = graph.vertices();
    const distances = new Map();
    const next = new Map();

    vertices.forEach((from) => {
        distances.set(from, new Map());
        next.set(from, new Map());

        vertices.forEach((to) => {
            distances.get(from).set(to, from === to ? 0 : Infinity);
            next.get(from).set(to, null);
        });
    });

    graph.getEdges().forEach(({ from, to, weight }) => {
        distances.get(from).set(to, Math.min(distances.get(from).get(to), weight));
        next.get(from).set(to, to);

        if (!graph.isDirected) {
            distances.get(to).set(from, Math.min(distances.get(to).get(from), weight));
            next.get(to).set(from, from);
        }
    });

    vertices.forEach((via) => {
        vertices.forEach((from) => {
            vertices.forEach((to) => {
                const candidateDistance =
                    distances.get(from).get(via) + distances.get(via).get(to);

                if (candidateDistance < distances.get(from).get(to)) {
                    distances.get(from).set(to, candidateDistance);
                    next.get(from).set(to, next.get(from).get(via));
                }
            });
        });
    });

    return {
        distances,
        next,
    };
};

module.exports = floydWarshall;
