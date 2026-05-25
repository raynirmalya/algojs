class SuffixAutomaton {
    constructor() {
        this.states = [
            {
                length: 0,
                suffixLink: -1,
                transitions: new Map(),
            },
        ];
        this.last = 0;
    }

    extend(character) {
        let current = this.states.length;
        this.states.push({
            length: this.states[this.last].length + 1,
            suffixLink: 0,
            transitions: new Map(),
        });

        let pointer = this.last;

        while (pointer !== -1 && !this.states[pointer].transitions.has(character)) {
            this.states[pointer].transitions.set(character, current);
            pointer = this.states[pointer].suffixLink;
        }

        if (pointer === -1) {
            this.last = current;
            return this;
        }

        const next = this.states[pointer].transitions.get(character);

        if (this.states[pointer].length + 1 === this.states[next].length) {
            this.states[current].suffixLink = next;
            this.last = current;
            return this;
        }

        const clone = this.states.length;
        this.states.push({
            length: this.states[pointer].length + 1,
            suffixLink: this.states[next].suffixLink,
            transitions: new Map(this.states[next].transitions),
        });

        while (pointer !== -1 && this.states[pointer].transitions.get(character) === next) {
            this.states[pointer].transitions.set(character, clone);
            pointer = this.states[pointer].suffixLink;
        }

        this.states[next].suffixLink = clone;
        this.states[current].suffixLink = clone;
        this.last = current;
        return this;
    }

    build(text) {
        for (const character of text) {
            this.extend(character);
        }

        return this;
    }

    contains(pattern) {
        let state = 0;

        for (const character of pattern) {
            if (!this.states[state].transitions.has(character)) {
                return false;
            }

            state = this.states[state].transitions.get(character);
        }

        return true;
    }

    longestCommonSubstring(text) {
        let state = 0;
        let length = 0;
        let bestLength = 0;
        let bestEnd = -1;

        for (let index = 0; index < text.length; index += 1) {
            const character = text[index];

            while (state !== 0 && !this.states[state].transitions.has(character)) {
                state = this.states[state].suffixLink;
                length = this.states[state].length;
            }

            if (this.states[state].transitions.has(character)) {
                state = this.states[state].transitions.get(character);
                length += 1;
            } else {
                state = 0;
                length = 0;
            }

            if (length > bestLength) {
                bestLength = length;
                bestEnd = index;
            }
        }

        return {
            length: bestLength,
            substring: bestLength === 0 ? "" : text.slice(bestEnd - bestLength + 1, bestEnd + 1),
        };
    }
}

module.exports = SuffixAutomaton;
