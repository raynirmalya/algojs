const { assertGraph, normalizeNeighbors } = require("./utils");

const dsaturColoring = (graph) => {
    assertGraph(graph, "dsaturColoring");

    const vertices = graph.vertices();
    const colors = new Map();
    const saturationSets = new Map(vertices.map((vertex) => [vertex, new Set()]));

    while (colors.size < vertices.length) {
        const uncolored = vertices.filter((vertex) => !colors.has(vertex));
        let selected = uncolored[0];

        uncolored.forEach((vertex) => {
            const selectedSaturation = saturationSets.get(selected).size;
            const currentSaturation = saturationSets.get(vertex).size;
            const selectedDegree = normalizeNeighbors(graph.neighbors(selected)).length;
            const currentDegree = normalizeNeighbors(graph.neighbors(vertex)).length;

            if (
                currentSaturation > selectedSaturation ||
                (currentSaturation === selectedSaturation && currentDegree > selectedDegree)
            ) {
                selected = vertex;
            }
        });

        const neighborColors = new Set(
            normalizeNeighbors(graph.neighbors(selected))
                .filter((neighbor) => colors.has(neighbor))
                .map((neighbor) => colors.get(neighbor))
        );

        let color = 0;
        while (neighborColors.has(color)) {
            color += 1;
        }

        colors.set(selected, color);

        normalizeNeighbors(graph.neighbors(selected)).forEach((neighbor) => {
            if (!colors.has(neighbor)) {
                saturationSets.get(neighbor).add(color);
            }
        });
    }

    const colorCount = Math.max(...colors.values(), 0) + (colors.size > 0 ? 1 : 0);

    return {
        colors,
        colorCount,
    };
};

module.exports = dsaturColoring;
