const defaultCompare = (a, b) => a - b;

class OrderStatisticNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
        this.size = 1;
    }
}

class OrderStatisticTree {
    constructor(compare) {
        this.compare = typeof compare === "function" ? compare : defaultCompare;
        this.root = null;
        this.nodeCount = 0;
    }

    size() {
        return this.nodeCount;
    }

    isEmpty() {
        return this.nodeCount === 0;
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

    insert(value) {
        let inserted = false;
        this.root = this.insertNode(this.root, value, () => {
            inserted = true;
            this.nodeCount += 1;
        });
        return inserted;
    }

    remove(value) {
        let removed = false;
        this.root = this.removeNode(this.root, value, () => {
            removed = true;
            this.nodeCount -= 1;
        });
        return removed;
    }

    select(rank) {
        if (rank < 0 || rank >= this.nodeCount) {
            return null;
        }

        let node = this.root;
        let currentRank = rank;

        while (node) {
            const leftSize = this.nodeSize(node.left);

            if (currentRank < leftSize) {
                node = node.left;
            } else if (currentRank > leftSize) {
                currentRank -= leftSize + 1;
                node = node.right;
            } else {
                return node.value;
            }
        }

        return null;
    }

    rank(value) {
        let node = this.root;
        let rank = 0;

        while (node) {
            const comparison = this.compare(value, node.value);

            if (comparison <= 0) {
                node = node.left;
            } else {
                rank += this.nodeSize(node.left) + 1;
                node = node.right;
            }
        }

        return rank;
    }

    inOrder() {
        const result = [];
        this.traverseInOrder(this.root, result);
        return result;
    }

    insertNode(node, value, onInsert) {
        if (!node) {
            onInsert();
            return new OrderStatisticNode(value);
        }

        const comparison = this.compare(value, node.value);

        if (comparison < 0) {
            node.left = this.insertNode(node.left, value, onInsert);
        } else if (comparison > 0) {
            node.right = this.insertNode(node.right, value, onInsert);
        } else {
            return node;
        }

        return this.balance(node);
    }

    removeNode(node, value, onRemove) {
        if (!node) {
            return null;
        }

        const comparison = this.compare(value, node.value);

        if (comparison < 0) {
            node.left = this.removeNode(node.left, value, onRemove);
        } else if (comparison > 0) {
            node.right = this.removeNode(node.right, value, onRemove);
        } else {
            onRemove();

            if (!node.left) {
                return node.right;
            }

            if (!node.right) {
                return node.left;
            }

            const successor = this.getMinNode(node.right);
            node.value = successor.value;
            node.right = this.removeNode(node.right, successor.value, () => {
                this.nodeCount += 1;
            });
        }

        return this.balance(node);
    }

    getMinNode(node) {
        let currentNode = node;

        while (currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode;
    }

    height(node) {
        return node ? node.height : 0;
    }

    nodeSize(node) {
        return node ? node.size : 0;
    }

    updateNode(node) {
        node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
        node.size = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
    }

    balanceFactor(node) {
        return this.height(node.left) - this.height(node.right);
    }

    rotateLeft(node) {
        const pivot = node.right;
        node.right = pivot.left;
        pivot.left = node;

        this.updateNode(node);
        this.updateNode(pivot);

        return pivot;
    }

    rotateRight(node) {
        const pivot = node.left;
        node.left = pivot.right;
        pivot.right = node;

        this.updateNode(node);
        this.updateNode(pivot);

        return pivot;
    }

    balance(node) {
        if (!node) {
            return null;
        }

        this.updateNode(node);
        const factor = this.balanceFactor(node);

        if (factor > 1) {
            if (this.balanceFactor(node.left) < 0) {
                node.left = this.rotateLeft(node.left);
            }

            return this.rotateRight(node);
        }

        if (factor < -1) {
            if (this.balanceFactor(node.right) > 0) {
                node.right = this.rotateRight(node.right);
            }

            return this.rotateLeft(node);
        }

        return node;
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

module.exports = OrderStatisticTree;
