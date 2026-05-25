class PersistentTrieNode {
    constructor(children, isWord) {
        this.children = children || new Map();
        this.isWord = !!isWord;
    }
}

class PersistentTrie {
    constructor() {
        this.roots = [new PersistentTrieNode()];
    }

    versionCount() {
        return this.roots.length;
    }

    latestVersion() {
        return this.roots.length - 1;
    }

    insert(word, version) {
        if (typeof word !== "string") {
            throw new TypeError("PersistentTrie.insert expects a string.");
        }

        const versionIndex = version === undefined ? this.latestVersion() : version;
        this.assertVersion(versionIndex);

        const root = this.insertNode(this.roots[versionIndex], word, 0);
        this.roots.push(root);
        return this.latestVersion();
    }

    has(word, version) {
        const node = this.findNode(word, version);
        return !!node && node.isWord;
    }

    startsWith(prefix, version) {
        return this.findNode(prefix, version) !== null;
    }

    getWordsWithPrefix(prefix, version) {
        const node = this.findNode(prefix, version);

        if (!node) {
            return [];
        }

        const words = [];
        this.collectWords(node, prefix, words);
        return words;
    }

    insertNode(node, word, index) {
        const nextNode = new PersistentTrieNode(new Map(node.children), node.isWord);

        if (index === word.length) {
            nextNode.isWord = true;
            return nextNode;
        }

        const character = word[index];
        const child = node.children.get(character) || new PersistentTrieNode();
        nextNode.children.set(character, this.insertNode(child, word, index + 1));
        return nextNode;
    }

    findNode(text, version) {
        if (typeof text !== "string") {
            throw new TypeError("PersistentTrie expects string lookups.");
        }

        const versionIndex = version === undefined ? this.latestVersion() : version;
        this.assertVersion(versionIndex);

        let node = this.roots[versionIndex];

        for (const character of text) {
            if (!node.children.has(character)) {
                return null;
            }

            node = node.children.get(character);
        }

        return node;
    }

    collectWords(node, prefix, words) {
        if (node.isWord) {
            words.push(prefix);
        }

        Array.from(node.children.keys()).sort().forEach((character) => {
            this.collectWords(node.children.get(character), prefix + character, words);
        });
    }

    assertVersion(version) {
        if (!Number.isInteger(version) || version < 0 || version >= this.roots.length) {
            throw new RangeError("PersistentTrie version is out of bounds.");
        }
    }
}

module.exports = PersistentTrie;
