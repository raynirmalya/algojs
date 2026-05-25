const defaultCombine = (firstValue, secondValue) => firstValue + secondValue;

class PersistentSegmentNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left || null;
        this.right = right || null;
    }
}

class PersistentSegmentTree {
    constructor(values, combine, identity) {
        if (!Array.isArray(values)) {
            throw new TypeError("PersistentSegmentTree expects an array of values.");
        }

        this.values = values.slice();
        this.combine = typeof combine === "function" ? combine : defaultCombine;
        this.identity = identity === undefined ? 0 : identity;
        this.length = values.length;
        this.roots = [this.length === 0 ? null : this.build(0, this.length - 1)];
    }

    versionCount() {
        return this.roots.length;
    }

    latestVersion() {
        return this.roots.length - 1;
    }

    update(version, index, value) {
        this.assertVersion(version);
        this.assertIndex(index);

        const root = this.updateNode(this.roots[version], 0, this.length - 1, index, value);
        this.roots.push(root);
        return this.latestVersion();
    }

    query(version, left, right) {
        if (this.length === 0) {
            return this.identity;
        }

        this.assertVersion(version);

        if (left < 0 || right < 0 || left > right || right >= this.length) {
            throw new RangeError("Invalid PersistentSegmentTree query range.");
        }

        return this.queryNode(this.roots[version], 0, this.length - 1, left, right);
    }

    build(left, right) {
        if (left === right) {
            return new PersistentSegmentNode(this.values[left]);
        }

        const middle = Math.floor((left + right) / 2);
        const leftNode = this.build(left, middle);
        const rightNode = this.build(middle + 1, right);
        return new PersistentSegmentNode(this.combine(leftNode.value, rightNode.value), leftNode, rightNode);
    }

    updateNode(node, left, right, targetIndex, value) {
        if (left === right) {
            return new PersistentSegmentNode(value);
        }

        const middle = Math.floor((left + right) / 2);
        let leftNode = node.left;
        let rightNode = node.right;

        if (targetIndex <= middle) {
            leftNode = this.updateNode(node.left, left, middle, targetIndex, value);
        } else {
            rightNode = this.updateNode(node.right, middle + 1, right, targetIndex, value);
        }

        return new PersistentSegmentNode(this.combine(leftNode.value, rightNode.value), leftNode, rightNode);
    }

    queryNode(node, left, right, queryLeft, queryRight) {
        if (!node || right < queryLeft || left > queryRight) {
            return this.identity;
        }

        if (queryLeft <= left && right <= queryRight) {
            return node.value;
        }

        const middle = Math.floor((left + right) / 2);
        const leftValue = this.queryNode(node.left, left, middle, queryLeft, queryRight);
        const rightValue = this.queryNode(node.right, middle + 1, right, queryLeft, queryRight);
        return this.combine(leftValue, rightValue);
    }

    assertIndex(index) {
        if (index < 0 || index >= this.length) {
            throw new RangeError("PersistentSegmentTree index is out of bounds.");
        }
    }

    assertVersion(version) {
        if (version < 0 || version >= this.roots.length) {
            throw new RangeError("PersistentSegmentTree version is out of bounds.");
        }
    }
}

module.exports = PersistentSegmentTree;
