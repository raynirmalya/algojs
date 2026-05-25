const Graph = require("./Graph");

const blossomAlgorithm = (graph) => {
    if (!(graph instanceof Graph)) {
        throw new TypeError("blossomAlgorithm expects a Graph instance.");
    }

    const vertices = graph.vertices();
    const indexByVertex = new Map(vertices.map((vertex, index) => [vertex, index]));
    const adjacency = vertices.map(() => []);

    vertices.forEach((vertex) => {
        graph.neighbors(vertex).forEach((neighbor) => {
            adjacency[indexByVertex.get(vertex)].push(indexByVertex.get(neighbor));
        });
    });

    const size = vertices.length;
    const match = new Array(size).fill(-1);
    const parent = new Array(size).fill(-1);
    const base = new Array(size).fill(0);
    const used = new Array(size).fill(false);
    const blossom = new Array(size).fill(false);

    const lowestCommonAncestor = (first, second) => {
        const visited = new Array(size).fill(false);
        let left = first;
        let right = second;

        while (true) {
            left = base[left];
            visited[left] = true;

            if (match[left] === -1) {
                break;
            }

            left = parent[match[left]];
        }

        while (true) {
            right = base[right];

            if (visited[right]) {
                return right;
            }

            if (match[right] === -1) {
                break;
            }

            right = parent[match[right]];
        }

        return -1;
    };

    const markPath = (vertex, rootBase, child) => {
        let current = vertex;
        let nextChild = child;

        while (base[current] !== rootBase) {
            blossom[base[current]] = true;
            blossom[base[match[current]]] = true;
            parent[current] = nextChild;
            nextChild = match[current];
            current = parent[match[current]];
        }
    };

    const findAugmentingPath = (root) => {
        used.fill(false);
        parent.fill(-1);

        for (let index = 0; index < size; index += 1) {
            base[index] = index;
        }

        const queue = [root];
        used[root] = true;

        for (let head = 0; head < queue.length; head += 1) {
            const vertex = queue[head];

            for (const neighbor of adjacency[vertex]) {
                if (base[vertex] === base[neighbor] || match[vertex] === neighbor) {
                    continue;
                }

                if (neighbor === root || (match[neighbor] !== -1 && parent[match[neighbor]] !== -1)) {
                    const currentBase = lowestCommonAncestor(vertex, neighbor);
                    blossom.fill(false);
                    markPath(vertex, currentBase, neighbor);
                    markPath(neighbor, currentBase, vertex);

                    for (let index = 0; index < size; index += 1) {
                        if (!blossom[base[index]]) {
                            continue;
                        }

                        base[index] = currentBase;

                        if (!used[index]) {
                            used[index] = true;
                            queue.push(index);
                        }
                    }
                } else if (parent[neighbor] === -1) {
                    parent[neighbor] = vertex;

                    if (match[neighbor] === -1) {
                        return neighbor;
                    }

                    const nextVertex = match[neighbor];

                    if (!used[nextVertex]) {
                        used[nextVertex] = true;
                        queue.push(nextVertex);
                    }
                }
            }
        }

        return -1;
    };

    for (let vertex = 0; vertex < size; vertex += 1) {
        if (match[vertex] !== -1) {
            continue;
        }

        const finish = findAugmentingPath(vertex);

        if (finish === -1) {
            continue;
        }

        let current = finish;

        while (current !== -1) {
            const previous = parent[current];
            const next = previous === -1 ? -1 : match[previous];
            match[current] = previous;
            if (previous !== -1) {
                match[previous] = current;
            }
            current = next;
        }
    }

    const pairs = [];

    for (let index = 0; index < size; index += 1) {
        if (match[index] !== -1 && index < match[index]) {
            pairs.push([vertices[index], vertices[match[index]]]);
        }
    }

    return {
        size: pairs.length,
        matching: pairs,
    };
};

module.exports = blossomAlgorithm;
