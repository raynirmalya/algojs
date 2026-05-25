class TrieNode {
    constructor() {
        this.children = new Map();
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let currentNode = this.root;

        for (const character of word) {
            if (!currentNode.children.has(character)) {
                currentNode.children.set(character, new TrieNode());
            }

            currentNode = currentNode.children.get(character);
        }

        currentNode.isWord = true;
        return true;
    }

    has(word) {
        const node = this.getNode(word);
        return !!node && node.isWord;
    }

    startsWith(prefix) {
        return !!this.getNode(prefix);
    }

    delete(word) {
        return this.deleteNode(this.root, word, 0);
    }

    getWordsWithPrefix(prefix) {
        const startNode = this.getNode(prefix);

        if (!startNode) {
            return [];
        }

        const words = [];
        this.collectWords(startNode, prefix, words);
        return words;
    }

    getNode(fragment) {
        let currentNode = this.root;

        for (const character of fragment) {
            if (!currentNode.children.has(character)) {
                return null;
            }

            currentNode = currentNode.children.get(character);
        }

        return currentNode;
    }

    deleteNode(node, word, depth) {
        if (!node) {
            return false;
        }

        if (depth === word.length) {
            if (!node.isWord) {
                return false;
            }

            node.isWord = false;
            return node.children.size === 0;
        }

        const character = word[depth];
        const childNode = node.children.get(character);
        const shouldDeleteChild = this.deleteNode(childNode, word, depth + 1);

        if (shouldDeleteChild) {
            node.children.delete(character);
            return !node.isWord && node.children.size === 0;
        }

        return false;
    }

    collectWords(node, prefix, words) {
        if (node.isWord) {
            words.push(prefix);
        }

        node.children.forEach((childNode, character) => {
            this.collectWords(childNode, prefix + character, words);
        });
    }
}

module.exports = Trie;
