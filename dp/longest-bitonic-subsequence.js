const longestBitonicSubsequence = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("longestBitonicSubsequence expects an array.");
    }

    const length = values.length;

    if (length === 0) {
        return {
            length: 0,
        };
    }

    const lis = new Array(length).fill(1);
    const lds = new Array(length).fill(1);

    for (let end = 0; end < length; end += 1) {
        for (let start = 0; start < end; start += 1) {
            if (values[start] < values[end]) {
                lis[end] = Math.max(lis[end], lis[start] + 1);
            }
        }
    }

    for (let start = length - 1; start >= 0; start -= 1) {
        for (let end = length - 1; end > start; end -= 1) {
            if (values[end] < values[start]) {
                lds[start] = Math.max(lds[start], lds[end] + 1);
            }
        }
    }

    let best = 0;

    for (let index = 0; index < length; index += 1) {
        best = Math.max(best, lis[index] + lds[index] - 1);
    }

    return {
        length: best,
    };
};

module.exports = longestBitonicSubsequence;
