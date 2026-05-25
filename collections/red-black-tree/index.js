const RED = true;
const BLACK = false;

const defaultCompare = (a, b) => a - b;

class RedBlackNode {
    constructor(value, color) {
        this.value = value;
        this.color = color;
        this.left = null;
        this.right = null;
        this.size = 1;
    }
}

class RedBlackTree {
    constructor(compare) {
        this.compare = typeof compare === "function" ? compare : defaultCompare;
        this.root = null;
    }

    size() {
        return this.nodeSize(this.root);
    }

    isEmpty() {
        return this.root === null;
    }

    has(value) {
        let node = this.root;

        while (node) {
            const comparison = this.compare(value, node.value);

            if (comparison === 0) {
                return true;
            }

            node = comparison < 0 ? node.left : node.right;
        }

        return false;
    }

    insert(value) {
        if (this.has(value)) {
            return false;
        }

        this.root = this.insertNode(this.root, value);
        this.root.color = BLACK;
        return true;
    }

    remove(value) {
        if (!this.has(value)) {
            return false;
        }

        if (!this.isRed(this.root.left) && !this.isRed(this.root.right)) {
            this.root.color = RED;
        }

        this.root = this.removeNode(this.root, value);

        if (this.root) {
            this.root.color = BLACK;
        }

        return true;
    }

    min() {
        if (!this.root) {
            return null;
        }

        let node = this.root;

        while (node.left) {
            node = node.left;
        }

        return node.value;
    }

    inOrder() {
        const values = [];
        this.traverseInOrder(this.root, values);
        return values;
    }

    insertNode(node, value) {
        if (!node) {
            return new RedBlackNode(value, RED);
        }

        const comparison = this.compare(value, node.value);

        if (comparison < 0) {
            node.left = this.insertNode(node.left, value);
        } else if (comparison > 0) {
            node.right = this.insertNode(node.right, value);
        } else {
            node.value = value;
        }

        return this.fixUp(node);
    }

    removeNode(node, value) {
        if (this.compare(value, node.value) < 0) {
            if (node.left) {
                if (!this.isRed(node.left) && !this.isRed(node.left.left)) {
                    node = this.moveRedLeft(node);
                }

                node.left = this.removeNode(node.left, value);
            }
        } else {
            if (this.isRed(node.left)) {
                node = this.rotateRight(node);
            }

            if (this.compare(value, node.value) === 0 && !node.right) {
                return null;
            }

            if (node.right) {
                if (!this.isRed(node.right) && !this.isRed(node.right.left)) {
                    node = this.moveRedRight(node);
                }

                if (this.compare(value, node.value) === 0) {
                    const minimum = this.minNode(node.right);
                    node.value = minimum.value;
                    node.right = this.deleteMin(node.right);
                } else {
                    node.right = this.removeNode(node.right, value);
                }
            }
        }

        return this.fixUp(node);
    }

    deleteMin(node) {
        if (!node.left) {
            return null;
        }

        let currentNode = node;

        if (!this.isRed(currentNode.left) && !this.isRed(currentNode.left.left)) {
            currentNode = this.moveRedLeft(currentNode);
        }

        currentNode.left = this.deleteMin(currentNode.left);
        return this.fixUp(currentNode);
    }

    minNode(node) {
        let currentNode = node;

        while (currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode;
    }

    isRed(node) {
        return !!node && node.color === RED;
    }

    nodeSize(node) {
        return node ? node.size : 0;
    }

    updateSize(node) {
        node.size = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
    }

    rotateLeft(node) {
        const pivot = node.right;
        node.right = pivot.left;
        pivot.left = node;
        pivot.color = node.color;
        node.color = RED;

        this.updateSize(node);
        this.updateSize(pivot);

        return pivot;
    }

    rotateRight(node) {
        const pivot = node.left;
        node.left = pivot.right;
        pivot.right = node;
        pivot.color = node.color;
        node.color = RED;

        this.updateSize(node);
        this.updateSize(pivot);

        return pivot;
    }

    flipColors(node) {
        node.color = !node.color;

        if (node.left) {
            node.left.color = !node.left.color;
        }

        if (node.right) {
            node.right.color = !node.right.color;
        }
    }

    moveRedLeft(node) {
        this.flipColors(node);

        if (node.right && this.isRed(node.right.left)) {
            node.right = this.rotateRight(node.right);
            node = this.rotateLeft(node);
            this.flipColors(node);
        }

        return node;
    }

    moveRedRight(node) {
        this.flipColors(node);

        if (node.left && this.isRed(node.left.left)) {
            node = this.rotateRight(node);
            this.flipColors(node);
        }

        return node;
    }

    fixUp(node) {
        let currentNode = node;

        if (this.isRed(currentNode.right) && !this.isRed(currentNode.left)) {
            currentNode = this.rotateLeft(currentNode);
        }

        if (this.isRed(currentNode.left) && this.isRed(currentNode.left.left)) {
            currentNode = this.rotateRight(currentNode);
        }

        if (this.isRed(currentNode.left) && this.isRed(currentNode.right)) {
            this.flipColors(currentNode);
        }

        this.updateSize(currentNode);
        return currentNode;
    }

    traverseInOrder(node, values) {
        if (!node) {
            return;
        }

        this.traverseInOrder(node.left, values);
        values.push(node.value);
        this.traverseInOrder(node.right, values);
    }
}

module.exports = RedBlackTree;
