const normalizeNeighbors = (neighbors) =>
    neighbors.map((neighbor) =>
        neighbor && typeof neighbor === "object" && Object.prototype.hasOwnProperty.call(neighbor, "vertex")
            ? neighbor.vertex
            : neighbor
    );

const depthFirstSearch = (graph, startVertex) => {
    if (!graph || typeof graph.neighbors !== "function") {
        throw new TypeError("depthFirstSearch expects a graph-like object.");
    }

    if (!graph.hasVertex(startVertex)) {
        return {
            order: [],
            parents: new Map(),
        };
    }

    const order = [];
    const parents = new Map([[startVertex, null]]);
    const visited = new Set();
    const stack = [startVertex];

    while (stack.length > 0) {
        const vertex = stack.pop();

        if (visited.has(vertex)) {
            continue;
        }

        visited.add(vertex);
        order.push(vertex);

        const neighbors = normalizeNeighbors(graph.neighbors(vertex)).slice().reverse();

        neighbors.forEach((neighbor) => {
            if (!parents.has(neighbor)) {
                parents.set(neighbor, vertex);
            }

            if (!visited.has(neighbor)) {
                stack.push(neighbor);
            }
        });
    }

    return {
        order,
        parents,
    };
};

module.exports = depthFirstSearch;
