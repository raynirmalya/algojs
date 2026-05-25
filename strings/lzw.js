const lzw = {
    compress(text) {
        if (typeof text !== "string") {
            throw new TypeError("lzw.compress expects a string.");
        }

        const dictionary = new Map();
        for (let code = 0; code < 256; code += 1) {
            dictionary.set(String.fromCharCode(code), code);
        }

        let current = "";
        const output = [];
        let nextCode = 256;

        text.split("").forEach((character) => {
            const candidate = current + character;

            if (dictionary.has(candidate)) {
                current = candidate;
            } else {
                output.push(dictionary.get(current));
                dictionary.set(candidate, nextCode);
                nextCode += 1;
                current = character;
            }
        });

        if (current !== "") {
            output.push(dictionary.get(current));
        }

        return output;
    },

    decompress(codes) {
        const dictionary = new Map();
        for (let code = 0; code < 256; code += 1) {
            dictionary.set(code, String.fromCharCode(code));
        }

        let nextCode = 256;
        let previous = dictionary.get(codes[0]) || "";
        let output = previous;

        for (let index = 1; index < codes.length; index += 1) {
            const code = codes[index];
            const entry = dictionary.has(code)
                ? dictionary.get(code)
                : previous + previous[0];

            output += entry;
            dictionary.set(nextCode, previous + entry[0]);
            nextCode += 1;
            previous = entry;
        }

        return output;
    },
};

module.exports = lzw;
