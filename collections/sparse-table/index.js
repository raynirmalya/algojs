const defaultCombine = (firstValue, secondValue) => Math.min(firstValue, secondValue);

class SparseTable {
    constructor(values, combine) {
        if (!Array.isArray(values)) {
            throw new TypeError("SparseTable expects an array of values.");
        }

        this.values = values.slice();
        this.combine = typeof combine === "function" ? combine : defaultCombine;
        this.length = this.values.length;
        this.logs = new Array(this.length + 1).fill(0);
        this.table = [];

        this.build();
    }

    build() {
        if (this.length === 0) {
            return;
        }

        for (let index = 2; index <= this.length; index += 1) {
            this.logs[index] = this.logs[Math.floor(index / 2)] + 1;
        }

        this.table[0] = this.values.slice();

        for (let level = 1; (1 << level) <= this.length; level += 1) {
            const intervalLength = 1 << level;
            const half = intervalLength >> 1;
            const row = [];

            for (let index = 0; index + intervalLength <= this.length; index += 1) {
                row[index] = this.combine(
                    this.table[level - 1][index],
                    this.table[level - 1][index + half]
                );
            }

            this.table[level] = row;
        }
    }

    query(left, right) {
        if (this.length === 0) {
            return null;
        }

        if (left < 0 || right < 0 || left > right || right >= this.length) {
            throw new RangeError("Invalid SparseTable query range.");
        }

        const power = this.logs[right - left + 1];
        const offset = 1 << power;

        return this.combine(this.table[power][left], this.table[power][right - offset + 1]);
    }
}

module.exports = SparseTable;
