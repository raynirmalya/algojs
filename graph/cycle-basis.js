const { normalizeNeighbors, assertGraph } = require("./utils");

const buildCycle = (first, second, parent, depth) => {
    const pathFirst = [];
    const pathSecond = [];
    let left = first;
    let right = second;

    while (depth.get(left) > depth.get(right)) {
        pathFirst.push(left);
        left = parent.get(left);
    }

    while (depth.get(right) > depth.get(left)) {
        pathSecond.push(right);
        right = parent.get(right);
    }

    while (left !== right) {
        pathFirst.push(left);
        pathSecond.push(right);
        left = parent.get(left);
        right = parent.get(right);
    }

    return pathFirst.concat([left], pathSecond.reverse(), [first]);
};

const cycleBasis = (graph) => {
    assertGraph(graph, "cycleBasis");

    const parent = new Map();
    const depth = new Map();
    const visited = new Set();
    const seenBackEdges = new Set();
    const cycles = [];

    const dfs = (vertex, ancestor) => {
        visited.add(vertex);
        parent.set(vertex, ancestor);
        depth.set(vertex, ancestor === null ? 0 : depth.get(ancestor) + 1);

        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            if (neighbor === ancestor) {
                return;
            }

            if (!visited.has(neighbor)) {
                dfs(neighbor, vertex);
                return;
            }

            if (depth.get(neighbor) < depth.get(vertex)) {
                const key = [neighbor, vertex].sort().join("|");

                if (!seenBackEdges.has(key)) {
                    seenBackEdges.add(key);
                    cycles.push(buildCycle(vertex, neighbor, parent, depth));
                }
            }
        });
    };

    graph.vertices().forEach((vertex) => {
        if (!visited.has(vertex)) {
            dfs(vertex, null);
        }
    });

    return cycles;
};

module.exports = cycleBasis;
