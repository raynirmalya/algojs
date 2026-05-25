const { assertGraph } = require("./utils");

const kargerMinCut = (graph, randomFn) => {
    assertGraph(graph, "kargerMinCut");

    if (graph.isDirected) {
        throw new Error("kargerMinCut currently supports undirected graphs only.");
    }

    const rand = typeof randomFn === "function" ? randomFn : Math.random;
    const vertices = graph.vertices();
    const edges = graph.getEdges().map((edge) => ({ ...edge }));

    if (vertices.length < 2) {
        return {
            cutSize: 0,
            partition: [vertices.slice()],
        };
    }

    const parent = new Map(vertices.map((vertex) => [vertex, vertex]));

    const find = (vertex) => {
        let current = vertex;

        while (parent.get(current) !== current) {
            current = parent.get(current);
        }

        return current;
    };

    const union = (first, second) => {
        const firstRoot = find(first);
        const secondRoot = find(second);

        if (firstRoot !== secondRoot) {
            parent.set(secondRoot, firstRoot);
            return true;
        }

        return false;
    };

    let components = vertices.length;

    while (components > 2) {
        const edge = edges[Math.floor(rand() * edges.length)];

        if (union(edge.from, edge.to)) {
            components -= 1;
        }
    }

    const groups = new Map();

    vertices.forEach((vertex) => {
        const root = find(vertex);
        if (!groups.has(root)) {
            groups.set(root, []);
        }
        groups.get(root).push(vertex);
    });

    const cutSize = edges.reduce(
        (count, edge) => count + (find(edge.from) !== find(edge.to) ? 1 : 0),
        0
    );

    return {
        cutSize,
        partition: Array.from(groups.values()),
    };
};

module.exports = kargerMinCut;
