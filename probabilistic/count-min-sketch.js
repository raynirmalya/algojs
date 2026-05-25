const defaultHash = (text, seed) => {
    let hash = seed;

    for (let index = 0; index < text.length; index += 1) {
        hash = (hash * 131 + text.charCodeAt(index)) >>> 0;
    }

    return hash;
};

class CountMinSketch {
    constructor(width, depth) {
        this.width = Number.isInteger(width) && width > 0 ? width : 64;
        this.depth = Number.isInteger(depth) && depth > 0 ? depth : 4;
        this.table = Array.from({ length: this.depth }, () => new Array(this.width).fill(0));
    }

    indexes(value) {
        const text = String(value);
        return Array.from({ length: this.depth }, (_, row) => defaultHash(text, row + 1) % this.width);
    }

    update(value, count) {
        const amount = count === undefined ? 1 : count;
        this.indexes(value).forEach((column, row) => {
            this.table[row][column] += amount;
        });

        return this.estimate(value);
    }

    estimate(value) {
        return Math.min(...this.indexes(value).map((column, row) => this.table[row][column]));
    }
}

module.exports = CountMinSketch;
