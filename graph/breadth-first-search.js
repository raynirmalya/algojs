const normalizeNeighbors = (neighbors) =>
    neighbors.map((neighbor) =>
        neighbor && typeof neighbor === "object" && Object.prototype.hasOwnProperty.call(neighbor, "vertex")
            ? neighbor.vertex
            : neighbor
    );

const breadthFirstSearch = (graph, startVertex) => {
    if (!graph || typeof graph.neighbors !== "function") {
        throw new TypeError("breadthFirstSearch expects a graph-like object.");
    }

    if (!graph.hasVertex(startVertex)) {
        return {
            order: [],
            parents: new Map(),
            distances: new Map(),
        };
    }

    const order = [];
    const parents = new Map([[startVertex, null]]);
    const distances = new Map([[startVertex, 0]]);
    const queue = [startVertex];

    for (let index = 0; index < queue.length; index += 1) {
        const vertex = queue[index];
        order.push(vertex);

        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            if (distances.has(neighbor)) {
                return;
            }

            parents.set(neighbor, vertex);
            distances.set(neighbor, distances.get(vertex) + 1);
            queue.push(neighbor);
        });
    }

    return {
        order,
        parents,
        distances,
    };
};

module.exports = breadthFirstSearch;
