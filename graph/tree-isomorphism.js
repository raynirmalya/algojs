const Graph = require("./Graph");
const treeCenters = require("./tree-centers");
const { normalizeNeighbors, assertGraph } = require("./utils");

const encodeTree = (graph, vertex, parent) => {
    const labels = normalizeNeighbors(graph.neighbors(vertex))
        .filter((neighbor) => neighbor !== parent)
        .map((neighbor) => encodeTree(graph, neighbor, vertex))
        .sort();

    return `(${labels.join("")})`;
};

const treeIsomorphism = (firstGraph, secondGraph) => {
    assertGraph(firstGraph, "treeIsomorphism");
    assertGraph(secondGraph, "treeIsomorphism");

    const firstVertices = firstGraph.vertices();
    const secondVertices = secondGraph.vertices();

    if (firstVertices.length !== secondVertices.length) {
        return false;
    }

    if (firstVertices.length === 0) {
        return true;
    }

    const firstCenters = treeCenters(firstGraph);
    const secondCenters = treeCenters(secondGraph);
    const secondEncodings = new Set(secondCenters.map((center) => encodeTree(secondGraph, center, null)));

    return firstCenters.some((center) => secondEncodings.has(encodeTree(firstGraph, center, null)));
};

treeIsomorphism.Graph = Graph;

module.exports = treeIsomorphism;
