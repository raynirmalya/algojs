const defaultHash = (text, seed) => {
    let hash = seed;

    for (let index = 0; index < text.length; index += 1) {
        hash = (hash * 33 + text.charCodeAt(index)) >>> 0;
    }

    return hash;
};

class BloomFilter {
    constructor(size, seeds) {
        this.size = Number.isInteger(size) && size > 0 ? size : 128;
        this.seeds = Array.isArray(seeds) && seeds.length > 0 ? seeds : [17, 31, 43, 59];
        this.bits = new Array(this.size).fill(false);
    }

    indexes(value) {
        const text = String(value);
        return this.seeds.map((seed) => defaultHash(text, seed) % this.size);
    }

    add(value) {
        this.indexes(value).forEach((index) => {
            this.bits[index] = true;
        });

        return this;
    }

    has(value) {
        return this.indexes(value).every((index) => this.bits[index]);
    }
}

module.exports = BloomFilter;
