class WeightedGraph {
    constructor(isDirected) {
        this.isDirected = !!isDirected;
        this.adjacency = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacency.has(vertex)) {
            this.adjacency.set(vertex, new Map());
        }

        return this;
    }

    addEdge(from, to, weight) {
        const edgeWeight = weight === undefined ? 1 : weight;

        this.addVertex(from);
        this.addVertex(to);

        this.adjacency.get(from).set(to, edgeWeight);

        if (!this.isDirected) {
            this.adjacency.get(to).set(from, edgeWeight);
        }

        return this;
    }

    hasVertex(vertex) {
        return this.adjacency.has(vertex);
    }

    neighbors(vertex) {
        if (!this.adjacency.has(vertex)) {
            return [];
        }

        return Array.from(this.adjacency.get(vertex).entries()).map(([neighbor, weight]) => ({
            vertex: neighbor,
            weight,
        }));
    }

    getWeight(from, to) {
        return this.adjacency.has(from) ? this.adjacency.get(from).get(to) : undefined;
    }

    vertices() {
        return Array.from(this.adjacency.keys());
    }

    getEdges() {
        const vertices = this.vertices();
        const vertexIndexes = new Map(vertices.map((vertex, index) => [vertex, index]));
        const edges = [];

        this.adjacency.forEach((neighbors, from) => {
            neighbors.forEach((weight, to) => {
                if (this.isDirected || vertexIndexes.get(from) <= vertexIndexes.get(to)) {
                    edges.push({ from, to, weight });
                }
            });
        });

        return edges;
    }
}

module.exports = WeightedGraph;
