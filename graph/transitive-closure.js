const { assertGraph, normalizeNeighbors } = require("./utils");

const transitiveClosure = (graph) => {
    assertGraph(graph, "transitiveClosure");

    const vertices = graph.vertices();
    const reachability = new Map();

    vertices.forEach((from) => {
        reachability.set(from, new Map(vertices.map((to) => [to, from === to])));
        normalizeNeighbors(graph.neighbors(from)).forEach((neighbor) => {
            reachability.get(from).set(neighbor, true);
        });
    });

    vertices.forEach((via) => {
        vertices.forEach((from) => {
            vertices.forEach((to) => {
                if (!reachability.get(from).get(to)) {
                    reachability
                        .get(from)
                        .set(to, reachability.get(from).get(via) && reachability.get(via).get(to));
                }
            });
        });
    });

    return reachability;
};

module.exports = transitiveClosure;
