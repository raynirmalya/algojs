const suffixArray = require("./suffix-array");

const lcpArray = (text, providedSuffixArray) => {
    const suffixes = providedSuffixArray || suffixArray(text);
    const ranks = new Array(text.length);
    const lcp = new Array(Math.max(0, text.length - 1)).fill(0);
    let matched = 0;

    suffixes.forEach((suffixIndex, rank) => {
        ranks[suffixIndex] = rank;
    });

    for (let index = 0; index < text.length; index += 1) {
        const rank = ranks[index];

        if (rank === text.length - 1) {
            matched = 0;
            continue;
        }

        const nextSuffixIndex = suffixes[rank + 1];

        while (
            index + matched < text.length &&
            nextSuffixIndex + matched < text.length &&
            text[index + matched] === text[nextSuffixIndex + matched]
        ) {
            matched += 1;
        }

        lcp[rank] = matched;

        if (matched > 0) {
            matched -= 1;
        }
    }

    return lcp;
};

module.exports = lcpArray;
