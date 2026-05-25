const normalizeFlowInput = (verticesOrOptions, edges, source, sink) => {
    if (
        verticesOrOptions &&
        typeof verticesOrOptions === "object" &&
        !Array.isArray(verticesOrOptions) &&
        Object.prototype.hasOwnProperty.call(verticesOrOptions, "edges")
    ) {
        return verticesOrOptions;
    }

    return {
        vertices: verticesOrOptions,
        edges,
        source,
        sink,
    };
};

const edmondsKarp = (verticesOrOptions, edges, source, sink) => {
    const input = normalizeFlowInput(verticesOrOptions, edges, source, sink);
    const vertices = input.vertices || [];
    const edgeList = input.edges || [];

    if (!Array.isArray(vertices) || !Array.isArray(edgeList)) {
        throw new TypeError("edmondsKarp expects vertices and edges arrays.");
    }

    const indexes = new Map(vertices.map((vertex, index) => [vertex, index]));

    if (!indexes.has(input.source) || !indexes.has(input.sink)) {
        throw new Error("Source and sink must exist in the vertex list.");
    }

    const adjacency = vertices.map(() => []);
    const addEdge = (fromIndex, toIndex, capacity) => {
        const forward = { to: toIndex, rev: adjacency[toIndex].length, capacity };
        const backward = { to: fromIndex, rev: adjacency[fromIndex].length, capacity: 0 };

        adjacency[fromIndex].push(forward);
        adjacency[toIndex].push(backward);
    };

    edgeList.forEach(({ from, to, capacity }) => {
        addEdge(indexes.get(from), indexes.get(to), capacity);
    });

    const sourceIndex = indexes.get(input.source);
    const sinkIndex = indexes.get(input.sink);
    let maxFlow = 0;

    while (true) {
        const parent = new Array(vertices.length).fill(null);
        const parentEdge = new Array(vertices.length).fill(null);
        const queue = [sourceIndex];
        parent[sourceIndex] = sourceIndex;

        for (let index = 0; index < queue.length && parent[sinkIndex] === null; index += 1) {
            const vertex = queue[index];

            adjacency[vertex].forEach((edge, edgeIndex) => {
                if (edge.capacity > 0 && parent[edge.to] === null) {
                    parent[edge.to] = vertex;
                    parentEdge[edge.to] = edgeIndex;
                    queue.push(edge.to);
                }
            });
        }

        if (parent[sinkIndex] === null) {
            break;
        }

        let pathFlow = Infinity;
        let current = sinkIndex;

        while (current !== sourceIndex) {
            const previous = parent[current];
            const edge = adjacency[previous][parentEdge[current]];
            pathFlow = Math.min(pathFlow, edge.capacity);
            current = previous;
        }

        current = sinkIndex;

        while (current !== sourceIndex) {
            const previous = parent[current];
            const edge = adjacency[previous][parentEdge[current]];
            edge.capacity -= pathFlow;
            adjacency[current][edge.rev].capacity += pathFlow;
            current = previous;
        }

        maxFlow += pathFlow;
    }

    return {
        maxFlow,
    };
};

module.exports = edmondsKarp;
