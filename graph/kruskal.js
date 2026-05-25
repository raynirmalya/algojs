const DisjointSetUnion = require("../collections/disjoint-set");

const kruskalMST = (graph) => {
    if (!graph || typeof graph.getEdges !== "function" || typeof graph.vertices !== "function") {
        throw new TypeError("kruskalMST expects a weighted graph-like object.");
    }

    const edges = graph.getEdges().slice().sort((firstEdge, secondEdge) => firstEdge.weight - secondEdge.weight);
    const unionFind = new DisjointSetUnion(graph.vertices());
    const mstEdges = [];
    let totalWeight = 0;

    edges.forEach((edge) => {
        if (!unionFind.connected(edge.from, edge.to)) {
            unionFind.union(edge.from, edge.to);
            mstEdges.push(edge);
            totalWeight += edge.weight;
        }
    });

    return {
        edges: mstEdges,
        totalWeight,
    };
};

module.exports = kruskalMST;
