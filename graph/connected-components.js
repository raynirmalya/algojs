const { normalizeNeighbors, assertGraph } = require("./utils");

const connectedComponents = (graph) => {
    assertGraph(graph, "connectedComponents");

    const visited = new Set();
    const components = [];

    graph.vertices().forEach((startVertex) => {
        if (visited.has(startVertex)) {
            return;
        }

        const stack = [startVertex];
        const component = [];

        while (stack.length > 0) {
            const vertex = stack.pop();

            if (visited.has(vertex)) {
                continue;
            }

            visited.add(vertex);
            component.push(vertex);

            normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            });
        }

        components.push(component);
    });

    return components;
};

module.exports = connectedComponents;
