const DisjointSetUnion = require("../collections/disjoint-set");
const { assertGraph } = require("./utils");

const boruvkaMST = (graph) => {
    assertGraph(graph, "boruvkaMST");

    const vertices = graph.vertices();
    const edges = graph.getEdges();
    const dsu = new DisjointSetUnion(vertices);
    const mstEdges = [];
    let totalWeight = 0;

    while (mstEdges.length < vertices.length - 1) {
        const cheapest = new Map();

        edges.forEach((edge) => {
            const fromRoot = dsu.find(edge.from);
            const toRoot = dsu.find(edge.to);

            if (fromRoot === toRoot) {
                return;
            }

            if (!cheapest.has(fromRoot) || cheapest.get(fromRoot).weight > edge.weight) {
                cheapest.set(fromRoot, edge);
            }

            if (!cheapest.has(toRoot) || cheapest.get(toRoot).weight > edge.weight) {
                cheapest.set(toRoot, edge);
            }
        });

        let merged = false;

        cheapest.forEach((edge) => {
            if (!dsu.connected(edge.from, edge.to)) {
                dsu.union(edge.from, edge.to);
                mstEdges.push(edge);
                totalWeight += edge.weight;
                merged = true;
            }
        });

        if (!merged) {
            break;
        }
    }

    return {
        edges: mstEdges,
        totalWeight,
    };
};

module.exports = boruvkaMST;
