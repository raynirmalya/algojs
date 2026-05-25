const { normalizeNeighbors, assertGraph } = require("./utils");

const treeCenters = (graph) => {
    assertGraph(graph, "treeCenters");

    const vertices = graph.vertices();

    if (vertices.length <= 2) {
        return vertices.slice();
    }

    const degrees = new Map();
    let leaves = [];

    vertices.forEach((vertex) => {
        const degree = normalizeNeighbors(graph.neighbors(vertex)).length;
        degrees.set(vertex, degree);

        if (degree <= 1) {
            leaves.push(vertex);
        }
    });

    let remaining = vertices.length;

    while (remaining > 2) {
        remaining -= leaves.length;
        const nextLeaves = [];

        leaves.forEach((leaf) => {
            degrees.set(leaf, 0);

            normalizeNeighbors(graph.neighbors(leaf)).forEach((neighbor) => {
                const nextDegree = degrees.get(neighbor) - 1;
                degrees.set(neighbor, nextDegree);

                if (nextDegree === 1) {
                    nextLeaves.push(neighbor);
                }
            });
        });

        leaves = nextLeaves;
    }

    return leaves.sort();
};

module.exports = treeCenters;
