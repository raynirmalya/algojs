const { normalizeNeighbors, assertGraph } = require("./utils");

const edgeKey = (from, to) => `${from}->${to}`;

const biconnectedComponents = (graph) => {
    assertGraph(graph, "biconnectedComponents");

    const discovery = new Map();
    const low = new Map();
    const stack = [];
    const components = [];
    let time = 0;

    const popComponent = (stopEdge) => {
        const vertices = new Set();

        while (stack.length > 0) {
            const edge = stack.pop();
            vertices.add(edge[0]);
            vertices.add(edge[1]);

            if (edgeKey(edge[0], edge[1]) === edgeKey(stopEdge[0], stopEdge[1])) {
                break;
            }
        }

        if (vertices.size > 0) {
            components.push(Array.from(vertices));
        }
    };

    const flushRemaining = () => {
        const vertices = new Set();

        while (stack.length > 0) {
            const edge = stack.pop();
            vertices.add(edge[0]);
            vertices.add(edge[1]);
        }

        if (vertices.size > 0) {
            components.push(Array.from(vertices));
        }
    };

    const dfs = (vertex, parent) => {
        discovery.set(vertex, time);
        low.set(vertex, time);
        time += 1;
        let childCount = 0;

        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            if (neighbor === parent) {
                return;
            }

            if (!discovery.has(neighbor)) {
                childCount += 1;
                stack.push([vertex, neighbor]);
                dfs(neighbor, vertex);
                low.set(vertex, Math.min(low.get(vertex), low.get(neighbor)));

                if (
                    (parent !== null && low.get(neighbor) >= discovery.get(vertex)) ||
                    (parent === null && childCount > 1)
                ) {
                    popComponent([vertex, neighbor]);
                }
            } else if (discovery.get(neighbor) < discovery.get(vertex)) {
                stack.push([vertex, neighbor]);
                low.set(vertex, Math.min(low.get(vertex), discovery.get(neighbor)));
            }
        });
    };

    graph.vertices().forEach((vertex) => {
        if (!discovery.has(vertex)) {
            dfs(vertex, null);

            if (stack.length > 0) {
                flushRemaining();
            }
        }
    });

    return components;
};

module.exports = biconnectedComponents;
