const { normalizeNeighbors, assertGraph } = require("./utils");

const degeneracyOrdering = (graph) => {
    assertGraph(graph, "degeneracyOrdering");

    const remaining = new Set(graph.vertices());
    const degrees = new Map(
        graph.vertices().map((vertex) => [vertex, normalizeNeighbors(graph.neighbors(vertex)).length])
    );
    const ordering = [];
    let degeneracy = 0;

    while (remaining.size > 0) {
        let choice = null;

        remaining.forEach((vertex) => {
            if (choice === null || degrees.get(vertex) < degrees.get(choice)) {
                choice = vertex;
            }
        });

        degeneracy = Math.max(degeneracy, degrees.get(choice));
        ordering.push(choice);
        remaining.delete(choice);

        normalizeNeighbors(graph.neighbors(choice)).forEach((neighbor) => {
            if (remaining.has(neighbor)) {
                degrees.set(neighbor, degrees.get(neighbor) - 1);
            }
        });
    }

    return {
        ordering,
        degeneracy,
    };
};

module.exports = degeneracyOrdering;
