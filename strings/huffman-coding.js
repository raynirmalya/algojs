const BinaryHeap = require("../collections/binary-heap");

const buildTree = (text) => {
    const frequencies = new Map();
    const heap = new BinaryHeap((first, second) => first.frequency - second.frequency);

    for (const character of text) {
        frequencies.set(character, (frequencies.get(character) || 0) + 1);
    }

    frequencies.forEach((frequency, character) => {
        heap.push({ character, frequency, left: null, right: null });
    });

    if (heap.size() === 1) {
        const only = heap.pop();
        return { character: null, frequency: only.frequency, left: only, right: null };
    }

    while (heap.size() > 1) {
        const left = heap.pop();
        const right = heap.pop();
        heap.push({
            character: null,
            frequency: left.frequency + right.frequency,
            left,
            right,
        });
    }

    return heap.pop();
};

const buildCodes = (node, prefix, codes) => {
    if (!node) {
        return;
    }

    if (node.character !== null) {
        codes[node.character] = prefix || "0";
        return;
    }

    buildCodes(node.left, `${prefix}0`, codes);
    buildCodes(node.right, `${prefix}1`, codes);
};

const huffmanCoding = {
    encode(text) {
        if (text.length === 0) {
            return {
                encoded: "",
                codes: {},
                tree: null,
            };
        }

        const tree = buildTree(text);
        const codes = {};
        buildCodes(tree, "", codes);

        return {
            encoded: text.split("").map((character) => codes[character]).join(""),
            codes,
            tree,
        };
    },

    decode(encoded, tree) {
        if (!encoded.length || !tree) {
            return "";
        }

        let current = tree;
        let decoded = "";

        for (const bit of encoded) {
            current = bit === "0" ? current.left : current.right;

            if (current.character !== null) {
                decoded += current.character;
                current = tree;
            }
        }

        return decoded;
    },
};

module.exports = huffmanCoding;
