const prefixFunction = require("./prefix-function");

const alphabetFromPattern = (pattern) => Array.from(new Set(pattern.split("")));

const prefixAutomaton = (pattern, alphabet) => {
    if (typeof pattern !== "string") {
        throw new TypeError("prefixAutomaton expects a pattern string.");
    }

    const characters = Array.isArray(alphabet) ? alphabet.slice() : alphabetFromPattern(pattern);
    const prefix = prefixFunction(pattern);
    const automaton = Array.from({ length: pattern.length + 1 }, () => new Map());

    for (let state = 0; state <= pattern.length; state += 1) {
        characters.forEach((character) => {
            if (state < pattern.length && pattern[state] === character) {
                automaton[state].set(character, state + 1);
            } else if (state === 0) {
                automaton[state].set(character, 0);
            } else {
                automaton[state].set(character, automaton[prefix[state - 1]].get(character) || 0);
            }
        });
    }

    return {
        pattern,
        alphabet: characters,
        transitions: automaton,
    };
};

module.exports = prefixAutomaton;
