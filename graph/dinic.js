const normalizeDinicInput = (verticesOrOptions, edges, source, sink) => {
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

const dinicMaxFlow = (verticesOrOptions, edges, source, sink) => {
    const input = normalizeDinicInput(verticesOrOptions, edges, source, sink);
    const vertices = input.vertices || [];
    const edgeList = input.edges || [];

    if (!Array.isArray(vertices) || !Array.isArray(edgeList)) {
        throw new TypeError("dinicMaxFlow expects vertices and edges arrays.");
    }

    const vertexIndexes = new Map(vertices.map((vertex, index) => [vertex, index]));

    if (!vertexIndexes.has(input.source) || !vertexIndexes.has(input.sink)) {
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
        addEdge(vertexIndexes.get(from), vertexIndexes.get(to), capacity);
    });

    const sourceIndex = vertexIndexes.get(input.source);
    const sinkIndex = vertexIndexes.get(input.sink);
    let maxFlow = 0;

    while (true) {
        const level = new Array(vertices.length).fill(-1);
        level[sourceIndex] = 0;
        const queue = [sourceIndex];

        for (let index = 0; index < queue.length; index += 1) {
            const vertex = queue[index];

            adjacency[vertex].forEach((edge) => {
                if (edge.capacity > 0 && level[edge.to] < 0) {
                    level[edge.to] = level[vertex] + 1;
                    queue.push(edge.to);
                }
            });
        }

        if (level[sinkIndex] < 0) {
            break;
        }

        const pointers = new Array(vertices.length).fill(0);

        const sendFlow = (vertex, flow) => {
            if (vertex === sinkIndex) {
                return flow;
            }

            for (; pointers[vertex] < adjacency[vertex].length; pointers[vertex] += 1) {
                const edge = adjacency[vertex][pointers[vertex]];

                if (edge.capacity <= 0 || level[edge.to] !== level[vertex] + 1) {
                    continue;
                }

                const pushed = sendFlow(edge.to, Math.min(flow, edge.capacity));

                if (pushed > 0) {
                    edge.capacity -= pushed;
                    adjacency[edge.to][edge.rev].capacity += pushed;
                    return pushed;
                }
            }

            return 0;
        };

        while (true) {
            const pushed = sendFlow(sourceIndex, Infinity);

            if (pushed === 0) {
                break;
            }

            maxFlow += pushed;
        }
    }

    return {
        maxFlow,
    };
};

module.exports = dinicMaxFlow;
