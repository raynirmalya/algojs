const defaultCompare = (a, b) => a - b;

class BTreeNode {
    constructor(isLeaf) {
        this.isLeaf = isLeaf;
        this.keys = [];
        this.children = [];
    }
}

class BTree {
    constructor(minDegree, compare) {
        this.minDegree = Number.isInteger(minDegree) && minDegree >= 2 ? minDegree : 2;
        this.compare = typeof compare === "function" ? compare : defaultCompare;
        this.root = new BTreeNode(true);
        this.keyCount = 0;
    }

    size() {
        return this.keyCount;
    }

    isEmpty() {
        return this.keyCount === 0;
    }

    has(value) {
        return this.search(value) !== null;
    }

    search(value) {
        return this.searchNode(this.root, value);
    }

    insert(value) {
        if (this.has(value)) {
            return false;
        }

        if (this.root.keys.length === (2 * this.minDegree) - 1) {
            const newRoot = new BTreeNode(false);
            newRoot.children.push(this.root);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
        }

        this.insertNonFull(this.root, value);
        this.keyCount += 1;
        return true;
    }

    traverse() {
        const result = [];
        this.traverseNode(this.root, result);
        return result;
    }

    height() {
        let height = 0;
        let node = this.root;

        while (node && !node.isLeaf) {
            height += 1;
            node = node.children[0];
        }

        return height;
    }

    searchNode(node, value) {
        let index = 0;

        while (index < node.keys.length && this.compare(value, node.keys[index]) > 0) {
            index += 1;
        }

        if (index < node.keys.length && this.compare(value, node.keys[index]) === 0) {
            return node.keys[index];
        }

        if (node.isLeaf) {
            return null;
        }

        return this.searchNode(node.children[index], value);
    }

    splitChild(parent, index) {
        const degree = this.minDegree;
        const node = parent.children[index];
        const sibling = new BTreeNode(node.isLeaf);
        const middleValue = node.keys[degree - 1];

        sibling.keys = node.keys.slice(degree);
        node.keys = node.keys.slice(0, degree - 1);

        if (!node.isLeaf) {
            sibling.children = node.children.slice(degree);
            node.children = node.children.slice(0, degree);
        }

        parent.keys.splice(index, 0, middleValue);
        parent.children.splice(index + 1, 0, sibling);
    }

    insertNonFull(node, value) {
        let index = node.keys.length - 1;

        if (node.isLeaf) {
            node.keys.push(value);

            while (index >= 0 && this.compare(value, node.keys[index]) < 0) {
                node.keys[index + 1] = node.keys[index];
                index -= 1;
            }

            node.keys[index + 1] = value;
            return;
        }

        while (index >= 0 && this.compare(value, node.keys[index]) < 0) {
            index -= 1;
        }

        index += 1;

        if (node.children[index].keys.length === (2 * this.minDegree) - 1) {
            this.splitChild(node, index);

            if (this.compare(value, node.keys[index]) > 0) {
                index += 1;
            }
        }

        this.insertNonFull(node.children[index], value);
    }

    traverseNode(node, result) {
        for (let index = 0; index < node.keys.length; index += 1) {
            if (!node.isLeaf) {
                this.traverseNode(node.children[index], result);
            }

            result.push(node.keys[index]);
        }

        if (!node.isLeaf) {
            this.traverseNode(node.children[node.keys.length], result);
        }
    }
}

module.exports = BTree;
