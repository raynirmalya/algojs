class AhoNode {
    constructor() {
        this.children = new Map();
        this.failure = null;
        this.outputs = [];
    }
}

class AhoCorasick {
    constructor() {
        this.root = new AhoNode();
        this.isBuilt = false;
    }

    add(pattern, value) {
        let currentNode = this.root;

        for (const character of pattern) {
            if (!currentNode.children.has(character)) {
                currentNode.children.set(character, new AhoNode());
            }

            currentNode = currentNode.children.get(character);
        }

        currentNode.outputs.push({
            pattern,
            value: value === undefined ? pattern : value,
        });

        this.isBuilt = false;
        return this;
    }

    build() {
        const queue = [];
        this.root.failure = this.root;

        this.root.children.forEach((childNode) => {
            childNode.failure = this.root;
            queue.push(childNode);
        });

        for (let index = 0; index < queue.length; index += 1) {
            const currentNode = queue[index];

            currentNode.children.forEach((childNode, character) => {
                let fallback = currentNode.failure;

                while (fallback !== this.root && !fallback.children.has(character)) {
                    fallback = fallback.failure;
                }

                if (fallback.children.has(character) && fallback.children.get(character) !== childNode) {
                    childNode.failure = fallback.children.get(character);
                } else {
                    childNode.failure = this.root;
                }

                childNode.outputs = childNode.outputs.concat(childNode.failure.outputs);
                queue.push(childNode);
            });
        }

        this.isBuilt = true;
        return this;
    }

    search(text) {
        if (!this.isBuilt) {
            this.build();
        }

        const matches = [];
        let currentNode = this.root;

        for (let index = 0; index < text.length; index += 1) {
            const character = text[index];

            while (currentNode !== this.root && !currentNode.children.has(character)) {
                currentNode = currentNode.failure;
            }

            if (currentNode.children.has(character)) {
                currentNode = currentNode.children.get(character);
            }

            currentNode.outputs.forEach((output) => {
                matches.push({
                    index: index - output.pattern.length + 1,
                    pattern: output.pattern,
                    value: output.value,
                });
            });
        }

        return matches;
    }
}

module.exports = AhoCorasick;
