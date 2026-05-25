const { normalizeNeighbors, assertGraph } = require("./utils");

const gabowSCC = (graph) => {
    assertGraph(graph, "gabowSCC");

    const preorder = new Map();
    const assigned = new Set();
    const stack = [];
    const boundaries = [];
    const components = [];
    let time = 0;

    const dfs = (vertex) => {
        preorder.set(vertex, time);
        time += 1;
        stack.push(vertex);
        boundaries.push(vertex);

        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            if (!preorder.has(neighbor)) {
                dfs(neighbor);
            } else if (!assigned.has(neighbor)) {
                while (
                    boundaries.length > 0 &&
                    preorder.get(boundaries[boundaries.length - 1]) > preorder.get(neighbor)
                ) {
                    boundaries.pop();
                }
            }
        });

        if (boundaries[boundaries.length - 1] === vertex) {
            boundaries.pop();
            const component = [];

            while (stack.length > 0) {
                const member = stack.pop();
                assigned.add(member);
                component.push(member);

                if (member === vertex) {
                    break;
                }
            }

            components.push(component);
        }
    };

    graph.vertices().forEach((vertex) => {
        if (!preorder.has(vertex)) {
            dfs(vertex);
        }
    });

    return components;
};

module.exports = gabowSCC;
