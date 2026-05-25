const { assertGraph } = require("./utils");

const normalizeResult = (result, root, vertices) => {
    const totalWeight = result.edges.reduce((sum, edge) => sum + edge.weight, 0);

    return {
        root,
        edges: result.edges.filter((edge) => vertices.has(edge.to)),
        totalWeight,
    };
};

const findDirectedMST = (vertices, edges, root) => {
    const incoming = new Map();

    vertices.forEach((vertex) => {
        if (vertex !== root) {
            incoming.set(vertex, null);
        }
    });

    edges.forEach((edge) => {
        if (!vertices.has(edge.from) || !vertices.has(edge.to) || edge.to === root || edge.from === edge.to) {
            return;
        }

        const current = incoming.get(edge.to);
        if (!current || edge.weight < current.weight) {
            incoming.set(edge.to, edge);
        }
    });

    for (const [vertex, edge] of incoming.entries()) {
        if (!edge) {
            throw new Error(`No arborescence exists because vertex ${vertex} is unreachable from the root.`);
        }
    }

    const assignedCycle = new Map();
    const cycles = [];

    vertices.forEach((start) => {
        if (start === root || assignedCycle.has(start)) {
            return;
        }

        const visited = new Map();
        let current = start;

        while (current !== root && !visited.has(current) && !assignedCycle.has(current)) {
            visited.set(current, visited.size);
            current = incoming.get(current).from;
        }

        if (current !== root && !assignedCycle.has(current) && visited.has(current)) {
            const cycle = [];
            let walker = current;

            do {
                cycle.push(walker);
                assignedCycle.set(walker, cycles.length);
                walker = incoming.get(walker).from;
            } while (walker !== current);

            cycles.push(cycle);
        }
    });

    if (cycles.length === 0) {
        return {
            edges: Array.from(incoming.values()),
        };
    }

    const componentId = new Map();
    let nextId = 0;

    vertices.forEach((vertex) => {
        if (!assignedCycle.has(vertex)) {
            componentId.set(vertex, `v:${nextId}`);
            nextId += 1;
        }
    });

    cycles.forEach((cycle, index) => {
        cycle.forEach((vertex) => {
            componentId.set(vertex, `c:${index}`);
        });
    });

    const contractedVertices = new Set(componentId.values());
    const contractedRoot = componentId.get(root);
    const bestIncomingToCycle = new Map();
    const bestOutgoingFromCycle = new Map();
    const contractedEdges = [];

    edges.forEach((edge) => {
        if (!vertices.has(edge.from) || !vertices.has(edge.to)) {
            return;
        }

        const fromComponent = componentId.get(edge.from);
        const toComponent = componentId.get(edge.to);

        if (fromComponent === toComponent) {
            return;
        }

        let adjustedWeight = edge.weight;

        if (String(toComponent).startsWith("c:")) {
            adjustedWeight -= incoming.get(edge.to).weight;
            const current = bestIncomingToCycle.get(`${fromComponent}->${toComponent}`);
            if (!current || adjustedWeight < current.weight) {
                bestIncomingToCycle.set(`${fromComponent}->${toComponent}`, {
                    edge,
                    weight: adjustedWeight,
                });
            }
        }

        if (String(fromComponent).startsWith("c:")) {
            const current = bestOutgoingFromCycle.get(`${fromComponent}->${toComponent}`);
            if (!current || edge.weight < current.weight) {
                bestOutgoingFromCycle.set(`${fromComponent}->${toComponent}`, {
                    edge,
                    weight: edge.weight,
                });
            }
        }

        contractedEdges.push({
            from: fromComponent,
            to: toComponent,
            weight: adjustedWeight,
            original: edge,
        });
    });

    const contractedResult = findDirectedMST(contractedVertices, contractedEdges, contractedRoot);
    const resultEdges = [];
    const cycleEntry = new Map();

    contractedResult.edges.forEach((edge) => {
        const fromComponent = edge.from;
        const toComponent = edge.to;

        if (String(toComponent).startsWith("c:")) {
            const best = bestIncomingToCycle.get(`${fromComponent}->${toComponent}`).edge;
            resultEdges.push(best);
            cycleEntry.set(toComponent, best.to);
        } else if (String(fromComponent).startsWith("c:")) {
            resultEdges.push(bestOutgoingFromCycle.get(`${fromComponent}->${toComponent}`).edge);
        } else {
            resultEdges.push(edge.original || edge);
        }
    });

    cycles.forEach((cycle, index) => {
        const component = `c:${index}`;
        const entryVertex = cycleEntry.get(component);

        cycle.forEach((vertex) => {
            if (vertex !== entryVertex) {
                resultEdges.push(incoming.get(vertex));
            }
        });
    });

    return {
        edges: resultEdges,
    };
};

const chuLiuEdmonds = (graph, root) => {
    assertGraph(graph, "chuLiuEdmonds");

    const vertices = new Set(graph.vertices());
    const edges = [];

    graph.vertices().forEach((from) => {
        graph.neighbors(from).forEach(({ vertex: to, weight }) => {
            edges.push({
                from,
                to,
                weight: weight === undefined ? 1 : weight,
            });
        });
    });

    if (!vertices.has(root)) {
        throw new Error("Root vertex must belong to the graph.");
    }

    return normalizeResult(findDirectedMST(vertices, edges, root), root, vertices);
};

module.exports = chuLiuEdmonds;
