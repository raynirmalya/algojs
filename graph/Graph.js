class Graph {
    constructor(isDirected) {
        this.isDirected = !!isDirected;
        this.adjacency = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacency.has(vertex)) {
            this.adjacency.set(vertex, new Set());
        }

        return this;
    }

    addEdge(from, to) {
        this.addVertex(from);
        this.addVertex(to);

        this.adjacency.get(from).add(to);

        if (!this.isDirected) {
            this.adjacency.get(to).add(from);
        }

        return this;
    }

    removeEdge(from, to) {
        if (this.adjacency.has(from)) {
            this.adjacency.get(from).delete(to);
        }

        if (!this.isDirected && this.adjacency.has(to)) {
            this.adjacency.get(to).delete(from);
        }

        return this;
    }

    hasVertex(vertex) {
        return this.adjacency.has(vertex);
    }

    hasEdge(from, to) {
        return this.adjacency.has(from) && this.adjacency.get(from).has(to);
    }

    neighbors(vertex) {
        return this.adjacency.has(vertex) ? Array.from(this.adjacency.get(vertex)) : [];
    }

    vertices() {
        return Array.from(this.adjacency.keys());
    }
}

module.exports = Graph;
