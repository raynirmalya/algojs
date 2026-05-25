const heldKarpTSP = (matrix) => {
    if (!Array.isArray(matrix) || matrix.length === 0 || matrix.some((row) => !Array.isArray(row) || row.length !== matrix.length)) {
        throw new TypeError("heldKarpTSP expects a non-empty square distance matrix.");
    }

    const size = matrix.length;
    const dp = new Map();
    const parent = new Map();
    const keyOf = (mask, vertex) => `${mask}|${vertex}`;

    for (let vertex = 1; vertex < size; vertex += 1) {
        const mask = 1 << (vertex - 1);
        dp.set(keyOf(mask, vertex), matrix[0][vertex]);
    }

    const subsets = 1 << (size - 1);

    for (let mask = 1; mask < subsets; mask += 1) {
        for (let end = 1; end < size; end += 1) {
            if ((mask & (1 << (end - 1))) === 0) {
                continue;
            }

            const previousMask = mask ^ (1 << (end - 1));

            if (previousMask === 0) {
                continue;
            }

            let best = Infinity;
            let bestParent = -1;

            for (let previous = 1; previous < size; previous += 1) {
                if ((previousMask & (1 << (previous - 1))) === 0) {
                    continue;
                }

                const candidate = dp.get(keyOf(previousMask, previous)) + matrix[previous][end];

                if (candidate < best) {
                    best = candidate;
                    bestParent = previous;
                }
            }

            dp.set(keyOf(mask, end), best);
            parent.set(keyOf(mask, end), bestParent);
        }
    }

    const fullMask = subsets - 1;
    let minCost = Infinity;
    let lastVertex = -1;

    for (let vertex = 1; vertex < size; vertex += 1) {
        const candidate = dp.get(keyOf(fullMask, vertex)) + matrix[vertex][0];

        if (candidate < minCost) {
            minCost = candidate;
            lastVertex = vertex;
        }
    }

    const path = [0];
    let mask = fullMask;
    let current = lastVertex;

    while (current !== -1) {
        path.push(current);
        const next = parent.get(keyOf(mask, current)) ?? -1;
        mask ^= 1 << (current - 1);
        current = next;
    }

    path.push(0);

    return {
        minCost,
        path: path.reverse(),
    };
};

module.exports = heldKarpTSP;
