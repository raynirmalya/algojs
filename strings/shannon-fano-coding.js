const buildCodes = (symbols, prefix, codes) => {
    if (symbols.length === 1) {
        codes[symbols[0].symbol] = prefix || "0";
        return;
    }

    const total = symbols.reduce((sum, entry) => sum + entry.frequency, 0);
    let accumulated = 0;
    let splitIndex = 0;

    for (let index = 0; index < symbols.length; index += 1) {
        accumulated += symbols[index].frequency;
        splitIndex = index;

        if (accumulated >= total / 2) {
            break;
        }
    }

    buildCodes(symbols.slice(0, splitIndex + 1), `${prefix}0`, codes);
    buildCodes(symbols.slice(splitIndex + 1), `${prefix}1`, codes);
};

const shannonFanoCoding = {
    encode(text) {
        if (typeof text !== "string") {
            throw new TypeError("shannonFanoCoding.encode expects a string.");
        }

        if (text.length === 0) {
            return {
                encoded: "",
                codes: {},
            };
        }

        const frequency = new Map();
        text.split("").forEach((character) => {
            frequency.set(character, (frequency.get(character) || 0) + 1);
        });

        const symbols = Array.from(frequency.entries())
            .map(([symbol, count]) => ({ symbol, frequency: count }))
            .sort((first, second) => second.frequency - first.frequency);
        const codes = {};
        buildCodes(symbols, "", codes);

        return {
            encoded: text.split("").map((character) => codes[character]).join(""),
            codes,
        };
    },

    decode(encoded, codes) {
        const reverse = new Map(Object.entries(codes).map(([symbol, code]) => [code, symbol]));
        let current = "";
        let decoded = "";

        encoded.split("").forEach((bit) => {
            current += bit;

            if (reverse.has(current)) {
                decoded += reverse.get(current);
                current = "";
            }
        });

        return decoded;
    },
};

module.exports = shannonFanoCoding;
