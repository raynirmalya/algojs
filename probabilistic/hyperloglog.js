const hashValue = (text) => {
    let hash = 2166136261;

    for (let index = 0; index < text.length; index += 1) {
        hash ^= text.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }

    return hash >>> 0;
};

class HyperLogLog {
    constructor(precision) {
        this.precision = Number.isInteger(precision) && precision >= 4 && precision <= 16 ? precision : 6;
        this.bucketCount = 1 << this.precision;
        this.registers = new Array(this.bucketCount).fill(0);
    }

    add(value) {
        const hash = hashValue(String(value));
        const bucket = hash >>> (32 - this.precision);
        const remaining = (hash << this.precision) >>> 0;
        const rank = Math.clz32(remaining) + 1;
        this.registers[bucket] = Math.max(this.registers[bucket], rank);
        return this;
    }

    estimate() {
        const alpha = this.bucketCount === 16 ? 0.673
            : this.bucketCount === 32 ? 0.697
                : this.bucketCount === 64 ? 0.709
                    : 0.7213 / (1 + (1.079 / this.bucketCount));
        const sum = this.registers.reduce((accumulator, value) => accumulator + (2 ** -value), 0);
        return alpha * this.bucketCount * this.bucketCount / sum;
    }
}

module.exports = HyperLogLog;
