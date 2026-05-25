const wordBreak = (text, dictionary) => {
    const words = dictionary instanceof Set ? dictionary : new Set(dictionary);
    const reachable = new Array(text.length + 1).fill(false);
    const previous = new Array(text.length + 1).fill(-1);
    reachable[0] = true;

    for (let end = 1; end <= text.length; end += 1) {
        for (let start = 0; start < end; start += 1) {
            if (reachable[start] && words.has(text.slice(start, end))) {
                reachable[end] = true;
                previous[end] = start;
                break;
            }
        }
    }

    if (!reachable[text.length]) {
        return {
            possible: false,
            segments: [],
        };
    }

    const segments = [];
    let end = text.length;

    while (end > 0) {
        const start = previous[end];
        segments.push(text.slice(start, end));
        end = start;
    }

    segments.reverse();

    return {
        possible: true,
        segments,
    };
};

module.exports = wordBreak;
