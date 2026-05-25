const { assertGraph } = require("./utils");

const bellmanFord = (graph, startVertex) => {
    assertGraph(graph, "bellmanFord");

    const vertices = graph.vertices();
    const distances = new Map(vertices.map((vertex) => [vertex, Infinity]));
    const previous = new Map(vertices.map((vertex) => [vertex, null]));

    if (!graph.hasVertex(startVertex)) {
        return { distances, previous, hasNegativeCycle: false };
    }

    const edges = graph.getEdges().flatMap((edge) =>
        graph.isDirected ? [edge] : [edge, { from: edge.to, to: edge.from, weight: edge.weight }]
    );

    distances.set(startVertex, 0);

    for (let iteration = 0; iteration < vertices.length - 1; iteration += 1) {
        let updated = false;

        edges.forEach(({ from, to, weight }) => {
            const fromDistance = distances.get(from);

            if (fromDistance !== Infinity && fromDistance + weight < distances.get(to)) {
                distances.set(to, fromDistance + weight);
                previous.set(to, from);
                updated = true;
            }
        });

        if (!updated) {
            break;
        }
    }

    const hasNegativeCycle = edges.some(({ from, to, weight }) => {
        const fromDistance = distances.get(from);
        return fromDistance !== Infinity && fromDistance + weight < distances.get(to);
    });

    return {
        distances,
        previous,
        hasNegativeCycle,
    };
};

module.exports = bellmanFord;
