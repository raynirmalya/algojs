const { normalizeNeighbors, assertGraph } = require("./utils");

const topologicalSortDFS = (graph) => {
    assertGraph(graph, "topologicalSortDFS");

    const order = [];
    const state = new Map();

    const visit = (vertex) => {
        const currentState = state.get(vertex) || 0;

        if (currentState === 1) {
            throw new Error("Graph contains a cycle, so a topological order does not exist.");
        }

        if (currentState === 2) {
            return;
        }

        state.set(vertex, 1);

        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            visit(neighbor);
        });

        state.set(vertex, 2);
        order.push(vertex);
    };

    graph.vertices().forEach((vertex) => {
        if ((state.get(vertex) || 0) === 0) {
            visit(vertex);
        }
    });

    return order.reverse();
};

module.exports = topologicalSortDFS;
