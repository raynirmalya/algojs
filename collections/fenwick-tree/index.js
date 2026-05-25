class FenwickTree {
    constructor(sizeOrValues) {
        const isArrayInput = Array.isArray(sizeOrValues);
        this.length = isArrayInput ? sizeOrValues.length : sizeOrValues;

        if (!Number.isInteger(this.length) || this.length < 0) {
            throw new TypeError("FenwickTree expects a non-negative size or an array.");
        }

        this.tree = new Array(this.length + 1).fill(0);
        this.values = new Array(this.length).fill(0);

        if (isArrayInput) {
            sizeOrValues.forEach((value, index) => this.update(index, value));
        }
    }

    update(index, delta) {
        this.assertIndex(index);
        this.values[index] += delta;

        let treeIndex = index + 1;

        while (treeIndex <= this.length) {
            this.tree[treeIndex] += delta;
            treeIndex += treeIndex & -treeIndex;
        }

        return this.query(index);
    }

    set(index, value) {
        this.assertIndex(index);
        const delta = value - this.values[index];
        return this.update(index, delta);
    }

    query(index) {
        this.assertIndex(index);

        let sum = 0;
        let treeIndex = index + 1;

        while (treeIndex > 0) {
            sum += this.tree[treeIndex];
            treeIndex -= treeIndex & -treeIndex;
        }

        return sum;
    }

    rangeQuery(left, right) {
        if (left < 0 || right < 0 || left > right || right >= this.length) {
            throw new RangeError("Invalid FenwickTree query range.");
        }

        const rightSum = this.query(right);
        const leftSum = left === 0 ? 0 : this.query(left - 1);
        return rightSum - leftSum;
    }

    assertIndex(index) {
        if (!Number.isInteger(index) || index < 0 || index >= this.length) {
            throw new RangeError("FenwickTree index is out of bounds.");
        }
    }
}

module.exports = FenwickTree;
