const { normalizeNeighbors, assertGraph } = require("./utils");

const topologicalSort = (graph) => {
    assertGraph(graph, "topologicalSort");

    const vertices = graph.vertices();
    const inDegree = new Map(vertices.map((vertex) => [vertex, 0]));

    vertices.forEach((vertex) => {
        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            inDegree.set(neighbor, (inDegree.get(neighbor) || 0) + 1);
        });
    });

    const queue = vertices.filter((vertex) => inDegree.get(vertex) === 0);
    const order = [];

    for (let index = 0; index < queue.length; index += 1) {
        const vertex = queue[index];
        order.push(vertex);

        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            const nextDegree = inDegree.get(neighbor) - 1;
            inDegree.set(neighbor, nextDegree);

            if (nextDegree === 0) {
                queue.push(neighbor);
            }
        });
    }

    if (order.length !== vertices.length) {
        throw new Error("Graph contains a cycle, so a topological order does not exist.");
    }

    return order;
};

module.exports = topologicalSort;
