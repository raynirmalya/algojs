class PalindromeNode {
    constructor(length, suffixLink) {
        this.length = length;
        this.suffixLink = suffixLink;
        this.transitions = new Map();
        this.occurrences = 0;
    }
}

class Eertree {
    constructor() {
        this.text = [];
        this.nodes = [new PalindromeNode(-1, 0), new PalindromeNode(0, 0)];
        this.last = 1;
    }

    findSuffix(nodeIndex) {
        let current = nodeIndex;
        const position = this.text.length - 1;

        while (true) {
            const length = this.nodes[current].length;

            if (position - 1 - length >= 0 && this.text[position - 1 - length] === this.text[position]) {
                return current;
            }

            current = this.nodes[current].suffixLink;
        }
    }

    add(character) {
        this.text.push(character);
        const suffix = this.findSuffix(this.last);

        if (this.nodes[suffix].transitions.has(character)) {
            this.last = this.nodes[suffix].transitions.get(character);
            this.nodes[this.last].occurrences += 1;
            return this.last;
        }

        const newNode = new PalindromeNode(this.nodes[suffix].length + 2, 1);
        this.nodes.push(newNode);
        const newIndex = this.nodes.length - 1;
        this.nodes[suffix].transitions.set(character, newIndex);

        if (newNode.length === 1) {
            newNode.suffixLink = 1;
        } else {
            const linkSource = this.findSuffix(this.nodes[suffix].suffixLink);
            newNode.suffixLink = this.nodes[linkSource].transitions.get(character);
        }

        newNode.occurrences = 1;
        this.last = newIndex;
        return newIndex;
    }

    build(text) {
        text.split("").forEach((character) => this.add(character));
        return this;
    }

    palindromes() {
        return this.nodes
            .slice(2)
            .map((node) => ({
                length: node.length,
                occurrences: node.occurrences,
            }))
            .sort((first, second) => first.length - second.length);
    }
}

module.exports = Eertree;
