class IntervalNode {
    constructor(start, end, value) {
        this.start = start;
        this.end = end;
        this.value = value;
        this.max = end;
        this.left = null;
        this.right = null;
    }
}

class IntervalTree {
    constructor() {
        this.root = null;
        this.nodeCount = 0;
    }

    size() {
        return this.nodeCount;
    }

    insert(start, end, value) {
        if (start > end) {
            throw new RangeError("Interval start must be less than or equal to the end.");
        }

        this.root = this.insertNode(this.root, start, end, value);
        this.nodeCount += 1;
        return true;
    }

    searchOverlap(start, end) {
        let currentNode = this.root;

        while (currentNode) {
            if (this.overlaps(currentNode, start, end)) {
                return this.toInterval(currentNode);
            }

            if (currentNode.left && currentNode.left.max >= start) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return null;
    }

    searchAllOverlaps(start, end) {
        const matches = [];
        this.collectOverlaps(this.root, start, end, matches);
        return matches;
    }

    insertNode(node, start, end, value) {
        if (!node) {
            return new IntervalNode(start, end, value);
        }

        if (start < node.start || (start === node.start && end < node.end)) {
            node.left = this.insertNode(node.left, start, end, value);
        } else {
            node.right = this.insertNode(node.right, start, end, value);
        }

        node.max = Math.max(
            node.end,
            node.left ? node.left.max : Number.NEGATIVE_INFINITY,
            node.right ? node.right.max : Number.NEGATIVE_INFINITY
        );

        return node;
    }

    overlaps(node, start, end) {
        return start <= node.end && node.start <= end;
    }

    collectOverlaps(node, start, end, matches) {
        if (!node) {
            return;
        }

        if (this.overlaps(node, start, end)) {
            matches.push(this.toInterval(node));
        }

        if (node.left && node.left.max >= start) {
            this.collectOverlaps(node.left, start, end, matches);
        }

        if (node.right && node.start <= end) {
            this.collectOverlaps(node.right, start, end, matches);
        }
    }

    toInterval(node) {
        return {
            start: node.start,
            end: node.end,
            value: node.value,
        };
    }
}

module.exports = IntervalTree;
