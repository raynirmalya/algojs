const defaultCombine = (firstValue, secondValue) => firstValue + secondValue;

class SegmentTree {
    constructor(values, combine, identity) {
        if (!Array.isArray(values)) {
            throw new TypeError("SegmentTree expects an array of values.");
        }

        this.values = values.slice();
        this.combine = typeof combine === "function" ? combine : defaultCombine;
        this.identity = identity === undefined ? 0 : identity;
        this.length = this.values.length;
        this.tree = new Array(Math.max(1, this.length * 4)).fill(this.identity);

        if (this.length > 0) {
            this.build(1, 0, this.length - 1);
        }
    }

    build(nodeIndex, left, right) {
        if (left === right) {
            this.tree[nodeIndex] = this.values[left];
            return;
        }

        const middle = Math.floor((left + right) / 2);
        const leftNode = nodeIndex * 2;
        const rightNode = leftNode + 1;

        this.build(leftNode, left, middle);
        this.build(rightNode, middle + 1, right);

        this.tree[nodeIndex] = this.combine(this.tree[leftNode], this.tree[rightNode]);
    }

    update(index, value) {
        this.assertIndex(index);
        this.values[index] = value;

        if (this.length > 0) {
            this.updateNode(1, 0, this.length - 1, index, value);
        }

        return this.query(index, index);
    }

    updateNode(nodeIndex, left, right, targetIndex, value) {
        if (left === right) {
            this.tree[nodeIndex] = value;
            return;
        }

        const middle = Math.floor((left + right) / 2);
        const leftNode = nodeIndex * 2;
        const rightNode = leftNode + 1;

        if (targetIndex <= middle) {
            this.updateNode(leftNode, left, middle, targetIndex, value);
        } else {
            this.updateNode(rightNode, middle + 1, right, targetIndex, value);
        }

        this.tree[nodeIndex] = this.combine(this.tree[leftNode], this.tree[rightNode]);
    }

    query(left, right) {
        if (this.length === 0) {
            return this.identity;
        }

        if (left < 0 || right < 0 || left > right || right >= this.length) {
            throw new RangeError("Invalid SegmentTree query range.");
        }

        return this.queryNode(1, 0, this.length - 1, left, right);
    }

    queryNode(nodeIndex, left, right, queryLeft, queryRight) {
        if (queryLeft <= left && right <= queryRight) {
            return this.tree[nodeIndex];
        }

        if (right < queryLeft || left > queryRight) {
            return this.identity;
        }

        const middle = Math.floor((left + right) / 2);
        const leftValue = this.queryNode(nodeIndex * 2, left, middle, queryLeft, queryRight);
        const rightValue = this.queryNode((nodeIndex * 2) + 1, middle + 1, right, queryLeft, queryRight);

        return this.combine(leftValue, rightValue);
    }

    assertIndex(index) {
        if (index < 0 || index >= this.length) {
            throw new RangeError("SegmentTree index is out of bounds.");
        }
    }
}

module.exports = SegmentTree;
