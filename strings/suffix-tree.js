const pickTerminator = (text) => {
    const candidates = ["\u0000", "$", "#", "\u0001", "\u0002", "\uFFFF"];
    const candidate = candidates.find((character) => !text.includes(character));
    return candidate || String.fromCharCode(0xE000);
};

const commonPrefixLength = (firstText, secondText) => {
    let index = 0;

    while (
        index < firstText.length &&
        index < secondText.length &&
        firstText[index] === secondText[index]
    ) {
        index += 1;
    }

    return index;
};

class SuffixTreeNode {
    constructor() {
        this.children = new Map();
        this.suffixIndex = -1;
    }
}

class SuffixTree {
    constructor() {
        this.root = new SuffixTreeNode();
        this.text = "";
        this.terminator = "";
    }

    build(text) {
        if (typeof text !== "string") {
            throw new TypeError("SuffixTree.build expects a string.");
        }

        this.root = new SuffixTreeNode();
        this.text = text;
        this.terminator = pickTerminator(text);
        const indexedText = text + this.terminator;

        for (let index = 0; index < indexedText.length; index += 1) {
            this.insertSuffix(indexedText.slice(index), index);
        }

        return this;
    }

    contains(pattern) {
        return this.occurrences(pattern).length > 0;
    }

    occurrences(pattern) {
        if (typeof pattern !== "string") {
            throw new TypeError("SuffixTree.occurrences expects a string.");
        }

        if (pattern.length === 0) {
            return Array.from({ length: this.text.length }, (_, index) => index);
        }

        const match = this.findMatch(pattern);

        if (!match) {
            return [];
        }

        const positions = [];
        this.collectSuffixIndexes(match.node, positions);
        return positions.filter((index) => index < this.text.length).sort((first, second) => first - second);
    }

    insertSuffix(suffix, suffixIndex) {
        let node = this.root;
        let remaining = suffix;

        while (remaining.length > 0) {
            const firstCharacter = remaining[0];

            if (!node.children.has(firstCharacter)) {
                const leaf = new SuffixTreeNode();
                leaf.suffixIndex = suffixIndex;
                node.children.set(firstCharacter, { label: remaining, node: leaf });
                return;
            }

            const edge = node.children.get(firstCharacter);
            const prefixLength = commonPrefixLength(edge.label, remaining);

            if (prefixLength === edge.label.length) {
                remaining = remaining.slice(prefixLength);
                node = edge.node;
                continue;
            }

            const split = new SuffixTreeNode();
            const originalChild = edge.node;
            const originalRemainder = edge.label.slice(prefixLength);
            const newRemainder = remaining.slice(prefixLength);

            edge.label = edge.label.slice(0, prefixLength);
            edge.node = split;
            split.children.set(originalRemainder[0], { label: originalRemainder, node: originalChild });

            const leaf = new SuffixTreeNode();
            leaf.suffixIndex = suffixIndex;
            split.children.set(newRemainder[0], { label: newRemainder, node: leaf });
            return;
        }
    }

    findMatch(pattern) {
        let node = this.root;
        let remaining = pattern;

        while (remaining.length > 0) {
            const edge = node.children.get(remaining[0]);

            if (!edge) {
                return null;
            }

            const prefixLength = commonPrefixLength(edge.label, remaining);

            if (prefixLength === 0) {
                return null;
            }

            if (prefixLength === remaining.length) {
                return { node: edge.node };
            }

            if (prefixLength < edge.label.length) {
                return null;
            }

            remaining = remaining.slice(prefixLength);
            node = edge.node;
        }

        return { node };
    }

    collectSuffixIndexes(node, positions) {
        if (node.suffixIndex !== -1) {
            positions.push(node.suffixIndex);
            return;
        }

        node.children.forEach((edge) => {
            this.collectSuffixIndexes(edge.node, positions);
        });
    }
}

module.exports = SuffixTree;
