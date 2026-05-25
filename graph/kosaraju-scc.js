const { normalizeNeighbors, assertGraph } = require("./utils");

const kosarajuSCC = (graph) => {
    assertGraph(graph, "kosarajuSCC");

    const visited = new Set();
    const order = [];

    const dfs = (vertex) => {
        visited.add(vertex);

        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        });

        order.push(vertex);
    };

    graph.vertices().forEach((vertex) => {
        if (!visited.has(vertex)) {
            dfs(vertex);
        }
    });

    const reversed = new Map(graph.vertices().map((vertex) => [vertex, []]));

    graph.vertices().forEach((vertex) => {
        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            reversed.get(neighbor).push(vertex);
        });
    });

    visited.clear();
    const components = [];

    const reverseDfs = (vertex, component) => {
        visited.add(vertex);
        component.push(vertex);

        reversed.get(vertex).forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                reverseDfs(neighbor, component);
            }
        });
    };

    for (let index = order.length - 1; index >= 0; index -= 1) {
        const vertex = order[index];

        if (!visited.has(vertex)) {
            const component = [];
            reverseDfs(vertex, component);
            components.push(component);
        }
    }

    return components;
};

module.exports = kosarajuSCC;
