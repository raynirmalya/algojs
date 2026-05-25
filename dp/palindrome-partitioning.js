const palindromePartitioning = (text) => {
    const length = text.length;
    const palindrome = Array.from({ length }, () => new Array(length).fill(false));
    const cuts = new Array(length).fill(0);
    const previous = new Array(length).fill(-1);

    for (let end = 0; end < length; end += 1) {
        cuts[end] = end;

        for (let start = 0; start <= end; start += 1) {
            if (
                text[start] === text[end] &&
                (end - start < 2 || palindrome[start + 1][end - 1])
            ) {
                palindrome[start][end] = true;

                if (start === 0) {
                    cuts[end] = 0;
                    previous[end] = -1;
                } else if (cuts[start - 1] + 1 < cuts[end]) {
                    cuts[end] = cuts[start - 1] + 1;
                    previous[end] = start - 1;
                }
            }
        }
    }

    const partitions = [];
    let end = length - 1;

    while (end >= 0) {
        const split = previous[end];
        partitions.push(text.slice(split + 1, end + 1));
        end = split;
    }

    partitions.reverse();

    return {
        minCuts: length === 0 ? 0 : cuts[length - 1],
        partitions,
    };
};

module.exports = palindromePartitioning;
