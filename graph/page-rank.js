const { assertGraph, normalizeNeighbors } = require("./utils");

const pageRank = (graph, options) => {
    assertGraph(graph, "pageRank");

    const config = options || {};
    const damping = config.damping === undefined ? 0.85 : config.damping;
    const iterations = config.iterations === undefined ? 50 : config.iterations;
    const vertices = graph.vertices();
    const count = vertices.length;

    if (count === 0) {
        return new Map();
    }

    let ranks = new Map(vertices.map((vertex) => [vertex, 1 / count]));
    const inbound = new Map(vertices.map((vertex) => [vertex, []]));
    const outDegree = new Map();

    vertices.forEach((vertex) => {
        const neighbors = normalizeNeighbors(graph.neighbors(vertex));
        outDegree.set(vertex, neighbors.length);

        neighbors.forEach((neighbor) => {
            if (!inbound.has(neighbor)) {
                inbound.set(neighbor, []);
            }

            inbound.get(neighbor).push(vertex);
        });
    });

    for (let iteration = 0; iteration < iterations; iteration += 1) {
        const sinkRank = vertices
            .filter((vertex) => outDegree.get(vertex) === 0)
            .reduce((sum, vertex) => sum + ranks.get(vertex), 0);
        const nextRanks = new Map();

        vertices.forEach((vertex) => {
            let rank = (1 - damping) / count;
            rank += damping * (sinkRank / count);

            inbound.get(vertex).forEach((source) => {
                rank += damping * (ranks.get(source) / outDegree.get(source));
            });

            nextRanks.set(vertex, rank);
        });

        ranks = nextRanks;
    }

    return ranks;
};

module.exports = pageRank;
