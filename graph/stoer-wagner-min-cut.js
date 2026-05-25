const { normalizeWeightedNeighbors, assertGraph } = require("./utils");

const stoerWagnerMinCut = (graph) => {
    assertGraph(graph, "stoerWagnerMinCut");

    const vertices = graph.vertices();
    const size = vertices.length;

    if (size === 0) {
        return {
            cutWeight: 0,
            partition: [[], []],
        };
    }

    const indexByVertex = new Map(vertices.map((vertex, index) => [vertex, index]));
    const weights = Array.from({ length: size }, () => new Array(size).fill(0));
    const groups = vertices.map((vertex) => [vertex]);
    const active = Array.from({ length: size }, (_, index) => index);

    vertices.forEach((vertex) => {
        normalizeWeightedNeighbors(graph.neighbors(vertex)).forEach(({ vertex: neighbor, weight }) => {
            weights[indexByVertex.get(vertex)][indexByVertex.get(neighbor)] = weight;
        });
    });

    let bestCut = Infinity;
    let bestPartition = [vertices.slice(), []];

    while (active.length > 1) {
        const added = new Set();
        const connection = new Array(size).fill(0);
        let previous = -1;
        let selected = -1;

        for (let step = 0; step < active.length; step += 1) {
            selected = -1;

            active.forEach((index) => {
                if (!added.has(index) && (selected === -1 || connection[index] > connection[selected])) {
                    selected = index;
                }
            });

            if (step === active.length - 1) {
                if (connection[selected] < bestCut) {
                    bestCut = connection[selected];
                    bestPartition = [
                        groups[selected].slice(),
                        active
                            .filter((index) => index !== selected)
                            .flatMap((index) => groups[index]),
                    ];
                }

                if (previous !== -1) {
                    active.forEach((index) => {
                        if (index === selected || index === previous) {
                            return;
                        }

                        weights[previous][index] += weights[selected][index];
                        weights[index][previous] = weights[previous][index];
                    });

                    groups[previous] = groups[previous].concat(groups[selected]);
                    active.splice(active.indexOf(selected), 1);
                }

                break;
            }

            added.add(selected);
            previous = selected;

            active.forEach((index) => {
                if (!added.has(index)) {
                    connection[index] += weights[selected][index];
                }
            });
        }
    }

    return {
        cutWeight: bestCut === Infinity ? 0 : bestCut,
        partition: bestPartition,
    };
};

module.exports = stoerWagnerMinCut;
