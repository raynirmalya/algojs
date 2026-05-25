const pushRelabel = (vertices, edges, source, sink) => {
    const indexByVertex = new Map(vertices.map((vertex, index) => [vertex, index]));
    const size = vertices.length;
    const capacity = Array.from({ length: size }, () => new Array(size).fill(0));
    const flow = Array.from({ length: size }, () => new Array(size).fill(0));
    const height = new Array(size).fill(0);
    const excess = new Array(size).fill(0);

    edges.forEach(({ from, to, capacity: edgeCapacity }) => {
        const fromIndex = indexByVertex.get(from);
        const toIndex = indexByVertex.get(to);
        capacity[fromIndex][toIndex] += edgeCapacity;
    });

    const sourceIndex = indexByVertex.get(source);
    const sinkIndex = indexByVertex.get(sink);
    height[sourceIndex] = size;

    for (let vertex = 0; vertex < size; vertex += 1) {
        if (capacity[sourceIndex][vertex] > 0) {
            flow[sourceIndex][vertex] = capacity[sourceIndex][vertex];
            flow[vertex][sourceIndex] = -flow[sourceIndex][vertex];
            excess[vertex] += capacity[sourceIndex][vertex];
            excess[sourceIndex] -= capacity[sourceIndex][vertex];
        }
    }

    const residual = (fromIndex, toIndex) => capacity[fromIndex][toIndex] - flow[fromIndex][toIndex];

    const push = (fromIndex, toIndex) => {
        const amount = Math.min(excess[fromIndex], residual(fromIndex, toIndex));
        flow[fromIndex][toIndex] += amount;
        flow[toIndex][fromIndex] -= amount;
        excess[fromIndex] -= amount;
        excess[toIndex] += amount;
    };

    const relabel = (vertex) => {
        let nextHeight = Infinity;

        for (let neighbor = 0; neighbor < size; neighbor += 1) {
            if (residual(vertex, neighbor) > 0) {
                nextHeight = Math.min(nextHeight, height[neighbor]);
            }
        }

        if (nextHeight < Infinity) {
            height[vertex] = nextHeight + 1;
        }
    };

    const activeVertices = () =>
        vertices
            .map((vertex, index) => index)
            .filter((index) => index !== sourceIndex && index !== sinkIndex && excess[index] > 0);

    let queue = activeVertices();

    while (queue.length > 0) {
        const vertex = queue.shift();
        let pushed = false;

        for (let neighbor = 0; neighbor < size && excess[vertex] > 0; neighbor += 1) {
            if (residual(vertex, neighbor) > 0 && height[vertex] === height[neighbor] + 1) {
                push(vertex, neighbor);
                pushed = true;
            }
        }

        if (!pushed && excess[vertex] > 0) {
            relabel(vertex);
        }

        queue = activeVertices();
    }

    return {
        maxFlow: excess[sinkIndex],
        flow,
    };
};

module.exports = pushRelabel;
