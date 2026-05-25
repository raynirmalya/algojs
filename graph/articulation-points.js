const { normalizeNeighbors, assertGraph } = require("./utils");

const articulationPoints = (graph) => {
    assertGraph(graph, "articulationPoints");

    let time = 0;
    const visited = new Set();
    const discovery = new Map();
    const low = new Map();
    const result = new Set();

    const visit = (vertex, parent) => {
        visited.add(vertex);
        discovery.set(vertex, time);
        low.set(vertex, time);
        time += 1;

        let childCount = 0;

        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                childCount += 1;
                visit(neighbor, vertex);
                low.set(vertex, Math.min(low.get(vertex), low.get(neighbor)));

                if (parent !== null && low.get(neighbor) >= discovery.get(vertex)) {
                    result.add(vertex);
                }
            } else if (neighbor !== parent) {
                low.set(vertex, Math.min(low.get(vertex), discovery.get(neighbor)));
            }
        });

        if (parent === null && childCount > 1) {
            result.add(vertex);
        }
    };

    graph.vertices().forEach((vertex) => {
        if (!visited.has(vertex)) {
            visit(vertex, null);
        }
    });

    return Array.from(result);
};

module.exports = articulationPoints;
