const { assertGraph, normalizeNeighbors } = require("./utils");

const hits = (graph, iterations) => {
    assertGraph(graph, "hits");

    const rounds = iterations === undefined ? 25 : iterations;
    const vertices = graph.vertices();
    const authority = new Map(vertices.map((vertex) => [vertex, 1]));
    const hub = new Map(vertices.map((vertex) => [vertex, 1]));

    for (let iteration = 0; iteration < rounds; iteration += 1) {
        vertices.forEach((vertex) => {
            let authorityScore = 0;

            vertices.forEach((source) => {
                if (normalizeNeighbors(graph.neighbors(source)).includes(vertex)) {
                    authorityScore += hub.get(source);
                }
            });

            authority.set(vertex, authorityScore);
        });

        const authorityNorm = Math.sqrt(
            vertices.reduce((sum, vertex) => sum + (authority.get(vertex) ** 2), 0)
        ) || 1;

        vertices.forEach((vertex) => {
            authority.set(vertex, authority.get(vertex) / authorityNorm);
        });

        vertices.forEach((vertex) => {
            const hubScore = normalizeNeighbors(graph.neighbors(vertex)).reduce(
                (sum, neighbor) => sum + authority.get(neighbor),
                0
            );
            hub.set(vertex, hubScore);
        });

        const hubNorm = Math.sqrt(vertices.reduce((sum, vertex) => sum + (hub.get(vertex) ** 2), 0)) || 1;

        vertices.forEach((vertex) => {
            hub.set(vertex, hub.get(vertex) / hubNorm);
        });
    }

    return {
        authority,
        hub,
    };
};

module.exports = hits;
