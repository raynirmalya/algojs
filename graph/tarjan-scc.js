const { normalizeNeighbors, assertGraph } = require("./utils");

const tarjanSCC = (graph) => {
    assertGraph(graph, "tarjanSCC");

    let index = 0;
    const indexes = new Map();
    const lowLink = new Map();
    const stack = [];
    const inStack = new Set();
    const components = [];

    const visit = (vertex) => {
        indexes.set(vertex, index);
        lowLink.set(vertex, index);
        index += 1;
        stack.push(vertex);
        inStack.add(vertex);

        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            if (!indexes.has(neighbor)) {
                visit(neighbor);
                lowLink.set(vertex, Math.min(lowLink.get(vertex), lowLink.get(neighbor)));
            } else if (inStack.has(neighbor)) {
                lowLink.set(vertex, Math.min(lowLink.get(vertex), indexes.get(neighbor)));
            }
        });

        if (lowLink.get(vertex) === indexes.get(vertex)) {
            const component = [];
            let member;

            do {
                member = stack.pop();
                inStack.delete(member);
                component.push(member);
            } while (member !== vertex);

            components.push(component);
        }
    };

    graph.vertices().forEach((vertex) => {
        if (!indexes.has(vertex)) {
            visit(vertex);
        }
    });

    return components;
};

module.exports = tarjanSCC;
