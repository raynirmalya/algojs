const { normalizeNeighbors, assertGraph } = require("./utils");

const allTopologicalSorts = (graph) => {
    assertGraph(graph, "allTopologicalSorts");

    const vertices = graph.vertices();
    const inDegree = new Map(vertices.map((vertex) => [vertex, 0]));

    vertices.forEach((vertex) => {
        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            inDegree.set(neighbor, inDegree.get(neighbor) + 1);
        });
    });

    const results = [];
    const order = [];
    const used = new Set();

    const backtrack = () => {
        let progressed = false;

        vertices.forEach((vertex) => {
            if (used.has(vertex) || inDegree.get(vertex) !== 0) {
                return;
            }

            progressed = true;
            used.add(vertex);
            order.push(vertex);

            normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
                inDegree.set(neighbor, inDegree.get(neighbor) - 1);
            });

            backtrack();

            normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
                inDegree.set(neighbor, inDegree.get(neighbor) + 1);
            });

            order.pop();
            used.delete(vertex);
        });

        if (!progressed && order.length === vertices.length) {
            results.push(order.slice());
        }
    };

    backtrack();
    return results;
};

module.exports = allTopologicalSorts;
