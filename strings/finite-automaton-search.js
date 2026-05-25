const prefixAutomaton = require("./prefix-automaton");

const finiteAutomatonSearch = (text, pattern) => {
    if (typeof text !== "string" || typeof pattern !== "string") {
        throw new TypeError("finiteAutomatonSearch expects string inputs.");
    }

    if (pattern.length === 0 || pattern.length > text.length) {
        return [];
    }

    const automaton = prefixAutomaton(pattern, Array.from(new Set((text + pattern).split(""))));
    const matches = [];
    let state = 0;

    for (let index = 0; index < text.length; index += 1) {
        state = automaton.transitions[state].get(text[index]) || 0;

        if (state === pattern.length) {
            matches.push(index - pattern.length + 1);
        }
    }

    return matches;
};

module.exports = finiteAutomatonSearch;
