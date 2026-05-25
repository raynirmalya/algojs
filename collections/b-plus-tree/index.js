const defaultCompare = (a, b) => a - b;

class BPlusNode {
    constructor(isLeaf) {
        this.isLeaf = isLeaf;
        this.keys = [];
        this.children = [];
        this.values = [];
        this.next = null;
    }
}

class BPlusTree {
    constructor(minDegree, compare) {
        this.minDegree = Number.isInteger(minDegree) && minDegree >= 2 ? minDegree : 2;
        this.compare = typeof compare === "function" ? compare : defaultCompare;
        this.root = new BPlusNode(true);
        this.keyCount = 0;
    }

    size() {
        return this.keyCount;
    }

    isEmpty() {
        return this.keyCount === 0;
    }

    has(key) {
        return this.search(key) !== null;
    }

    search(key) {
        const leaf = this.findLeaf(this.root, key);
        const index = this.findKeyIndex(leaf.keys, key);
        return index < leaf.keys.length && this.compare(leaf.keys[index], key) === 0 ? leaf.values[index] : null;
    }

    insert(key, value) {
        const storedValue = value === undefined ? key : value;

        if (this.root.keys.length === (2 * this.minDegree) - 1) {
            const newRoot = new BPlusNode(false);
            newRoot.children.push(this.root);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
        }

        const inserted = this.insertNonFull(this.root, key, storedValue);

        if (inserted) {
            this.keyCount += 1;
        }

        return inserted;
    }

    range(start, end) {
        const result = [];
        let leaf = this.findLeaf(this.root, start);

        while (leaf) {
            for (let index = 0; index < leaf.keys.length; index += 1) {
                const key = leaf.keys[index];

                if (this.compare(key, start) < 0) {
                    continue;
                }

                if (this.compare(key, end) > 0) {
                    return result;
                }

                result.push({ key, value: leaf.values[index] });
            }

            leaf = leaf.next;
        }

        return result;
    }

    entries() {
        const result = [];
        let leaf = this.root;

        while (leaf && !leaf.isLeaf) {
            leaf = leaf.children[0];
        }

        while (leaf) {
            for (let index = 0; index < leaf.keys.length; index += 1) {
                result.push({ key: leaf.keys[index], value: leaf.values[index] });
            }

            leaf = leaf.next;
        }

        return result;
    }

    findLeaf(node, key) {
        let currentNode = node;

        while (!currentNode.isLeaf) {
            let index = 0;

            while (index < currentNode.keys.length && this.compare(key, currentNode.keys[index]) >= 0) {
                index += 1;
            }

            currentNode = currentNode.children[index];
        }

        return currentNode;
    }

    findKeyIndex(keys, key) {
        let low = 0;
        let high = keys.length;

        while (low < high) {
            const middle = Math.floor((low + high) / 2);

            if (this.compare(keys[middle], key) < 0) {
                low = middle + 1;
            } else {
                high = middle;
            }
        }

        return low;
    }

    splitChild(parent, childIndex) {
        const child = parent.children[childIndex];
        const sibling = new BPlusNode(child.isLeaf);
        const degree = this.minDegree;

        if (child.isLeaf) {
            sibling.keys = child.keys.slice(degree);
            sibling.values = child.values.slice(degree);
            child.keys = child.keys.slice(0, degree);
            child.values = child.values.slice(0, degree);
            sibling.next = child.next;
            child.next = sibling;

            parent.keys.splice(childIndex, 0, sibling.keys[0]);
            parent.children.splice(childIndex + 1, 0, sibling);
            return;
        }

        const promoted = child.keys[degree - 1];
        sibling.keys = child.keys.slice(degree);
        sibling.children = child.children.slice(degree);
        child.keys = child.keys.slice(0, degree - 1);
        child.children = child.children.slice(0, degree);

        parent.keys.splice(childIndex, 0, promoted);
        parent.children.splice(childIndex + 1, 0, sibling);
    }

    insertNonFull(node, key, value) {
        if (node.isLeaf) {
            const index = this.findKeyIndex(node.keys, key);

            if (index < node.keys.length && this.compare(node.keys[index], key) === 0) {
                node.values[index] = value;
                return false;
            }

            node.keys.splice(index, 0, key);
            node.values.splice(index, 0, value);
            return true;
        }

        let index = 0;

        while (index < node.keys.length && this.compare(key, node.keys[index]) >= 0) {
            index += 1;
        }

        if (node.children[index].keys.length === (2 * this.minDegree) - 1) {
            this.splitChild(node, index);

            if (this.compare(key, node.keys[index]) >= 0) {
                index += 1;
            }
        }

        return this.insertNonFull(node.children[index], key, value);
    }
}

module.exports = BPlusTree;
