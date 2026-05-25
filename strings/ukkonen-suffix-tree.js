const pickTerminator = (text) => {
    const candidates = ["\u0000", "$", "#", "\u0001", "\u0002", "\uFFFF"];
    const candidate = candidates.find((character) => !text.includes(character));
    return candidate || String.fromCharCode(0xE000);
};

class UkkonenSuffixTreeNode {
    constructor(start, end) {
        this.children = new Map();
        this.suffixLink = null;
        this.start = start;
        this.end = end;
        this.suffixIndex = -1;
    }
}

class UkkonenSuffixTree {
    constructor() {
        this.root = null;
        this.text = "";
        this.originalText = "";
        this.activeNode = null;
        this.activeEdge = -1;
        this.activeLength = 0;
        this.remainingSuffixes = 0;
        this.leafEnd = { value: -1 };
        this.lastNewNode = null;
    }

    build(text) {
        if (typeof text !== "string") {
            throw new TypeError("UkkonenSuffixTree.build expects a string.");
        }

        const terminator = pickTerminator(text);
        this.originalText = text;
        this.text = text + terminator;
        this.root = new UkkonenSuffixTreeNode(-1, { value: -1 });
        this.root.suffixLink = this.root;
        this.activeNode = this.root;
        this.activeEdge = -1;
        this.activeLength = 0;
        this.remainingSuffixes = 0;
        this.leafEnd = { value: -1 };
        this.lastNewNode = null;

        for (let index = 0; index < this.text.length; index += 1) {
            this.extend(index);
        }

        this.setSuffixIndexes(this.root, 0);
        return this;
    }

    contains(pattern) {
        return this.occurrences(pattern).length > 0;
    }

    occurrences(pattern) {
        if (typeof pattern !== "string") {
            throw new TypeError("UkkonenSuffixTree.occurrences expects a string.");
        }

        if (pattern.length === 0) {
            return Array.from({ length: this.originalText.length }, (_, index) => index);
        }

        const matchNode = this.findPatternNode(pattern);

        if (!matchNode) {
            return [];
        }

        const positions = [];
        this.collectSuffixIndexes(matchNode, positions);
        return positions
            .filter((index) => index >= 0 && index < this.originalText.length)
            .sort((first, second) => first - second);
    }

    createNode(start, end) {
        return new UkkonenSuffixTreeNode(start, end);
    }

    edgeLength(node) {
        return node === this.root ? 0 : node.end.value - node.start + 1;
    }

    walkDown(node) {
        if (this.activeLength < this.edgeLength(node)) {
            return false;
        }

        this.activeEdge += this.edgeLength(node);
        this.activeLength -= this.edgeLength(node);
        this.activeNode = node;
        return true;
    }

    extend(position) {
        this.leafEnd.value = position;
        this.remainingSuffixes += 1;
        this.lastNewNode = null;

        while (this.remainingSuffixes > 0) {
            if (this.activeLength === 0) {
                this.activeEdge = position;
            }

            const activeCharacter = this.text[this.activeEdge];

            if (!this.activeNode.children.has(activeCharacter)) {
                this.activeNode.children.set(activeCharacter, this.createNode(position, this.leafEnd));

                if (this.lastNewNode && this.activeNode !== this.root) {
                    this.lastNewNode.suffixLink = this.activeNode;
                    this.lastNewNode = null;
                }
            } else {
                const nextNode = this.activeNode.children.get(activeCharacter);

                if (this.walkDown(nextNode)) {
                    continue;
                }

                if (this.text[nextNode.start + this.activeLength] === this.text[position]) {
                    if (this.lastNewNode && this.activeNode !== this.root) {
                        this.lastNewNode.suffixLink = this.activeNode;
                        this.lastNewNode = null;
                    }

                    this.activeLength += 1;
                    break;
                }

                const splitEnd = { value: nextNode.start + this.activeLength - 1 };
                const splitNode = this.createNode(nextNode.start, splitEnd);
                this.activeNode.children.set(activeCharacter, splitNode);
                splitNode.children.set(this.text[position], this.createNode(position, this.leafEnd));
                nextNode.start += this.activeLength;
                splitNode.children.set(this.text[nextNode.start], nextNode);

                if (this.lastNewNode) {
                    this.lastNewNode.suffixLink = splitNode;
                }

                this.lastNewNode = splitNode;
            }

            this.remainingSuffixes -= 1;

            if (this.activeNode === this.root && this.activeLength > 0) {
                this.activeLength -= 1;
                this.activeEdge = position - this.remainingSuffixes + 1;
            } else if (this.activeNode !== this.root) {
                this.activeNode = this.activeNode.suffixLink || this.root;
            }
        }
    }

    setSuffixIndexes(node, currentLength) {
        if (node.children.size === 0) {
            node.suffixIndex = this.text.length - currentLength;
            return;
        }

        node.children.forEach((child) => {
            this.setSuffixIndexes(child, currentLength + this.edgeLength(child));
        });
    }

    findPatternNode(pattern) {
        let node = this.root;
        let patternIndex = 0;

        while (patternIndex < pattern.length) {
            const nextNode = node.children.get(pattern[patternIndex]);

            if (!nextNode) {
                return null;
            }

            const edgeText = this.text.slice(nextNode.start, nextNode.end.value + 1);
            let edgeIndex = 0;

            while (edgeIndex < edgeText.length && patternIndex < pattern.length) {
                if (edgeText[edgeIndex] !== pattern[patternIndex]) {
                    return null;
                }

                edgeIndex += 1;
                patternIndex += 1;
            }

            if (patternIndex === pattern.length) {
                return nextNode;
            }

            node = nextNode;
        }

        return node;
    }

    collectSuffixIndexes(node, positions) {
        if (node.suffixIndex !== -1) {
            positions.push(node.suffixIndex);
            return;
        }

        node.children.forEach((child) => {
            this.collectSuffixIndexes(child, positions);
        });
    }
}

module.exports = UkkonenSuffixTree;
