const { assertGraph, normalizeNeighbors } = require("./utils");

const intersection = (values, filterSet) => values.filter((value) => filterSet.has(value));

const bronKerbosch = (graph) => {
    assertGraph(graph, "bronKerbosch");

    const cliques = [];

    const visit = (currentClique, candidates, excluded) => {
        if (candidates.length === 0 && excluded.length === 0) {
            cliques.push(currentClique.slice());
            return;
        }

        const candidateSnapshot = candidates.slice();

        candidateSnapshot.forEach((vertex) => {
            const neighborSet = new Set(normalizeNeighbors(graph.neighbors(vertex)));
            visit(
                currentClique.concat(vertex),
                intersection(candidates, neighborSet),
                intersection(excluded, neighborSet)
            );

            candidates.splice(candidates.indexOf(vertex), 1);
            excluded.push(vertex);
        });
    };

    visit([], graph.vertices(), []);

    return cliques;
};

module.exports = bronKerbosch;
