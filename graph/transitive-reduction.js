const { normalizeNeighbors, assertGraph } = require("./utils");

const transitiveReduction = (graph) => {
    assertGraph(graph, "transitiveReduction");

    const vertices = graph.vertices();
    const adjacency = new Map(vertices.map((vertex) => [vertex, normalizeNeighbors(graph.neighbors(vertex))]));
    const reduction = [];

    const reachableWithoutEdge = (start, target, bannedFrom, bannedTo) => {
        const queue = [start];
        const seen = new Set([start]);

        for (let index = 0; index < queue.length; index += 1) {
            const current = queue[index];

            for (const neighbor of adjacency.get(current) || []) {
                if (current === bannedFrom && neighbor === bannedTo) {
                    continue;
                }

                if (neighbor === target) {
                    return true;
                }

                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return false;
    };

    vertices.forEach((from) => {
        (adjacency.get(from) || []).forEach((to) => {
            if (!reachableWithoutEdge(from, to, from, to)) {
                reduction.push([from, to]);
            }
        });
    });

    return reduction;
};

module.exports = transitiveReduction;
