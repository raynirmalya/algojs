const normalizeNeighbors = (neighbors) =>
    neighbors.map((neighbor) =>
        neighbor && typeof neighbor === "object" && Object.prototype.hasOwnProperty.call(neighbor, "vertex")
            ? neighbor.vertex
            : neighbor
    );

const assertGraph = (graph, graphName) => {
    if (!graph || typeof graph.neighbors !== "function" || typeof graph.vertices !== "function") {
        throw new TypeError(`${graphName} expects a graph-like object.`);
    }
};

module.exports = {
    normalizeNeighbors,
    assertGraph,
};
