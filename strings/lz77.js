const lz77 = {
    compress(text, windowSize, lookaheadSize) {
        if (typeof text !== "string") {
            throw new TypeError("lz77.compress expects a string.");
        }

        const dictionarySize = windowSize || 16;
        const previewSize = lookaheadSize || 8;
        const tokens = [];
        let cursor = 0;

        while (cursor < text.length) {
            const windowStart = Math.max(0, cursor - dictionarySize);
            const window = text.slice(windowStart, cursor);
            let bestOffset = 0;
            let bestLength = 0;

            for (let offset = 1; offset <= window.length; offset += 1) {
                let length = 0;

                while (
                    length < previewSize &&
                    cursor + length < text.length &&
                    window[window.length - offset + (length % offset)] === text[cursor + length]
                ) {
                    length += 1;
                }

                if (length > bestLength) {
                    bestLength = length;
                    bestOffset = offset;
                }
            }

            tokens.push({
                offset: bestOffset,
                length: bestLength,
                next: text[cursor + bestLength] || "",
            });

            cursor += bestLength + 1;
        }

        return tokens;
    },

    decompress(tokens) {
        let output = "";

        tokens.forEach(({ offset, length, next }) => {
            if (offset > 0 && length > 0) {
                const start = output.length - offset;

                for (let index = 0; index < length; index += 1) {
                    output += output[start + index];
                }
            }

            output += next;
        });

        return output;
    },
};

module.exports = lz77;
