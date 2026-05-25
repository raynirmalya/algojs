const wordWrap = (words, maxWidth) => {
    if (!Array.isArray(words) || !Number.isInteger(maxWidth) || maxWidth <= 0) {
        throw new TypeError("wordWrap expects an array of words and a positive max width.");
    }

    const count = words.length;

    if (count === 0) {
        return {
            minCost: 0,
            lines: [],
        };
    }

    const extras = Array.from({ length: count }, () => new Array(count).fill(-1));
    const cost = Array.from({ length: count }, () => new Array(count).fill(Infinity));

    for (let start = 0; start < count; start += 1) {
        extras[start][start] = maxWidth - words[start].length;
        for (let end = start + 1; end < count; end += 1) {
            extras[start][end] = extras[start][end - 1] - words[end].length - 1;
        }
    }

    for (let start = 0; start < count; start += 1) {
        for (let end = start; end < count; end += 1) {
            if (extras[start][end] < 0) {
                continue;
            }

            cost[start][end] = end === count - 1 ? 0 : extras[start][end] ** 2;
        }
    }

    const dp = new Array(count + 1).fill(Infinity);
    const nextBreak = new Array(count).fill(-1);
    dp[count] = 0;

    for (let start = count - 1; start >= 0; start -= 1) {
        for (let end = start; end < count; end += 1) {
            if (cost[start][end] === Infinity) {
                continue;
            }

            const candidate = cost[start][end] + dp[end + 1];
            if (candidate < dp[start]) {
                dp[start] = candidate;
                nextBreak[start] = end + 1;
            }
        }
    }

    const lines = [];
    let index = 0;

    while (index < count && nextBreak[index] !== -1) {
        lines.push(words.slice(index, nextBreak[index]).join(" "));
        index = nextBreak[index];
    }

    return {
        minCost: dp[0],
        lines,
    };
};

module.exports = wordWrap;
