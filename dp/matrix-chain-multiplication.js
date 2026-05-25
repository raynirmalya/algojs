const buildParenthesization = (splitPoints, start, end) => {
    if (start === end) {
        return `A${start + 1}`;
    }

    const split = splitPoints[start][end];

    return `(${buildParenthesization(splitPoints, start, split)} x ${buildParenthesization(splitPoints, split + 1, end)})`;
};

const matrixChainMultiplication = (dimensions) => {
    if (!Array.isArray(dimensions) || dimensions.length < 2) {
        throw new TypeError("matrixChainMultiplication expects a dimensions array of length at least 2.");
    }

    const matrixCount = dimensions.length - 1;
    const costs = Array.from({ length: matrixCount }, () => new Array(matrixCount).fill(0));
    const splitPoints = Array.from({ length: matrixCount }, () => new Array(matrixCount).fill(0));

    for (let chainLength = 2; chainLength <= matrixCount; chainLength += 1) {
        for (let start = 0; start <= matrixCount - chainLength; start += 1) {
            const end = start + chainLength - 1;
            costs[start][end] = Infinity;

            for (let split = start; split < end; split += 1) {
                const cost =
                    costs[start][split] +
                    costs[split + 1][end] +
                    (dimensions[start] * dimensions[split + 1] * dimensions[end + 1]);

                if (cost < costs[start][end]) {
                    costs[start][end] = cost;
                    splitPoints[start][end] = split;
                }
            }
        }
    }

    return {
        minCost: matrixCount === 0 ? 0 : costs[0][matrixCount - 1],
        parenthesization:
            matrixCount === 0 ? "" : buildParenthesization(splitPoints, 0, matrixCount - 1),
    };
};

module.exports = matrixChainMultiplication;
