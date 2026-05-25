class BinaryTrieNode {
    constructor() {
        this.zero = null;
        this.one = null;
        this.count = 0;
    }
}

class BinaryTrie {
    constructor(maxBit) {
        this.maxBit = Number.isInteger(maxBit) ? maxBit : 30;
        this.root = new BinaryTrieNode();
    }

    insert(value) {
        this.assertValue(value);

        let currentNode = this.root;
        currentNode.count += 1;

        for (let bit = this.maxBit; bit >= 0; bit -= 1) {
            const currentBit = (value >>> bit) & 1;

            if (currentBit === 0) {
                if (!currentNode.zero) {
                    currentNode.zero = new BinaryTrieNode();
                }

                currentNode = currentNode.zero;
            } else {
                if (!currentNode.one) {
                    currentNode.one = new BinaryTrieNode();
                }

                currentNode = currentNode.one;
            }

            currentNode.count += 1;
        }

        return true;
    }

    has(value) {
        this.assertValue(value);

        let currentNode = this.root;

        for (let bit = this.maxBit; bit >= 0; bit -= 1) {
            const currentBit = (value >>> bit) & 1;
            currentNode = currentBit === 0 ? currentNode.zero : currentNode.one;

            if (!currentNode || currentNode.count === 0) {
                return false;
            }
        }

        return true;
    }

    remove(value) {
        if (!this.has(value)) {
            return false;
        }

        let currentNode = this.root;
        currentNode.count -= 1;

        for (let bit = this.maxBit; bit >= 0; bit -= 1) {
            const currentBit = (value >>> bit) & 1;
            const nextNode = currentBit === 0 ? currentNode.zero : currentNode.one;

            nextNode.count -= 1;
            currentNode = nextNode;
        }

        return true;
    }

    maxXor(value) {
        return this.searchByPreference(value, true);
    }

    minXor(value) {
        return this.searchByPreference(value, false);
    }

    searchByPreference(value, preferOpposite) {
        this.assertValue(value);

        if (this.root.count === 0) {
            return null;
        }

        let currentNode = this.root;
        let matchedValue = 0;

        for (let bit = this.maxBit; bit >= 0; bit -= 1) {
            const currentBit = (value >>> bit) & 1;
            const preferredBit = preferOpposite ? 1 - currentBit : currentBit;
            const fallbackBit = 1 - preferredBit;
            const preferredNode = preferredBit === 0 ? currentNode.zero : currentNode.one;
            const fallbackNode = fallbackBit === 0 ? currentNode.zero : currentNode.one;

            if (preferredNode && preferredNode.count > 0) {
                matchedValue |= preferredBit << bit;
                currentNode = preferredNode;
            } else {
                matchedValue |= fallbackBit << bit;
                currentNode = fallbackNode;
            }
        }

        return {
            value: matchedValue,
            xor: matchedValue ^ value,
        };
    }

    assertValue(value) {
        if (!Number.isInteger(value) || value < 0) {
            throw new TypeError("BinaryTrie expects non-negative integer values.");
        }
    }
}

module.exports = BinaryTrie;
