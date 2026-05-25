class PrefixSum {
    constructor(values) {
        if (!Array.isArray(values)) {
            throw new TypeError("PrefixSum expects an array of values.");
        }

        this.values = values.slice();
        this.prefix = [0];

        for (let index = 0; index < this.values.length; index += 1) {
            this.prefix[index + 1] = this.prefix[index] + this.values[index];
        }
    }

    query(left, right) {
        if (left < 0 || right < 0 || left > right || right >= this.values.length) {
            throw new RangeError("Invalid PrefixSum query range.");
        }

        return this.prefix[right + 1] - this.prefix[left];
    }

    prefixAt(index) {
        if (index < 0 || index >= this.values.length) {
            throw new RangeError("PrefixSum index is out of bounds.");
        }

        return this.prefix[index + 1];
    }
}

module.exports = PrefixSum;
