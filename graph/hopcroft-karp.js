const getNeighbors = (adjacency, vertex) => {
    if (adjacency instanceof Map) {
        return adjacency.get(vertex) || [];
    }

    return adjacency[vertex] || [];
};

const hopcroftKarp = (leftVertices, rightVertices, adjacency) => {
    if (!Array.isArray(leftVertices) || !Array.isArray(rightVertices)) {
        throw new TypeError("hopcroftKarp expects left and right vertex arrays.");
    }

    const nil = null;
    const pairU = new Map(leftVertices.map((vertex) => [vertex, nil]));
    const pairV = new Map(rightVertices.map((vertex) => [vertex, nil]));
    const distance = new Map();

    const bfs = () => {
        const queue = [];

        leftVertices.forEach((vertex) => {
            if (pairU.get(vertex) === nil) {
                distance.set(vertex, 0);
                queue.push(vertex);
            } else {
                distance.set(vertex, Infinity);
            }
        });

        let found = false;

        for (let index = 0; index < queue.length; index += 1) {
            const vertex = queue[index];

            getNeighbors(adjacency, vertex).forEach((neighbor) => {
                const matchedVertex = pairV.get(neighbor);

                if (matchedVertex === nil) {
                    found = true;
                } else if (distance.get(matchedVertex) === Infinity) {
                    distance.set(matchedVertex, distance.get(vertex) + 1);
                    queue.push(matchedVertex);
                }
            });
        }

        return found;
    };

    const dfs = (vertex) => {
        for (const neighbor of getNeighbors(adjacency, vertex)) {
            const matchedVertex = pairV.get(neighbor);

            if (
                matchedVertex === nil ||
                (distance.get(matchedVertex) === distance.get(vertex) + 1 && dfs(matchedVertex))
            ) {
                pairU.set(vertex, neighbor);
                pairV.set(neighbor, vertex);
                return true;
            }
        }

        distance.set(vertex, Infinity);
        return false;
    };

    let matchingSize = 0;

    while (bfs()) {
        leftVertices.forEach((vertex) => {
            if (pairU.get(vertex) === nil && dfs(vertex)) {
                matchingSize += 1;
            }
        });
    }

    return {
        size: matchingSize,
        pairU,
        pairV,
    };
};

module.exports = hopcroftKarp;
