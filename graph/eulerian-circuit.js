const eulerianPath = require("./eulerian-path");
const { assertGraph, normalizeNeighbors } = require("./utils");

const eulerianCircuit = (graph) => {
    assertGraph(graph, "eulerianCircuit");

    if (graph.isDirected) {
        throw new Error("eulerianCircuit currently supports undirected graphs only.");
    }

    const hasOddDegree = graph.vertices().some(
        (vertex) => normalizeNeighbors(graph.neighbors(vertex)).length % 2 === 1
    );

    if (hasOddDegree) {
        return [];
    }

    const circuit = eulerianPath(graph);

    if (circuit.length > 1 && circuit[0] !== circuit[circuit.length - 1]) {
        return [];
    }

    return circuit;
};

module.exports = eulerianCircuit;
