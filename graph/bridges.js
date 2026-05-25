const { normalizeNeighbors, assertGraph } = require("./utils");

const bridges = (graph) => {
    assertGraph(graph, "bridges");

    let time = 0;
    const visited = new Set();
    const discovery = new Map();
    const low = new Map();
    const result = [];

    const visit = (vertex, parent) => {
        visited.add(vertex);
        discovery.set(vertex, time);
        low.set(vertex, time);
        time += 1;

        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                visit(neighbor, vertex);
                low.set(vertex, Math.min(low.get(vertex), low.get(neighbor)));

                if (low.get(neighbor) > discovery.get(vertex)) {
                    result.push([vertex, neighbor]);
                }
            } else if (neighbor !== parent) {
                low.set(vertex, Math.min(low.get(vertex), discovery.get(neighbor)));
            }
        });
    };

    graph.vertices().forEach((vertex) => {
        if (!visited.has(vertex)) {
            visit(vertex, null);
        }
    });

    return result;
};

module.exports = bridges;
