const lz78 = {
    compress(text) {
        if (typeof text !== "string") {
            throw new TypeError("lz78.compress expects a string.");
        }

        const dictionary = new Map([["", 0]]);
        const tokens = [];
        let current = "";

        text.split("").forEach((character) => {
            const candidate = current + character;

            if (dictionary.has(candidate)) {
                current = candidate;
            } else {
                tokens.push({
                    index: dictionary.get(current),
                    character,
                });
                dictionary.set(candidate, dictionary.size);
                current = "";
            }
        });

        if (current !== "") {
            tokens.push({
                index: dictionary.get(current),
                character: "",
            });
        }

        return tokens;
    },

    decompress(tokens) {
        const dictionary = [""];
        let output = "";

        tokens.forEach(({ index, character }) => {
            const entry = dictionary[index] + character;
            output += entry;
            dictionary.push(entry);
        });

        return output;
    },
};

module.exports = lz78;
