const { normalizeNeighbors, assertGraph } = require("./utils");

const binaryLiftingLCA = (graph, rootVertex) => {
    assertGraph(graph, "binaryLiftingLCA");

    const vertices = graph.vertices();

    if (vertices.length === 0) {
        return {
            query: () => null,
            depths: new Map(),
        };
    }

    const root = rootVertex === undefined ? vertices[0] : rootVertex;
    const indexByVertex = new Map(vertices.map((vertex, index) => [vertex, index]));
    const depth = new Array(vertices.length).fill(0);
    const parent = new Array(vertices.length).fill(-1);
    const visited = new Set();
    const stack = [{ vertex: root, parent: null }];

    while (stack.length > 0) {
        const current = stack.pop();

        if (visited.has(current.vertex)) {
            continue;
        }

        visited.add(current.vertex);

        normalizeNeighbors(graph.neighbors(current.vertex)).forEach((neighbor) => {
            if (neighbor === current.parent) {
                return;
            }

            const childIndex = indexByVertex.get(neighbor);
            const currentIndex = indexByVertex.get(current.vertex);
            parent[childIndex] = currentIndex;
            depth[childIndex] = depth[currentIndex] + 1;
            stack.push({ vertex: neighbor, parent: current.vertex });
        });
    }

    const levels = Math.ceil(Math.log2(vertices.length + 1));
    const up = Array.from({ length: levels }, () => new Array(vertices.length).fill(-1));
    up[0] = parent.slice();

    for (let level = 1; level < levels; level += 1) {
        for (let vertexIndex = 0; vertexIndex < vertices.length; vertexIndex += 1) {
            const mid = up[level - 1][vertexIndex];
            up[level][vertexIndex] = mid === -1 ? -1 : up[level - 1][mid];
        }
    }

    const lift = (vertexIndex, distance) => {
        let currentIndex = vertexIndex;
        let remaining = distance;
        let level = 0;

        while (remaining > 0 && currentIndex !== -1) {
            if (remaining & 1) {
                currentIndex = up[level][currentIndex];
            }

            remaining >>= 1;
            level += 1;
        }

        return currentIndex;
    };

    const query = (firstVertex, secondVertex) => {
        if (!indexByVertex.has(firstVertex) || !indexByVertex.has(secondVertex)) {
            return null;
        }

        let firstIndex = indexByVertex.get(firstVertex);
        let secondIndex = indexByVertex.get(secondVertex);

        if (depth[firstIndex] < depth[secondIndex]) {
            [firstIndex, secondIndex] = [secondIndex, firstIndex];
        }

        firstIndex = lift(firstIndex, depth[firstIndex] - depth[secondIndex]);

        if (firstIndex === secondIndex) {
            return vertices[firstIndex];
        }

        for (let level = levels - 1; level >= 0; level -= 1) {
            if (up[level][firstIndex] !== up[level][secondIndex]) {
                firstIndex = up[level][firstIndex];
                secondIndex = up[level][secondIndex];
            }
        }

        const ancestorIndex = up[0][firstIndex];
        return ancestorIndex === -1 ? null : vertices[ancestorIndex];
    };

    return {
        query,
        depths: new Map(vertices.map((vertex, index) => [vertex, depth[index]])),
    };
};

module.exports = binaryLiftingLCA;
