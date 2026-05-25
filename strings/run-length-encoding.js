const runLengthEncoding = {
    encode(text) {
        if (typeof text !== "string") {
            throw new TypeError("runLengthEncoding.encode expects a string.");
        }

        if (text.length === 0) {
            return "";
        }

        let encoded = "";
        let count = 1;

        for (let index = 1; index <= text.length; index += 1) {
            if (text[index] === text[index - 1]) {
                count += 1;
            } else {
                encoded += `${count}:${text[index - 1]};`;
                count = 1;
            }
        }

        return encoded;
    },

    decode(encoded) {
        if (typeof encoded !== "string") {
            throw new TypeError("runLengthEncoding.decode expects a string.");
        }

        if (encoded.length === 0) {
            return "";
        }

        return encoded
            .split(";")
            .filter(Boolean)
            .map((chunk) => {
                const [count, character] = chunk.split(":");
                return character.repeat(Number(count));
            })
            .join("");
    },
};

module.exports = runLengthEncoding;
