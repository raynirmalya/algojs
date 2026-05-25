const fisherYatesShuffle = (values, random = Math.random) => {
    if (!Array.isArray(values) || typeof random !== "function") {
        throw new TypeError("fisherYatesShuffle expects an array and an optional random function.");
    }

    const shuffled = values.slice();

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(random() * (index + 1));
        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }

    return shuffled;
};

module.exports = fisherYatesShuffle;
