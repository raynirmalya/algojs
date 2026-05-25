const { normalizeWeightedNeighbors, assertGraph } = require("./utils");

const farthestFrom = (graph, startVertex) => {
    const visited = new Set();
    const stack = [{ vertex: startVertex, parent: null, distance: 0 }];
    let farthest = { vertex: startVertex, distance: 0, parents: new Map([[startVertex, null]]) };

    while (stack.length > 0) {
        const current = stack.pop();

        if (visited.has(current.vertex)) {
            continue;
        }

        visited.add(current.vertex);

        if (current.distance > farthest.distance) {
            farthest = {
                vertex: current.vertex,
                distance: current.distance,
                parents: farthest.parents,
            };
        }

        normalizeWeightedNeighbors(graph.neighbors(current.vertex)).forEach(({ vertex, weight }) => {
            if (vertex === current.parent) {
                return;
            }

            farthest.parents.set(vertex, current.vertex);
            stack.push({
                vertex,
                parent: current.vertex,
                distance: current.distance + weight,
            });
        });
    }

    return farthest;
};

const reconstructPath = (parents, endVertex) => {
    const path = [];
    let current = endVertex;

    while (current !== null && current !== undefined) {
        path.push(current);
        current = parents.get(current);
    }

    return path.reverse();
};

const treeDiameter = (graph) => {
    assertGraph(graph, "treeDiameter");

    const vertices = graph.vertices();

    if (vertices.length === 0) {
        return {
            length: 0,
            path: [],
        };
    }

    const first = farthestFrom(graph, vertices[0]);
    const second = farthestFrom(graph, first.vertex);

    return {
        length: second.distance,
        path: reconstructPath(second.parents, second.vertex).reverse(),
    };
};

module.exports = treeDiameter;
