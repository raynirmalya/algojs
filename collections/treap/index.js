const defaultCompare = (a, b) => a - b;

class TreapNode {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
        this.left = null;
        this.right = null;
    }
}

class Treap {
    constructor(compare, priorityGenerator) {
        this.compare = typeof compare === "function" ? compare : defaultCompare;
        this.priorityGenerator =
            typeof priorityGenerator === "function" ? priorityGenerator : () => Math.random();
        this.root = null;
        this.nodeCount = 0;
    }

    size() {
        return this.nodeCount;
    }

    insert(value, priority) {
        let inserted = false;
        this.root = this.insertNode(
            this.root,
            value,
            priority === undefined ? this.priorityGenerator() : priority,
            () => {
                inserted = true;
                this.nodeCount += 1;
            }
        );
        return inserted;
    }

    has(value) {
        let currentNode = this.root;

        while (currentNode) {
            const comparison = this.compare(value, currentNode.value);

            if (comparison === 0) {
                return true;
            }

            currentNode = comparison < 0 ? currentNode.left : currentNode.right;
        }

        return false;
    }

    remove(value) {
        let removed = false;
        this.root = this.removeNode(this.root, value, () => {
            removed = true;
            this.nodeCount -= 1;
        });
        return removed;
    }

    inOrder() {
        const result = [];
        this.traverseInOrder(this.root, result);
        return result;
    }

    insertNode(node, value, priority, onInsert) {
        if (!node) {
            onInsert();
            return new TreapNode(value, priority);
        }

        const comparison = this.compare(value, node.value);

        if (comparison < 0) {
            node.left = this.insertNode(node.left, value, priority, onInsert);

            if (node.left.priority > node.priority) {
                node = this.rotateRight(node);
            }
        } else if (comparison > 0) {
            node.right = this.insertNode(node.right, value, priority, onInsert);

            if (node.right.priority > node.priority) {
                node = this.rotateLeft(node);
            }
        }

        return node;
    }

    removeNode(node, value, onRemove) {
        if (!node) {
            return null;
        }

        const comparison = this.compare(value, node.value);

        if (comparison < 0) {
            node.left = this.removeNode(node.left, value, onRemove);
            return node;
        }

        if (comparison > 0) {
            node.right = this.removeNode(node.right, value, onRemove);
            return node;
        }

        onRemove();

        if (!node.left) {
            return node.right;
        }

        if (!node.right) {
            return node.left;
        }

        if (node.left.priority > node.right.priority) {
            node = this.rotateRight(node);
            node.right = this.removeNode(node.right, value, () => {
                this.nodeCount += 1;
            });
        } else {
            node = this.rotateLeft(node);
            node.left = this.removeNode(node.left, value, () => {
                this.nodeCount += 1;
            });
        }

        return node;
    }

    rotateLeft(node) {
        const pivot = node.right;
        node.right = pivot.left;
        pivot.left = node;
        return pivot;
    }

    rotateRight(node) {
        const pivot = node.left;
        node.left = pivot.right;
        pivot.right = node;
        return pivot;
    }

    traverseInOrder(node, result) {
        if (!node) {
            return;
        }

        this.traverseInOrder(node.left, result);
        result.push(node.value);
        this.traverseInOrder(node.right, result);
    }
}

module.exports = Treap;
