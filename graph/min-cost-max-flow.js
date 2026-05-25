const minCostMaxFlow = (vertices, edges, source, sink) => {
    const indexByVertex = new Map(vertices.map((vertex, index) => [vertex, index]));
    const size = vertices.length;
    const graph = Array.from({ length: size }, () => []);

    const addEdge = (fromIndex, toIndex, capacity, cost) => {
        graph[fromIndex].push({ to: toIndex, rev: graph[toIndex].length, capacity, cost });
        graph[toIndex].push({ to: fromIndex, rev: graph[fromIndex].length - 1, capacity: 0, cost: -cost });
    };

    edges.forEach(({ from, to, capacity, cost }) => {
        addEdge(indexByVertex.get(from), indexByVertex.get(to), capacity, cost);
    });

    const sourceIndex = indexByVertex.get(source);
    const sinkIndex = indexByVertex.get(sink);
    let flow = 0;
    let cost = 0;

    while (true) {
        const distance = new Array(size).fill(Infinity);
        const inQueue = new Array(size).fill(false);
        const previousVertex = new Array(size).fill(-1);
        const previousEdge = new Array(size).fill(-1);
        const queue = [sourceIndex];
        distance[sourceIndex] = 0;
        inQueue[sourceIndex] = true;

        for (let head = 0; head < queue.length; head += 1) {
            const current = queue[head];
            inQueue[current] = false;

            graph[current].forEach((edge, edgeIndex) => {
                if (edge.capacity <= 0) {
                    return;
                }

                const nextDistance = distance[current] + edge.cost;

                if (nextDistance < distance[edge.to]) {
                    distance[edge.to] = nextDistance;
                    previousVertex[edge.to] = current;
                    previousEdge[edge.to] = edgeIndex;

                    if (!inQueue[edge.to]) {
                        queue.push(edge.to);
                        inQueue[edge.to] = true;
                    }
                }
            });
        }

        if (distance[sinkIndex] === Infinity) {
            break;
        }

        let increment = Infinity;

        for (let vertex = sinkIndex; vertex !== sourceIndex; vertex = previousVertex[vertex]) {
            const edge = graph[previousVertex[vertex]][previousEdge[vertex]];
            increment = Math.min(increment, edge.capacity);
        }

        for (let vertex = sinkIndex; vertex !== sourceIndex; vertex = previousVertex[vertex]) {
            const edge = graph[previousVertex[vertex]][previousEdge[vertex]];
            edge.capacity -= increment;
            graph[edge.to][edge.rev].capacity += increment;
            cost += increment * edge.cost;
        }

        flow += increment;
    }

    return {
        maxFlow: flow,
        minCost: cost,
    };
};

module.exports = minCostMaxFlow;
