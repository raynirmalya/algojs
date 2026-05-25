const suffixArray = require("./suffix-array");

const pickTerminator = (text) => {
    const candidates = ["\u0000", "$", "#", "\u0001", "\u0002", "\uFFFF"];
    const candidate = candidates.find((character) => !text.includes(character));
    return candidate || String.fromCharCode(0xE000);
};

class FMIndex {
    constructor(text) {
        this.originalText = "";
        this.text = "";
        this.suffixes = [];
        this.bwt = "";
        this.firstOccurrence = new Map();
        this.occurrenceTable = new Map();

        if (text !== undefined) {
            this.build(text);
        }
    }

    build(text) {
        if (typeof text !== "string") {
            throw new TypeError("FMIndex.build expects a string.");
        }

        const terminator = pickTerminator(text);
        this.originalText = text;
        this.text = text + terminator;
        this.suffixes = suffixArray(this.text);
        this.bwt = this.suffixes
            .map((index) => this.text[(index + this.text.length - 1) % this.text.length])
            .join("");

        const alphabet = Array.from(new Set(this.text.split(""))).sort();
        let total = 0;

        alphabet.forEach((character) => {
            this.firstOccurrence.set(character, total);
            total += this.text.split(character).length - 1;
        });

        alphabet.forEach((character) => {
            const counts = new Array(this.bwt.length + 1).fill(0);

            for (let index = 0; index < this.bwt.length; index += 1) {
                counts[index + 1] = counts[index] + (this.bwt[index] === character ? 1 : 0);
            }

            this.occurrenceTable.set(character, counts);
        });

        return this;
    }

    count(pattern) {
        const range = this.searchRange(pattern);
        return range ? range.bottom - range.top + 1 : 0;
    }

    contains(pattern) {
        return this.count(pattern) > 0;
    }

    search(pattern) {
        const range = this.searchRange(pattern);

        if (!range) {
            return [];
        }

        return this.suffixes
            .slice(range.top, range.bottom + 1)
            .filter((index) => index < this.originalText.length)
            .sort((first, second) => first - second);
    }

    searchRange(pattern) {
        if (typeof pattern !== "string") {
            throw new TypeError("FMIndex expects string patterns.");
        }

        if (pattern.length === 0) {
            return {
                top: 0,
                bottom: this.suffixes.length - 2,
            };
        }

        let top = 0;
        let bottom = this.bwt.length - 1;

        for (let index = pattern.length - 1; index >= 0 && top <= bottom; index -= 1) {
            const character = pattern[index];
            const counts = this.occurrenceTable.get(character);

            if (!counts) {
                return null;
            }

            const topCount = counts[top];
            const bottomCount = counts[bottom + 1];

            if (bottomCount === topCount) {
                return null;
            }

            top = this.firstOccurrence.get(character) + topCount;
            bottom = this.firstOccurrence.get(character) + bottomCount - 1;
        }

        return top <= bottom ? { top, bottom } : null;
    }
}

module.exports = FMIndex;
