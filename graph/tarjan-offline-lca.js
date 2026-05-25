const { normalizeNeighbors, assertGraph } = require("./utils");

const tarjanOfflineLCA = (graph, rootVertex, queries) => {
    assertGraph(graph, "tarjanOfflineLCA");

    const vertices = graph.vertices();

    if (vertices.length === 0) {
        return [];
    }

    const root = rootVertex === undefined ? vertices[0] : rootVertex;
    const parent = new Map();
    const ancestor = new Map();
    const visited = new Set();
    const answers = [];
    const queryMap = new Map();

    const find = (vertex) => {
        if (parent.get(vertex) !== vertex) {
            parent.set(vertex, find(parent.get(vertex)));
        }

        return parent.get(vertex);
    };

    const union = (first, second) => {
        parent.set(find(second), find(first));
    };

    queries.forEach(([first, second], index) => {
        if (!queryMap.has(first)) {
            queryMap.set(first, []);
        }

        if (!queryMap.has(second)) {
            queryMap.set(second, []);
        }

        queryMap.get(first).push({ other: second, index });
        queryMap.get(second).push({ other: first, index });
    });

    const dfs = (vertex, parentVertex) => {
        parent.set(vertex, vertex);
        ancestor.set(vertex, vertex);

        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            if (neighbor === parentVertex) {
                return;
            }

            dfs(neighbor, vertex);
            union(vertex, neighbor);
            ancestor.set(find(vertex), vertex);
        });

        visited.add(vertex);

        (queryMap.get(vertex) || []).forEach(({ other, index }) => {
            if (visited.has(other)) {
                answers[index] = ancestor.get(find(other));
            }
        });
    };

    dfs(root, null);
    return answers;
};

module.exports = tarjanOfflineLCA;
