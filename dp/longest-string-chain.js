const longestStringChain = (words) => {
    if (!Array.isArray(words)) {
        throw new TypeError("longestStringChain expects an array of words.");
    }

    const sorted = words.slice().sort((first, second) => first.length - second.length);
    const dp = new Map();
    let best = 0;

    sorted.forEach((word) => {
        let chain = 1;

        for (let index = 0; index < word.length; index += 1) {
            const predecessor = word.slice(0, index) + word.slice(index + 1);
            chain = Math.max(chain, (dp.get(predecessor) || 0) + 1);
        }

        dp.set(word, chain);
        best = Math.max(best, chain);
    });

    return best;
};

module.exports = longestStringChain;
