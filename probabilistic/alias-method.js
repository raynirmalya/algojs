class AliasMethod {
    constructor(weights) {
        if (!Array.isArray(weights) || weights.length === 0) {
            throw new TypeError("AliasMethod expects a non-empty array of weights.");
        }

        const total = weights.reduce((sum, value) => sum + value, 0);
        const normalized = weights.map((value) => (value * weights.length) / total);
        const small = [];
        const large = [];

        this.probability = new Array(weights.length).fill(0);
        this.alias = new Array(weights.length).fill(0);

        normalized.forEach((value, index) => {
            if (value < 1) {
                small.push(index);
            } else {
                large.push(index);
            }
        });

        while (small.length > 0 && large.length > 0) {
            const less = small.pop();
            const more = large.pop();
            this.probability[less] = normalized[less];
            this.alias[less] = more;
            normalized[more] = (normalized[more] + normalized[less]) - 1;

            if (normalized[more] < 1) {
                small.push(more);
            } else {
                large.push(more);
            }
        }

        small.concat(large).forEach((index) => {
            this.probability[index] = 1;
        });
    }

    sample(random) {
        const rng = typeof random === "function" ? random : Math.random;
        const column = Math.floor(rng() * this.probability.length);
        return rng() < this.probability[column] ? column : this.alias[column];
    }
}

module.exports = AliasMethod;
