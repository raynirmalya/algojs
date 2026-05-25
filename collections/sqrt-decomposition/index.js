class SqrtDecomposition {
    constructor(values) {
        if (!Array.isArray(values)) {
            throw new TypeError("SqrtDecomposition expects an array.");
        }

        this.values = values.slice();
        this.blockSize = Math.max(1, Math.ceil(Math.sqrt(this.values.length || 1)));
        this.blocks = new Array(Math.ceil(this.values.length / this.blockSize)).fill(0);

        this.values.forEach((value, index) => {
            this.blocks[Math.floor(index / this.blockSize)] += value;
        });
    }

    update(index, value) {
        this.assertIndex(index);
        const block = Math.floor(index / this.blockSize);
        this.blocks[block] += value - this.values[index];
        this.values[index] = value;
        return this.query(index, index);
    }

    query(left, right) {
        if (left < 0 || right < left || right >= this.values.length) {
            throw new RangeError("Invalid SqrtDecomposition query range.");
        }

        let sum = 0;
        let current = left;

        while (current <= right && current % this.blockSize !== 0) {
            sum += this.values[current];
            current += 1;
        }

        while (current + this.blockSize - 1 <= right) {
            sum += this.blocks[Math.floor(current / this.blockSize)];
            current += this.blockSize;
        }

        while (current <= right) {
            sum += this.values[current];
            current += 1;
        }

        return sum;
    }

    assertIndex(index) {
        if (!Number.isInteger(index) || index < 0 || index >= this.values.length) {
            throw new RangeError("SqrtDecomposition index is out of bounds.");
        }
    }
}

module.exports = SqrtDecomposition;
