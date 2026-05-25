const suffixArray = (text) => {
    const suffixes = Array.from({ length: text.length }, (_, index) => index);
    let ranks = Array.from(text, (character) => character.charCodeAt(0));
    let step = 1;

    while (step < text.length) {
        suffixes.sort((firstIndex, secondIndex) => {
            if (ranks[firstIndex] !== ranks[secondIndex]) {
                return ranks[firstIndex] - ranks[secondIndex];
            }

            const firstNext = firstIndex + step < text.length ? ranks[firstIndex + step] : -1;
            const secondNext = secondIndex + step < text.length ? ranks[secondIndex + step] : -1;
            return firstNext - secondNext;
        });

        const nextRanks = new Array(text.length);
        nextRanks[suffixes[0]] = 0;

        for (let index = 1; index < suffixes.length; index += 1) {
            const current = suffixes[index];
            const previous = suffixes[index - 1];
            const currentPair = [
                ranks[current],
                current + step < text.length ? ranks[current + step] : -1,
            ];
            const previousPair = [
                ranks[previous],
                previous + step < text.length ? ranks[previous + step] : -1,
            ];

            nextRanks[current] =
                currentPair[0] === previousPair[0] && currentPair[1] === previousPair[1]
                    ? nextRanks[previous]
                    : nextRanks[previous] + 1;
        }

        ranks = nextRanks;

        if (ranks[suffixes[suffixes.length - 1]] === text.length - 1) {
            break;
        }

        step *= 2;
    }

    return suffixes;
};

module.exports = suffixArray;
